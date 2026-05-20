import { mkdir, readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

import { defaultPlatformAliases } from "./platforms";
import { createMiniSearch, toMiniSearchDocuments } from "./searcher";
import type { SearchIndex, SearchIndexDocument } from "./types";

type BuildSearchIndexInput = {
  rootDir?: string;
};

type PublishedManifest = {
  platform: string;
  documents?: Array<{
    id?: string;
    doc_id?: string;
    platform?: string;
    title?: string;
    source_url?: string;
    public_path?: string;
  }>;
};

export async function buildSearchIndex(input: BuildSearchIndexInput = {}): Promise<SearchIndex> {
  const rootDir = input.rootDir ?? process.cwd();
  const publicRoot = path.join(rootDir, "public");
  const manifests = await loadPublishedManifests(publicRoot);
  const documents: SearchIndexDocument[] = [];

  for (const manifest of manifests) {
    for (const document of manifest.documents ?? []) {
      if (!document.public_path || !document.title) {
        continue;
      }

      const markdown = await readFile(path.join(publicRoot, document.public_path), "utf8");
      const markdownWithoutFrontmatter = stripFrontmatter(markdown);
      const headings = extractHeadings(markdownWithoutFrontmatter);

      documents.push({
        id: document.doc_id ?? document.id ?? document.public_path,
        platform: document.platform ?? manifest.platform,
        title: document.title,
        public_path: document.public_path,
        source_url: document.source_url ?? "",
        headings,
        text: normalizeMarkdown(markdownWithoutFrontmatter),
      });
    }
  }

  documents.sort((left, right) => {
    const platformOrder = left.platform.localeCompare(right.platform);
    return platformOrder === 0 ? left.id.localeCompare(right.id) : platformOrder;
  });

  const platformAliases = pickPublishedPlatformAliases(documents);
  const miniSearch = createMiniSearch();
  miniSearch.addAll(toMiniSearchDocuments(documents, platformAliases));

  const index: SearchIndex = {
    version: 2,
    generated_at: new Date().toISOString(),
    platform_aliases: platformAliases,
    documents,
    mini_search: miniSearch.toJSON(),
  };

  await mkdir(publicRoot, { recursive: true });
  await writeFile(path.join(publicRoot, "search-index.json"), `${JSON.stringify(index, null, 2)}\n`, "utf8");

  return index;
}

function pickPublishedPlatformAliases(documents: SearchIndexDocument[]): Record<string, string[]> {
  const platforms = new Set(documents.map((document) => document.platform));
  const aliases: Record<string, string[]> = {};

  for (const platform of platforms) {
    aliases[platform] = defaultPlatformAliases[platform] ?? [];
  }

  return aliases;
}

async function loadPublishedManifests(publicRoot: string): Promise<PublishedManifest[]> {
  const entries = await readdir(publicRoot, { withFileTypes: true });
  const manifests: PublishedManifest[] = [];

  for (const entry of entries) {
    if (!entry.isDirectory()) {
      continue;
    }

    try {
      const raw = await readFile(path.join(publicRoot, entry.name, "manifest.json"), "utf8");
      manifests.push(JSON.parse(raw) as PublishedManifest);
    } catch {
      // Ignore public directories that are not platform docs.
    }
  }

  return manifests.sort((left, right) => left.platform.localeCompare(right.platform));
}

function stripFrontmatter(markdown: string): string {
  return markdown.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n?/, "");
}

function extractHeadings(markdown: string): string[] {
  const headings: string[] = [];
  const headingPattern = /^#{1,6}\s+(.+)$/gm;
  let match: RegExpExecArray | null;

  while ((match = headingPattern.exec(markdown)) !== null) {
    headings.push(stripMarkdown(match[1] ?? ""));
  }

  return headings;
}

function normalizeMarkdown(markdown: string): string {
  return stripMarkdown(markdown)
    .replace(/\s+/g, " ")
    .trim();
}

function stripMarkdown(markdown: string): string {
  return markdown
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/!\[([^\]]*)\]\([^)]+\)/g, "$1")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/^#{1,6}\s+/gm, "")
    .replace(/[*_~>#|]/g, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}
