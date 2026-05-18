import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

import { PlaywrightCrawler } from "crawlee";

import {
  discoverDocumentsFromKuaishouMenu,
  fetchKuaishouMenuList,
  isKuaishouDocsUrl,
} from "./kuaishou";
import { parseCollectionRecipe, type CollectionRecipe, type SourceRecipe } from "./recipe";

export type DiscoveredLink = {
  text: string;
  href: string;
};

export type CollectionManifestItem = {
  source_id: string;
  title: string;
  url: string;
  recipe: SourceRecipe;
};

export type CollectionManifest = {
  id: string;
  platform: string;
  entry_url: string;
  discovered_at: string;
  items: CollectionManifestItem[];
};

export type DiscoverDocumentsInput = {
  collectionId: string;
  platform: string;
  entryUrl: string;
  linkPatterns: string[];
  links: DiscoveredLink[];
  discoveredAt?: string;
  maxItems?: number | "all";
};

type OceanEngineTreeNode = {
  doc_id?: unknown;
  title?: unknown;
  child_docs?: unknown;
};

export function discoverDocumentsFromLinks(input: DiscoverDocumentsInput): CollectionManifest {
  const itemBySourceId = new Map<string, CollectionManifestItem>();
  const items: CollectionManifestItem[] = [];

  for (const link of input.links) {
    const url = normalizeUrl(link.href, input.entryUrl);
    if (!url || !matchesAnyPattern(url, input.linkPatterns)) {
      continue;
    }

    const sourceId = sourceIdFromUrl(input.platform, url);
    if (!sourceId) {
      continue;
    }

    const title = cleanTitle(link.text) || sourceId;
    const item: CollectionManifestItem = {
      source_id: sourceId,
      title,
      url,
      recipe: {
        id: sourceId,
        platform: input.platform,
        type: "official_html",
        url,
        title_hint: title === sourceId ? undefined : title,
        capture: {
          mode: "playwright",
          wait_for: "body",
        },
      },
    };

    const existing = itemBySourceId.get(sourceId);
    if (existing) {
      if (isBetterTitle(item.title, existing.title, sourceId)) {
        Object.assign(existing, item);
      }
      continue;
    }

    itemBySourceId.set(sourceId, item);
    items.push(item);

  }

  const limitedItems = typeof input.maxItems === "number" ? items.slice(0, input.maxItems) : items;

  return {
    id: input.collectionId,
    platform: input.platform,
    entry_url: input.entryUrl,
    discovered_at: input.discoveredAt ?? new Date().toISOString(),
    items: limitedItems,
  };
}

function isBetterTitle(candidate: string, current: string, sourceId: string): boolean {
  if (candidate === sourceId) {
    return false;
  }

  return current === sourceId || genericNavigationTitles.has(current);
}

const genericNavigationTitles = new Set([
  "配置示例",
  "接口文档",
  "业务专题",
  "开发者工具",
]);

export function discoverDocumentsFromOceanEngineTree(input: {
  collectionId: string;
  platform: string;
  entryUrl: string;
  tree: unknown;
  discoveredAt?: string;
  maxItems?: number | "all";
}): CollectionManifest {
  const labelPath = labelPathFromEntryUrl(input.entryUrl);
  const docs = extractOceanEngineDocs(input.tree);
  const links = docs.map((doc) => ({
    text: doc.title,
    href: `${labelPath}/docs/${doc.docId}?origin=left_nav`,
  }));

  return discoverDocumentsFromLinks({
    collectionId: input.collectionId,
    platform: input.platform,
    entryUrl: input.entryUrl,
    linkPatterns: [`${labelPath}/docs/`],
    links,
    discoveredAt: input.discoveredAt,
    maxItems: input.maxItems,
  });
}

export async function readCollectionRecipe(recipePath: string): Promise<CollectionRecipe> {
  const raw = await readFile(recipePath, "utf8");
  return parseCollectionRecipe(JSON.parse(raw));
}

export async function discoverCollection(recipe: CollectionRecipe): Promise<CollectionManifest> {
  if (isKuaishouDocsUrl(recipe.entry_url)) {
    const menuList = await fetchKuaishouMenuList(recipe.entry_url);
    return discoverDocumentsFromKuaishouMenu({
      collectionId: recipe.id,
      platform: recipe.platform,
      entryUrl: recipe.entry_url,
      menuList,
      maxItems: recipe.discover.max_items,
    });
  }

  const discovery = recipe.discover.mode === "fetch"
    ? { links: await discoverLinksWithFetch(recipe.entry_url), trees: [] as unknown[] }
    : await discoverLinksWithPlaywright(recipe);

  const linkManifest = discoverDocumentsFromLinks({
    collectionId: recipe.id,
    platform: recipe.platform,
    entryUrl: recipe.entry_url,
    linkPatterns: recipe.discover.link_patterns,
    links: discovery.links,
    maxItems: recipe.discover.max_items,
  });
  const treeManifests = discovery.trees.map((tree) =>
    discoverDocumentsFromOceanEngineTree({
      collectionId: recipe.id,
      platform: recipe.platform,
      entryUrl: recipe.entry_url,
      tree,
      maxItems: recipe.discover.max_items,
    }),
  );

  return mergeCollectionManifests(linkManifest, ...treeManifests);
}

export async function writeCollectionManifest(
  rootDir: string,
  manifest: CollectionManifest,
): Promise<string> {
  const targetDir = path.join(
    rootDir,
    "data",
    "sources",
    manifest.platform,
    "_collections",
    manifest.id,
  );
  await mkdir(targetDir, { recursive: true });
  await writeFile(path.join(targetDir, "manifest.json"), `${JSON.stringify(manifest, null, 2)}\n`, "utf8");

  return targetDir;
}

