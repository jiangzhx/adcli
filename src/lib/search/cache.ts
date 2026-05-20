import { mkdir, readFile, rename, writeFile } from "node:fs/promises";
import path from "node:path";

import envPaths from "env-paths";

import type { SearchIndex } from "./types";

export const defaultSearchIndexUrl = "https://adcli.jiangzhx.com/search-index.json";

type SearchIndexCacheOptions = {
  cacheDir?: string;
  indexUrl?: string;
  fetcher?: typeof fetch;
};

export type LoadSearchIndexOptions = SearchIndexCacheOptions & {
  index?: string;
  refresh?: boolean;
};

export type SearchIndexCacheInfo = {
  cachePath: string;
  indexUrl: string;
};

export function getSearchIndexCacheInfo(options: SearchIndexCacheOptions = {}): SearchIndexCacheInfo {
  const cacheDir = options.cacheDir ?? envPaths("adcli", { suffix: "" }).cache;

  return {
    cachePath: path.join(cacheDir, "search-index.json"),
    indexUrl: options.indexUrl ?? defaultSearchIndexUrl,
  };
}

export async function loadSearchIndex(options: LoadSearchIndexOptions = {}): Promise<SearchIndex> {
  if (options.index) {
    return await loadExplicitSearchIndex(options.index, options.fetcher);
  }

  const cacheInfo = getSearchIndexCacheInfo(options);

  if (!options.refresh) {
    try {
      return JSON.parse(await readFile(cacheInfo.cachePath, "utf8")) as SearchIndex;
    } catch (error) {
      if (!isNotFoundError(error)) {
        throw error;
      }
    }
  }

  return await refreshSearchIndex(options);
}

export async function refreshSearchIndex(options: SearchIndexCacheOptions = {}): Promise<SearchIndex> {
  const cacheInfo = getSearchIndexCacheInfo(options);
  const index = await fetchSearchIndex(cacheInfo.indexUrl, options.fetcher);
  await writeCachedSearchIndex(cacheInfo.cachePath, index);
  return index;
}

async function loadExplicitSearchIndex(index: string, fetcher: typeof fetch = fetch): Promise<SearchIndex> {
  if (/^https?:\/\//i.test(index)) {
    return await fetchSearchIndex(index, fetcher);
  }

  try {
    return JSON.parse(await readFile(path.resolve(index), "utf8")) as SearchIndex;
  } catch (error) {
    if (isNotFoundError(error)) {
      throw new Error(`missing search index: ${path.relative(process.cwd(), path.resolve(index))}`);
    }

    throw error;
  }
}

async function fetchSearchIndex(indexUrl: string, fetcher: typeof fetch = fetch): Promise<SearchIndex> {
  const response = await fetcher(indexUrl);
  if (!response.ok) {
    throw new Error(`failed to fetch search index: ${indexUrl} (${response.status})`);
  }

  return await response.json() as SearchIndex;
}

async function writeCachedSearchIndex(cachePath: string, index: SearchIndex): Promise<void> {
  await mkdir(path.dirname(cachePath), { recursive: true });
  const tempPath = `${cachePath}.${process.pid}.tmp`;
  await writeFile(tempPath, `${JSON.stringify(index)}\n`, "utf8");
  await rename(tempPath, cachePath);
}

function isNotFoundError(error: unknown): boolean {
  return error instanceof Error && "code" in error && error.code === "ENOENT";
}
