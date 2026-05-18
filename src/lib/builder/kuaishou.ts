import type { CollectionManifest, CollectionManifestItem } from "./discover";

type KuaishouMenuNode = {
  menuId?: unknown;
  menuName?: unknown;
  platformType?: unknown;
  documentId?: unknown;
  documentName?: unknown;
  documentType?: unknown;
  children?: unknown;
};

type KuaishouDocumentDetail = {
  documentId?: unknown;
  documentName?: unknown;
  documentType?: unknown;
  description?: unknown;
  summary?: unknown;
  remark?: unknown;
  content?: unknown;
  url?: unknown;
  version?: unknown;
  targetPath?: unknown;
  httpMethod?: unknown;
  httpContentType?: unknown;
  bizName?: unknown;
  inputParamExampleList?: unknown;
  outputParamExampleList?: unknown;
  headerParams?: unknown;
  inputParams?: unknown;
  outputParams?: unknown;
  createTime?: unknown;
};

type KuaishouParam = {
  paramName?: unknown;
  paramType?: unknown;
  example?: unknown;
  description?: unknown;
  required?: unknown;
  note?: unknown;
  children?: unknown;
};

type KuaishouExample = {
  title?: unknown;
  type?: unknown;
  body?: unknown;
};

export function isKuaishouDocsUrl(url: string): boolean {
  const parsed = new URL(url);
  return parsed.hostname === "developers.e.kuaishou.com" && parsed.pathname === "/docs";
}

export async function fetchKuaishouMenuList(entryUrl: string): Promise<unknown[]> {
  const parsed = new URL(entryUrl);
  const platformType = parsed.searchParams.get("docType") || "DSP";
  const response = await postKuaishouDocumentApi(entryUrl, "/rest/open_api/platform/document/menu/list", {
    platformType,
    switchOld: 2,
  });

  const menuList = getPath(response, ["data", "menuList"]);
  return Array.isArray(menuList) ? menuList : [];
}

export function discoverDocumentsFromKuaishouMenu(input: {
  collectionId: string;
  platform: string;
  entryUrl: string;
  menuList: unknown[];
  discoveredAt?: string;
  maxItems?: number | "all";
}): CollectionManifest {
  const itemBySourceId = new Map<string, CollectionManifestItem>();
  const items: CollectionManifestItem[] = [];

  for (const doc of flattenKuaishouMenu(input.menuList)) {
    const sourceId = `${input.platform}_${doc.documentId}`;
    const title = doc.documentName || doc.menuName || sourceId;
    const url = buildKuaishouDocumentUrl(input.entryUrl, doc.documentId, doc.menuId, doc.platformType);
    const item: CollectionManifestItem = {
      source_id: sourceId,
      title,
      url,
      recipe: {
        id: sourceId,
        platform: input.platform,
        type: "official_html",
        url,
        title_hint: title,
        capture: {
          mode: "fetch",
          wait_for: "body",
        },
      },
    };

    const existing = itemBySourceId.get(sourceId);
    if (existing) {
      if (title.length > existing.title.length) {
        Object.assign(existing, item);
      }
      continue;
    }

    itemBySourceId.set(sourceId, item);
    items.push(item);
  }

  return {
    id: input.collectionId,
    platform: input.platform,
    entry_url: input.entryUrl,
    discovered_at: input.discoveredAt ?? new Date().toISOString(),
    items: typeof input.maxItems === "number" ? items.slice(0, input.maxItems) : items,
  };
}

export async function captureKuaishouDocumentHtml(url: string): Promise<string> {
  const parsed = new URL(url);
  const documentId = numericSearchParam(parsed, "documentId");
  const menuId = numericSearchParam(parsed, "menuId");
  if (!documentId || !menuId) {
    throw new Error(`kuaishou docs url must contain documentId and menuId: ${url}`);
  }

  const response = await postKuaishouDocumentApi(url, "/rest/open_api/platform/document/detail", {
    documentId,
    menuId,
  });
  const detail = getPath(response, ["data"]);
  if (!isRecord(detail)) {
    throw new Error(`kuaishou detail response does not contain data for ${url}`);
  }

  return buildKuaishouDocumentHtml(detail, url);
}