async function discoverLinksWithFetch(entryUrl: string): Promise<DiscoveredLink[]> {
  const response = await fetch(entryUrl, {
    headers: {
      "user-agent": "ad-docs-llms-builder/0.1",
    },
  });

  if (!response.ok) {
    throw new Error(`failed to fetch ${entryUrl}: HTTP ${response.status}`);
  }

  const html = await response.text();
  return [...html.matchAll(/<a\b[^>]*href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi)].map((match) => ({
    href: match[1] ?? "",
    text: stripTags(match[2] ?? ""),
  }));
}

async function discoverLinksWithPlaywright(recipe: CollectionRecipe): Promise<{
  links: DiscoveredLink[];
  trees: unknown[];
}> {
  let links: DiscoveredLink[] = [];
  const trees: unknown[] = [];

  const crawler = new PlaywrightCrawler({
    maxConcurrency: 1,
    maxRequestRetries: 2,
    requestHandlerTimeoutSecs: 90,
    launchContext: {
      launchOptions: {
        headless: true,
      },
    },
    async requestHandler({ page }) {
      page.on("response", async (response) => {
        const url = response.url();
        if (!url.includes("/skiff/api/doc/client/tree/get/")) {
          return;
        }

        try {
          trees.push(await response.json());
        } catch {
          // Ignore non-JSON or unavailable response bodies.
        }
      });

      await page.waitForLoadState("domcontentloaded", { timeout: 60_000 });

      if (recipe.discover.wait_for) {
        await page.waitForSelector(recipe.discover.wait_for, { timeout: 15_000 });
      }

      await page.waitForTimeout(5_000);

      links = await page.evaluate(() =>
        Array.from(document.querySelectorAll("a")).map((anchor) => ({
          text: (anchor.textContent || "").trim(),
          href: anchor.href || anchor.getAttribute("href") || "",
        })),
      );
    },
  });

  await crawler.run([{ url: recipe.entry_url, uniqueKey: recipe.id }]);

  return { links, trees };
}

function mergeCollectionManifests(...manifests: CollectionManifest[]): CollectionManifest {
  const [first] = manifests;
  if (!first) {
    throw new Error("at least one manifest is required");
  }

  const itemBySourceId = new Map<string, CollectionManifestItem>();
  const items: CollectionManifestItem[] = [];
  for (const manifest of manifests) {
    for (const item of manifest.items) {
      const existing = itemBySourceId.get(item.source_id);
      if (existing) {
        Object.assign(existing, item);
        continue;
      }

      itemBySourceId.set(item.source_id, item);
      items.push(item);
    }
  }

  return {
    ...first,
    items,
  };
}

function extractOceanEngineDocs(tree: unknown): Array<{ docId: string; title: string }> {
  const roots = getPrimaryDocList(tree);
  const docs: Array<{ docId: string; title: string }> = [];

  for (const root of roots) {
    walkOceanEngineNode(root, docs);
  }

  return docs.filter((doc) => /^[0-9]+$/.test(doc.docId));
}

function getPrimaryDocList(tree: unknown): unknown[] {
  if (!isRecord(tree) || !isRecord(tree.data) || !Array.isArray(tree.data.primary_doc_list)) {
    return [];
  }

  return tree.data.primary_doc_list;
}

function walkOceanEngineNode(node: unknown, docs: Array<{ docId: string; title: string }>): void {
  if (!isRecord(node)) {
    return;
  }

  const typedNode = node as OceanEngineTreeNode;
  if (typeof typedNode.doc_id === "string" && typeof typedNode.title === "string") {
    docs.push({
      docId: typedNode.doc_id,
      title: typedNode.title,
    });
  }

  if (Array.isArray(typedNode.child_docs)) {
    for (const child of typedNode.child_docs) {
      walkOceanEngineNode(child, docs);
    }
  }
}

function labelPathFromEntryUrl(entryUrl: string): string {
  const parsed = new URL(entryUrl);
  const match = parsed.pathname.match(/^(\/labels\/[0-9]+)\/docs\//);
  return match?.[1] ?? "/labels/7";
}

function normalizeUrl(href: string, baseUrl: string): string | undefined {
  try {
    return new URL(href, baseUrl).toString();
  } catch {
    return undefined;
  }
}

function matchesAnyPattern(url: string, patterns: string[]): boolean {
  return patterns.some((pattern) => url.includes(pattern));
}

function sourceIdFromUrl(platform: string, url: string): string | undefined {
  const parsed = new URL(url);
  const documentId = parsed.searchParams.get("documentId");
  if (documentId && /^[0-9]+$/.test(documentId)) {
    return `${platform}_${documentId}`;
  }

  const match = parsed.pathname.match(/\/docs\/([0-9]+)/);
  if (!match?.[1]) {
    const pathSlug = slugFromPath(parsed.pathname);
    return pathSlug ? `${platform}_${pathSlug}` : undefined;
  }

  return `${platform}_${match[1]}`;
}

function slugFromPath(pathname: string): string | undefined {
  const slug = pathname
    .replace(/^\/+|\/+$/g, "")
    .replace(/[^a-zA-Z0-9]+/g, "_")
    .replace(/^_+|_+$/g, "")
    .toLowerCase();

  return slug || undefined;
}

function cleanTitle(text: string): string {
  return text.replace(/\s+/g, " ").trim();
}

function stripTags(html: string): string {
  return html.replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}
