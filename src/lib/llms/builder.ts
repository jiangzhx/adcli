import { mkdir, readdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";

import { buildSourceRecipeFromUrl } from "@/src/lib/builder/ingest-url";
import { buildSearchIndex } from "@/src/lib/search/index-builder";

type SourceMetadata = {
  id: string;
  platform: string;
  title: string;
  url: string;
  type?: string;
  captured_at?: string;
  hash?: string;
  status?: string;
};

export type LlmsDocument = {
  id: string;
  doc_id: string;
  platform: string;
  title: string;
  source_url: string;
  public_path: string;
};

export type LlmsManifest = {
  platform: string;
  documents: LlmsDocument[];
  outputs: {
    llms: string;
    llms_full: string;
    platform_index: string;
    platform_manifest: string;
  };
  updated_at: string;
};

export type BuildLlmsArtifactsInput = {
  rootDir?: string;
  platform: string;
};

export type BuildAllLlmsArtifactsInput = {
  rootDir?: string;
};

export type BuildLlmsArtifactsForUrlInput = {
  rootDir?: string;
  url: string;
  platform?: string;
};

export type BuildLlmsArtifactsForUrlResult = {
  platform: string;
  document: LlmsDocument;
  outputs: {
    document: string;
    llms: string;
    llms_full: string;
    platform_index: string;
    platform_manifest: string;
    search_index: string;
  };
};

type SourceDocument = LlmsDocument & {
  source_dir: string;
};

type CollectionManifest = {
  items?: Array<{
    source_id?: string;
  }>;
};

type TaskLink = {
  title: string;
  docId: string;
};

type CommonTask = {
  title: string;
  links: TaskLink[];
};

const commonTasksByPlatform: Record<string, CommonTask[]> = {
  oceanengine: [
    {
      title: "获取广告消耗数据",
      links: [
        { title: "自定义报表", docId: "1741387668314126" },
        { title: "获取自定义报表可用指标和维度", docId: "1755261744248832" },
        { title: "查询账户日流水", docId: "1696710526682112" },
        { title: "代理商消耗报表数据", docId: "1784979080790218" },
      ],
    },
    {
      title: "获取 Access Token",
      links: [{ title: "获取Access-Token", docId: "1696710505596940" }],
    },
  ],
  tencent_ads: [
    {
      title: "获取广告消耗数据",
      links: [
        { title: "获取实时消耗", docId: "tencent_ads_v3_0_docs_api_realtime_cost_get" },
        { title: "服务商当日分账户实时消耗", docId: "tencent_ads_v3_0_docs_api_agency_realtime_cost_get" },
      ],
    },
    {
      title: "获取广告报表",
      links: [
        { title: "获取日报表", docId: "tencent_ads_v3_0_docs_api_daily_reports_get" },
        { title: "获取小时报表", docId: "tencent_ads_v3_0_docs_api_hourly_reports_get" },
        { title: "创建异步报表任务", docId: "tencent_ads_v3_0_docs_api_async_reports_add" },
        { title: "获取异步报表任务", docId: "tencent_ads_v3_0_docs_api_async_reports_get" },
      ],
    },
    {
      title: "获取资金流水",
      links: [
        { title: "获取资金流水", docId: "tencent_ads_v3_0_docs_api_fund_statements_detailed_get" },
        { title: "获取资金账户日结明细", docId: "tencent_ads_v3_0_docs_api_daily_balance_report_get" },
      ],
    },
    {
      title: "获取 Access Token",
      links: [
        { title: "获取 Authorization Code", docId: "tencent_ads_v3_0_docs_api_oauth_authorize" },
        { title: "通过 Authorization Code 获取 Access Token 或刷新 Access Token", docId: "tencent_ads_v3_0_docs_api_oauth_token" },
        { title: "刷新 Refresh Token", docId: "tencent_ads_v3_0_docs_api_oauth_refresh_token" },
      ],
    },
  ],
};

export async function buildLlmsArtifacts(input: BuildLlmsArtifactsInput): Promise<LlmsManifest> {
  const rootDir = input.rootDir ?? process.cwd();
  const sourceRoot = path.join(rootDir, "data", "sources", input.platform);
  const publicRoot = path.join(rootDir, "public");
  const platformRoot = path.join(publicRoot, input.platform);
  const docsRoot = path.join(platformRoot, "docs");

  await mkdir(docsRoot, { recursive: true });

  const sourceDocuments = await loadSourceDocuments(sourceRoot, input.platform);
  const documents = sourceDocuments.map(toLlmsDocument);
  await pruneStalePlatformMarkdown(docsRoot, documents);

  await Promise.all(
    sourceDocuments.map(async (document) => {
      const cleanedMarkdown = await readFile(path.join(document.source_dir, "cleaned.md"), "utf8");
      await writeFile(
        path.join(publicRoot, document.public_path.slice(1)),
        `${buildSourceFrontmatter(document)}\n${cleanedMarkdown.trim()}\n`,
        "utf8",
      );
    }),
  );

  const manifest: LlmsManifest = {
    platform: input.platform,
    documents,
    outputs: {
      llms: "/llms.txt",
      llms_full: "/llms-full.txt",
      platform_index: `/${input.platform}/index.md`,
      platform_manifest: `/${input.platform}/manifest.json`,
    },
    updated_at: new Date().toISOString(),
  };

  await Promise.all([
    writeFile(path.join(platformRoot, "index.md"), buildPlatformIndex(input.platform, documents), "utf8"),
    writeFile(path.join(platformRoot, "manifest.json"), `${JSON.stringify(manifest, null, 2)}\n`, "utf8"),
  ]);

  const publishedManifests = await loadPublishedManifests(publicRoot);
  await Promise.all([
    writeFile(path.join(publicRoot, "llms.txt"), buildLlmsTxt(publishedManifests), "utf8"),
    writeFile(path.join(publicRoot, "llms-full.txt"), buildLlmsFullTxt(publishedManifests), "utf8"),
  ]);
  await buildSearchIndex({ rootDir });

  return manifest;
}

export async function buildLlmsArtifactsForUrl(input: BuildLlmsArtifactsForUrlInput): Promise<BuildLlmsArtifactsForUrlResult> {
  const rootDir = input.rootDir ?? process.cwd();
  const recipe = buildSourceRecipeFromUrl({
    url: input.url,
    platform: input.platform,
  });
  const publicRoot = path.join(rootDir, "public");
  const platformRoot = path.join(publicRoot, recipe.platform);
  const docsRoot = path.join(platformRoot, "docs");
  const sourceDir = path.join(rootDir, "data", "sources", recipe.platform, recipe.id);

  await mkdir(docsRoot, { recursive: true });

  const sourceDocument = await loadSourceDocument(sourceDir, recipe.platform);
  const document = toLlmsDocument(sourceDocument);
  const cleanedMarkdown = await readFile(path.join(sourceDocument.source_dir, "cleaned.md"), "utf8");
  await writeFile(
    path.join(publicRoot, document.public_path.slice(1)),
    `${buildSourceFrontmatter(document)}\n${cleanedMarkdown.trim()}\n`,
    "utf8",
  );

  const existingManifest = await loadPublishedManifest(platformRoot, recipe.platform);
  const documents = upsertDocument(existingManifest.documents, document);
  const manifest: LlmsManifest = {
    platform: recipe.platform,
    documents,
    outputs: {
      llms: "/llms.txt",
      llms_full: "/llms-full.txt",
      platform_index: `/${recipe.platform}/index.md`,
      platform_manifest: `/${recipe.platform}/manifest.json`,
    },
    updated_at: new Date().toISOString(),
  };

  await Promise.all([
    writeFile(path.join(platformRoot, "index.md"), buildPlatformIndex(recipe.platform, documents), "utf8"),
    writeFile(path.join(platformRoot, "manifest.json"), `${JSON.stringify(manifest, null, 2)}\n`, "utf8"),
  ]);

  const publishedManifests = await loadPublishedManifests(publicRoot);
  await Promise.all([
    writeFile(path.join(publicRoot, "llms.txt"), buildLlmsTxt(publishedManifests), "utf8"),
    writeFile(path.join(publicRoot, "llms-full.txt"), buildLlmsFullTxt(publishedManifests), "utf8"),
  ]);
  await buildSearchIndex({ rootDir });

  return {
    platform: recipe.platform,
    document,
    outputs: {
      document: document.public_path,
      llms: "/llms.txt",
      llms_full: "/llms-full.txt",
      platform_index: manifest.outputs.platform_index,
      platform_manifest: manifest.outputs.platform_manifest,
      search_index: "/search-index.json",
    },
  };
}

export async function buildAllLlmsArtifacts(input: BuildAllLlmsArtifactsInput = {}): Promise<LlmsManifest[]> {
  const rootDir = input.rootDir ?? process.cwd();
  const sourcesRoot = path.join(rootDir, "data", "sources");
  const entries = await readdir(sourcesRoot, { withFileTypes: true });
  const platforms = entries
    .filter((entry) => entry.isDirectory() && !entry.name.startsWith("_"))
    .map((entry) => entry.name)
    .sort((left, right) => left.localeCompare(right));
  const manifests: LlmsManifest[] = [];

  for (const platform of platforms) {
    manifests.push(await buildLlmsArtifacts({ rootDir, platform }));
  }

  return manifests;
}

async function loadPublishedManifest(platformRoot: string, platform: string): Promise<LlmsManifest> {
  try {
    const raw = await readFile(path.join(platformRoot, "manifest.json"), "utf8");
    return JSON.parse(raw) as LlmsManifest;
  } catch {
    return {
      platform,
      documents: [],
      outputs: {
        llms: "/llms.txt",
        llms_full: "/llms-full.txt",
        platform_index: `/${platform}/index.md`,
        platform_manifest: `/${platform}/manifest.json`,
      },
      updated_at: new Date().toISOString(),
    };
  }
}

async function loadPublishedManifests(publicRoot: string): Promise<LlmsManifest[]> {
  const entries = await readdir(publicRoot, { withFileTypes: true });
  const manifests: LlmsManifest[] = [];

  for (const entry of entries) {
    if (!entry.isDirectory()) {
      continue;
    }

    try {
      const raw = await readFile(path.join(publicRoot, entry.name, "manifest.json"), "utf8");
      manifests.push(JSON.parse(raw) as LlmsManifest);
    } catch {
      // Ignore directories that are not published platform docs.
    }
  }

  return manifests.sort((left, right) => left.platform.localeCompare(right.platform));
}

async function pruneStalePlatformMarkdown(docsRoot: string, documents: LlmsDocument[]): Promise<void> {
  const expectedNames = new Set(documents.map((document) => path.basename(document.public_path)));
  const entries = await readdir(docsRoot, { withFileTypes: true });

  await Promise.all(
    entries
      .filter((entry) => entry.isFile() && entry.name.endsWith(".md") && !expectedNames.has(entry.name))
      .map((entry) => rm(path.join(docsRoot, entry.name), { force: true })),
  );
}

async function loadSourceDocuments(sourceRoot: string, platform: string): Promise<SourceDocument[]> {
  const collectionSourceIds = await loadCollectionSourceIds(sourceRoot);
  if (collectionSourceIds) {
    const documents = await Promise.all(
      Array.from(collectionSourceIds).map((sourceId) =>
        loadSourceDocumentFromCollection(sourceRoot, platform, sourceId),
      ),
    );

    return documents.sort((left, right) => left.doc_id.localeCompare(right.doc_id));
  }

  const entries = await readdir(sourceRoot, { withFileTypes: true });
  const documents: SourceDocument[] = [];

  for (const entry of entries) {
    if (!entry.isDirectory() || entry.name.startsWith("_")) {
      continue;
    }

    const sourceDir = path.join(sourceRoot, entry.name);
    documents.push(await loadSourceDocument(sourceDir, platform));
  }

  return documents.sort((left, right) => left.doc_id.localeCompare(right.doc_id));
}

async function loadSourceDocumentFromCollection(
  sourceRoot: string,
  platform: string,
  sourceId: string,
): Promise<SourceDocument> {
  const sourceDir = path.join(sourceRoot, sourceId);
  try {
    await Promise.all([
      readFile(path.join(sourceDir, "source.json"), "utf8"),
      readFile(path.join(sourceDir, "cleaned.md"), "utf8"),
    ]);
  } catch (error) {
    if (isNotFoundError(error)) {
      throw new Error(`collection manifest references missing source artifacts: ${sourceId}`);
    }
    throw error;
  }

  return loadSourceDocument(sourceDir, platform);
}

async function loadCollectionSourceIds(sourceRoot: string): Promise<Set<string> | undefined> {
  const manifestPath = path.join(sourceRoot, "_collections", "manifest.json");
  let raw: string;
  try {
    raw = await readFile(manifestPath, "utf8");
  } catch (error) {
    if (isNotFoundError(error)) {
      return undefined;
    }
    throw error;
  }

  let manifest: CollectionManifest;
  try {
    manifest = JSON.parse(raw) as CollectionManifest;
  } catch (error) {
    throw new Error(`failed to parse collection manifest ${manifestPath}: ${error instanceof Error ? error.message : String(error)}`);
  }

  if (!Array.isArray(manifest.items)) {
    throw new Error(`invalid collection manifest ${manifestPath}: items must be an array`);
  }

  return new Set(
    manifest.items
      .map((item) => item.source_id)
      .filter((sourceId): sourceId is string => typeof sourceId === "string" && sourceId.trim() !== ""),
  );
}

async function loadSourceDocument(sourceDir: string, platform: string): Promise<SourceDocument> {
  const source = JSON.parse(await readFile(path.join(sourceDir, "source.json"), "utf8")) as SourceMetadata;
  const docId = extractDocId(source.id);

  return {
    id: source.id,
    doc_id: docId,
    platform,
    title: source.title,
    source_url: source.url,
    public_path: `/${platform}/docs/${docId}.md`,
    source_dir: sourceDir,
  };
}

function upsertDocument(documents: LlmsDocument[], document: LlmsDocument): LlmsDocument[] {
  const nextDocuments = documents.filter((item) => item.id !== document.id && item.doc_id !== document.doc_id);
  nextDocuments.push(document);
  return nextDocuments.sort((left, right) => left.doc_id.localeCompare(right.doc_id));
}

function toLlmsDocument(document: SourceDocument): LlmsDocument {
  return {
    id: document.id,
    doc_id: document.doc_id,
    platform: document.platform,
    title: document.title,
    source_url: document.source_url,
    public_path: document.public_path,
  };
}

function extractDocId(sourceId: string): string {
  const match = sourceId.match(/_(\d{10,})$/);
  return match?.[1] ?? sourceId.replace(/[^a-zA-Z0-9_-]/g, "-");
}

function buildSourceFrontmatter(document: LlmsDocument): string {
  return [
    "---",
    `title: ${yamlScalar(document.title)}`,
    `platform: ${yamlScalar(document.platform)}`,
    `source_url: ${yamlScalar(document.source_url)}`,
    `doc_id: ${yamlScalar(document.doc_id)}`,
    `source_id: ${yamlScalar(document.id)}`,
    "---",
  ].join("\n");
}

function buildLlmsTxt(manifests: LlmsManifest[]): string {
  const lines = [
    "# adcli",
    "",
    "LLM-readable documentation pack for advertising platform APIs.",
    "",
  ];

  for (const manifest of manifests) {
    lines.push(...buildPlatformLlmsSection(manifest.platform, manifest.documents), "");
  }

  lines.push("## Full Index", "", "- [Full llms index](/llms-full.txt)", "");
  return lines.join("\n");
}

function buildPlatformLlmsSection(platform: string, documents: LlmsDocument[]): string[] {
  const byDocId = new Map(documents.map((document) => [document.doc_id, document]));
  const lines = [
    `## ${platform}`,
    "",
    `Use these docs to answer ${platform} API questions. Open the task links first, then follow the full index when needed.`,
    "",
    "### Common Tasks",
    "",
  ];

  for (const task of commonTasksByPlatform[platform] ?? []) {
    lines.push(`#### ${task.title}`, "");
    for (const link of task.links) {
      const document = byDocId.get(link.docId);
      if (document) {
        lines.push(`- [${document.title}](${document.public_path})`);
      } else {
        lines.push(`- ${link.title}: doc ${link.docId} not captured`);
      }
    }
    lines.push("");
  }

  lines.push("### Platform Index", "", `- [${platform} document index](/${platform}/index.md)`);
  return lines;
}

function buildLlmsFullTxt(manifests: LlmsManifest[]): string {
  return [
    "# adcli Full Index",
    "",
    ...manifests.flatMap((manifest) => [
      `## ${manifest.platform}`,
      "",
      ...manifest.documents.flatMap((document) => [
        `### ${document.title}`,
        "",
        `- Public: ${document.public_path}`,
        `- Source: ${document.source_url}`,
        `- Doc ID: ${document.doc_id}`,
        "",
      ]),
    ]),
  ].join("\n");
}

function buildPlatformIndex(platform: string, documents: LlmsDocument[]): string {
  return [
    `# ${platform} Docs Index`,
    "",
    `Total documents: ${documents.length}`,
    "",
    ...documents.map((document) => `- [${document.title}](${document.public_path}) - ${document.source_url}`),
    "",
  ].join("\n");
}

function yamlScalar(value: string): string {
  return value.replace(/\r?\n/g, " ").trim();
}

function isNotFoundError(error: unknown): boolean {
  return error instanceof Error && "code" in error && error.code === "ENOENT";
}