export function buildKuaishouDocumentHtml(detail: KuaishouDocumentDetail, sourceUrl: string): string {
  const title = stringValue(detail.documentName) || `Kuaishou document ${stringValue(detail.documentId)}`;
  const sections = [
    `<h1>${escapeHtml(title)}</h1>`,
    metadataTable(detail),
    textSection("概述", detail.description),
    textSection("摘要", detail.summary),
    textSection("备注", detail.remark),
    apiInfoSection(detail),
    paramsSection("Header 参数", detail.headerParams),
    paramsSection("请求参数", detail.inputParams),
    examplesSection("请求样例", detail.inputParamExampleList),
    paramsSection("返回参数", detail.outputParams),
    examplesSection("返回样例", detail.outputParamExampleList),
    contentSection(detail),
    externalUrlSection(detail.url),
  ].filter(Boolean);

  return [
    "<!doctype html>",
    "<html>",
    "<head>",
    `<meta charset="utf-8"><title>${escapeHtml(title)}</title>`,
    "</head>",
    "<body>",
    `<article data-source="kuaishou-document-api" data-source-url="${escapeHtml(sourceUrl)}">`,
    ...sections,
    "</article>",
    "</body>",
    "</html>",
  ].join("\n");
}

function flattenKuaishouMenu(menuList: unknown[]): Array<{
  menuId: number;
  menuName: string;
  platformType: string;
  documentId: number;
  documentName: string;
  documentType: string;
}> {
  const docs: ReturnType<typeof flattenKuaishouMenu> = [];
  for (const node of menuList) {
    walkKuaishouMenu(node, docs);
  }

  return docs;
}

function walkKuaishouMenu(
  node: unknown,
  docs: ReturnType<typeof flattenKuaishouMenu>,
): void {
  if (!isRecord(node)) {
    return;
  }

  const typed = node as KuaishouMenuNode;
  const menuId = numberValue(typed.menuId);
  const documentId = numberValue(typed.documentId);
  if (menuId && documentId) {
    docs.push({
      menuId,
      menuName: stringValue(typed.menuName),
      platformType: stringValue(typed.platformType) || "DSP",
      documentId,
      documentName: stringValue(typed.documentName),
      documentType: stringValue(typed.documentType),
    });
  }

  if (Array.isArray(typed.children)) {
    for (const child of typed.children) {
      walkKuaishouMenu(child, docs);
    }
  }
}

async function postKuaishouDocumentApi(refererUrl: string, path: string, body: unknown): Promise<unknown> {
  const response = await fetch(`https://developers.e.kuaishou.com${path}`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "user-agent": "ad-docs-llms-builder/0.1",
      referer: refererUrl,
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    throw new Error(`failed to fetch kuaishou api ${path}: HTTP ${response.status}`);
  }

  const json = await response.json() as unknown;
  if (isRecord(json) && json.result !== 1) {
    throw new Error(`kuaishou api ${path} returned result=${String(json.result)} message=${String(json.message)}`);
  }

  return json;
}

function buildKuaishouDocumentUrl(
  entryUrl: string,
  documentId: number,
  menuId: number,
  platformType: string,
): string {
  const url = new URL(entryUrl);
  url.pathname = "/docs";
  url.search = "";
  url.searchParams.set("docType", platformType || "DSP");
  url.searchParams.set("documentId", String(documentId));
  url.searchParams.set("menuId", String(menuId));
  return url.toString();
}

function metadataTable(detail: KuaishouDocumentDetail): string {
  const rows = [
    ["documentId", detail.documentId],
    ["documentType", detail.documentType],
    ["version", detail.version],
    ["bizName", detail.bizName],
    ["createTime", formatTimestamp(detail.createTime)],
  ].filter(([, value]) => stringValue(value)) as Array<[string, unknown]>;

  return renderKeyValueTable("文档元数据", rows);
}

function apiInfoSection(detail: KuaishouDocumentDetail): string {
  const rows = [
    ["targetPath", detail.targetPath],
    ["httpMethod", detail.httpMethod],
    ["httpContentType", detail.httpContentType],
  ].filter(([, value]) => stringValue(value)) as Array<[string, unknown]>;

  return renderKeyValueTable("接口信息", rows);
}

function renderKeyValueTable(title: string, rows: Array<[string, unknown]>): string {
  if (rows.length === 0) {
    return "";
  }

  return [
    `<h2>${escapeHtml(title)}</h2>`,
    "<table><thead><tr><th>字段</th><th>值</th></tr></thead><tbody>",
    ...rows.map(([key, value]) => `<tr><td>${escapeHtml(key)}</td><td>${escapeHtml(stringValue(value))}</td></tr>`),
    "</tbody></table>",
  ].join("\n");
}

