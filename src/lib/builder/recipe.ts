export type SourceType = "web" | "official_pdf" | "lark_sheet" | "lark_doc" | "manual_note";

export type CaptureMode = "fetch" | "playwright";

export type SourceRecipe = {
  id: string;
  platform: string;
  type: SourceType;
  url: string;
  title_hint?: string;
  tasks_hint?: string[];
  capture: {
    mode: CaptureMode;
    wait_for?: string;
  };
};

export type WebCollectionRecipe = {
  platform: string;
  type: "web";
  entry_url: string;
  discover: {
    mode: CaptureMode;
    link_patterns: string[];
    wait_for?: string;
    max_items?: number | "all";
  };
};

export type LarkDocUrlCollectionRecipe = {
  platform: string;
  type: "lark_doc";
  entry_url: string;
  discover: {
    mode: "fetch";
    link_patterns: string[];
    max_items?: number | "all";
  };
};

export type CollectionRecipe = WebCollectionRecipe | LarkDocUrlCollectionRecipe;

const sourceTypes = new Set<SourceType>([
  "web",
  "official_pdf",
  "lark_sheet",
  "lark_doc",
  "manual_note",
]);

const captureModes = new Set<CaptureMode>(["fetch", "playwright"]);
const safeIdPattern = /^[a-z0-9][a-z0-9_-]*$/;

export function parseSourceRecipe(input: unknown): SourceRecipe {
  if (!isRecord(input)) {
    throw new Error("recipe must be an object");
  }

  const id = requireString(input.id, "id");
  if (!safeIdPattern.test(id)) {
    throw new Error("id must use lowercase letters, numbers, underscores, or hyphens");
  }

  const platform = requireString(input.platform, "platform");
  if (!safeIdPattern.test(platform)) {
    throw new Error("platform must use lowercase letters, numbers, underscores, or hyphens");
  }

  const type = requireString(input.type, "type");
  if (!sourceTypes.has(type as SourceType)) {
    throw new Error(`type must be one of: ${Array.from(sourceTypes).join(", ")}`);
  }

  const url = requireString(input.url, "url");
  validateHttpUrl(url);

  if (!isRecord(input.capture)) {
    throw new Error("capture must be an object");
  }

  const mode = requireString(input.capture.mode, "capture.mode");
  if (!captureModes.has(mode as CaptureMode)) {
    throw new Error(`capture.mode must be one of: ${Array.from(captureModes).join(", ")}`);
  }

  return {
    id,
    platform,
    type: type as SourceType,
    url,
    title_hint: optionalString(input.title_hint, "title_hint"),
    tasks_hint: optionalStringArray(input.tasks_hint, "tasks_hint"),
    capture: {
      mode: mode as CaptureMode,
      wait_for: optionalString(input.capture.wait_for, "capture.wait_for"),
    },
  };
}

export function parseCollectionRecipe(input: unknown): CollectionRecipe {
  if (!isRecord(input)) {
    throw new Error("collection recipe must be an object");
  }

  const platform = requireSafeId(input.platform, "platform");
  if (input.type !== undefined) {
    throw new Error("collection recipe type is inferred from url; remove type");
  }

  const entryUrl = requireString(input.url, "url");
  validateHttpUrl(entryUrl);
  const type = inferCollectionTypeFromUrl(entryUrl);

  if (!isRecord(input.discover)) {
    throw new Error("discover must be an object");
  }

  const mode = type === "lark_doc" ? "fetch" : requireString(input.discover.mode, "discover.mode");
  if (!captureModes.has(mode as CaptureMode)) {
    throw new Error(`discover.mode must be one of: ${Array.from(captureModes).join(", ")}`);
  }

  const linkPatterns = optionalStringArray(input.discover.link_patterns, "discover.link_patterns");
  if (!linkPatterns || linkPatterns.length === 0) {
    throw new Error("discover.link_patterns must contain at least one pattern");
  }

  return {
    platform,
    type,
    entry_url: entryUrl,
    discover: {
      mode: mode as CaptureMode,
      link_patterns: linkPatterns,
      ...type === "web"
        ? { wait_for: optionalString(input.discover.wait_for, "discover.wait_for") }
        : {},
      max_items: optionalPositiveIntegerOrAll(input.discover.max_items, "discover.max_items"),
    },
  } as CollectionRecipe;
}

export function parseCollectionRecipes(input: unknown): CollectionRecipe[] {
  if (Array.isArray(input) || !isRecord(input)) {
    throw new Error("collection recipe config must be a platform-level object");
  }

  const platform = requireSafeId(input.platform, "platform");
  if (!Array.isArray(input.sources)) {
    throw new Error("sources must be an array");
  }

  if (input.sources.length === 0) {
    throw new Error("sources must contain at least one source");
  }

  return input.sources.map((source) => parseCollectionRecipe({
    ...requireRecord(source, "sources item"),
    platform,
  }));
}

function inferCollectionTypeFromUrl(url: string): CollectionRecipe["type"] {
  const parsed = new URL(url);
  if (isLarkDocUrl(parsed)) {
    return "lark_doc";
  }

  return "web";
}

function isLarkDocUrl(url: URL): boolean {
  const hostname = url.hostname.toLowerCase();
  const isLarkHost =
    hostname.endsWith("larkoffice.com") ||
    hostname.endsWith("feishu.cn") ||
    hostname.endsWith("larksuite.com");

  return isLarkHost && /^\/(?:docx|wiki)\//.test(url.pathname);
}

function requireSafeId(value: unknown, field: string): string {
  const id = requireString(value, field);
  if (!safeIdPattern.test(id)) {
    throw new Error(`${field} must use lowercase letters, numbers, underscores, or hyphens`);
  }

  return id;
}

function requireRecord(value: unknown, field: string): Record<string, unknown> {
  if (!isRecord(value)) {
    throw new Error(`${field} must be an object`);
  }

  return value;
}

function requireString(value: unknown, field: string): string {
  if (typeof value !== "string" || value.trim() === "") {
    throw new Error(`${field} must be a non-empty string`);
  }

  return value.trim();
}

function optionalString(value: unknown, field: string): string | undefined {
  if (value === undefined) {
    return undefined;
  }

  if (typeof value !== "string") {
    throw new Error(`${field} must be a string`);
  }

  const trimmed = value.trim();
  return trimmed === "" ? undefined : trimmed;
}

function optionalStringArray(value: unknown, field: string): string[] | undefined {
  if (value === undefined) {
    return undefined;
  }

  if (!Array.isArray(value) || value.some((item) => typeof item !== "string" || item.trim() === "")) {
    throw new Error(`${field} must be an array of non-empty strings`);
  }

  return value.map((item) => item.trim());
}

function optionalPositiveIntegerOrAll(value: unknown, field: string): number | "all" | undefined {
  if (value === undefined) {
    return undefined;
  }

  if (value === "all") {
    return "all";
  }

  if (!Number.isInteger(value) || typeof value !== "number" || value <= 0) {
    throw new Error(`${field} must be a positive integer or "all"`);
  }

  return value;
}

function validateHttpUrl(url: string): void {
  const parsed = new URL(url);
  if (parsed.protocol !== "http:" && parsed.protocol !== "https:") {
    throw new Error("url must use http or https");
  }
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}