function textSection(title: string, value: unknown): string {
  const text = stripHtml(stringValue(value));
  if (!text) {
    return "";
  }

  return `<h2>${escapeHtml(title)}</h2>\n<p>${escapeHtml(text)}</p>`;
}

function contentSection(detail: KuaishouDocumentDetail): string {
  const content = stripHtml(stringValue(detail.content));
  if (!content) {
    return "";
  }

  return `<h2>原始内容</h2>\n<pre>${escapeHtml(content)}</pre>`;
}

function externalUrlSection(url: unknown): string {
  const value = stringValue(url);
  if (!value) {
    return "";
  }

  return `<h2>外部文档</h2>\n<p><a href="${escapeHtml(value)}">${escapeHtml(value)}</a></p>`;
}

function paramsSection(title: string, value: unknown): string {
  if (!Array.isArray(value) || value.length === 0) {
    return "";
  }

  const rows = flattenParams(value);
  if (rows.length === 0) {
    return "";
  }

  return [
    `<h2>${escapeHtml(title)}</h2>`,
    "<table><thead><tr><th>字段</th><th>类型</th><th>必填</th><th>示例</th><th>说明</th><th>备注</th></tr></thead><tbody>",
    ...rows.map((row) => [
      "<tr>",
      `<td>${escapeHtml(row.name)}</td>`,
      `<td>${escapeHtml(row.type)}</td>`,
      `<td>${escapeHtml(row.required)}</td>`,
      `<td>${escapeHtml(row.example)}</td>`,
      `<td>${escapeHtml(row.description)}</td>`,
      `<td>${escapeHtml(row.note)}</td>`,
      "</tr>",
    ].join("")),
    "</tbody></table>",
  ].join("\n");
}

function flattenParams(value: unknown[], depth = 0): Array<{
  name: string;
  type: string;
  required: string;
  example: string;
  description: string;
  note: string;
}> {
  const rows: ReturnType<typeof flattenParams> = [];
  for (const item of value) {
    if (!isRecord(item)) {
      continue;
    }

    const param = item as KuaishouParam;
    rows.push({
      name: `${depth > 0 ? `${"  ".repeat(depth)}- ` : ""}${stringValue(param.paramName)}`,
      type: stringValue(param.paramType),
      required: numberValue(param.required) === 1 ? "是" : "",
      example: stringValue(param.example),
      description: stripHtml(stringValue(param.description)),
      note: stripHtml(stringValue(param.note)),
    });

    if (Array.isArray(param.children)) {
      rows.push(...flattenParams(param.children, depth + 1));
    }
  }

  return rows.filter((row) => row.name || row.description);
}

function examplesSection(title: string, value: unknown): string {
  if (!Array.isArray(value) || value.length === 0) {
    return "";
  }

  const examples = value
    .filter(isRecord)
    .map((item) => item as KuaishouExample)
    .map((item, index) => {
      const exampleTitle = stringValue(item.title) || `${title} ${index + 1}`;
      const type = stringValue(item.type);
      const body = stringValue(item.body);
      if (!body) {
        return "";
      }

      return `<h3>${escapeHtml(exampleTitle)}${type ? ` (${escapeHtml(type)})` : ""}</h3>\n<pre>${escapeHtml(body)}</pre>`;
    })
    .filter(Boolean);

  if (examples.length === 0) {
    return "";
  }

  return [`<h2>${escapeHtml(title)}</h2>`, ...examples].join("\n");
}

function numericSearchParam(url: URL, name: string): number | undefined {
  const value = Number(url.searchParams.get(name));
  return Number.isInteger(value) && value > 0 ? value : undefined;
}

function getPath(value: unknown, path: string[]): unknown {
  let cursor = value;
  for (const key of path) {
    if (!isRecord(cursor)) {
      return undefined;
    }
    cursor = cursor[key];
  }

  return cursor;
}

function numberValue(value: unknown): number | undefined {
  return typeof value === "number" && Number.isFinite(value) ? value : undefined;
}

function stringValue(value: unknown): string {
  if (typeof value === "string") {
    return value.trim();
  }

  if (typeof value === "number" || typeof value === "boolean") {
    return String(value);
  }

  return "";
}

function formatTimestamp(value: unknown): string {
  const timestamp = numberValue(value);
  return timestamp ? new Date(timestamp).toISOString() : "";
}

function stripHtml(value: string): string {
  return value
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<\/(p|div|li|tr|h[1-6])>/gi, "\n")
    .replace(/<[^>]+>/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll("\"", "&quot;")
    .replaceAll("'", "&#39;");
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}
