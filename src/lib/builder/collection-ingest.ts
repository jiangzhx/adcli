import { createHash } from "node:crypto";
import { access, mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

import { PlaywrightCrawler, type Dictionary } from "crawlee";

import { buildSourceArtifacts } from "./artifacts";
import { captureHtml } from "./capture";
import type { CollectionManifest, CollectionManifestItem } from "./discover";
import { defaultRenderedTextMinLength } from "./render-wait";
import { writeSourceArtifacts } from "./store";

export type SelectCollectionItemsOptions = {
  limit?: number;
  sourceIds?: string[];
};

export type IngestCollectionOptions = SelectCollectionItemsOptions & {
  rootDir: string;
  changedOnly?: boolean;
  maxConcurrency?: number;
  maxRequestRetries?: number;
};

export type IngestCollectionResult = {
  requested: number;
  succeeded: number;
  changed: number;
  unchanged: number;
  failed: Array<{
    source_id: string;
    url: string;
    error: string;
  }>;
};

export type SourceIngestState = {
  url: string;
  title: string;
  status: "changed" | "unchanged" | "failed";
  last_checked_at: string;
  last_changed_at?: string;
  content_hash?: string;
  raw_hash?: string;
  error?: string;
};

export type CollectionIngestState = {
  collection_id: string;
  platform: string;
  last_checked_at: string;
  sources: Record<string, SourceIngestState>;
};

type CrawleeUserData = Dictionary & {
  item: CollectionManifestItem;
};

export function selectCollectionItems(
  manifest: CollectionManifest,
  options: SelectCollectionItemsOptions = {},
): CollectionManifestItem[] {
  const allowedSourceIds = options.sourceIds ? new Set(options.sourceIds) : undefined;
  const seenUrls = new Set<string>();
  const selected: CollectionManifestItem[] = [];

  for (const item of manifest.items) {
    if (allowedSourceIds && !allowedSourceIds.has(item.source_id)) {
      continue;
    }

    if (seenUrls.has(item.url)) {
      continue;
    }

    seenUrls.add(item.url);
    selected.push(item);

    if (options.limit && selected.length >= options.limit) {
      break;
    }
  }

  return selected;
}

export async function readCollectionManifest(manifestPath: string): Promise<CollectionManifest> {
  return JSON.parse(await readFile(manifestPath, "utf8")) as CollectionManifest;
}

export async function ingestCollection(
  manifest: CollectionManifest,
  options: IngestCollectionOptions,
): Promise<IngestCollectionResult> {
  const items = selectCollectionItems(manifest, options);
  const failed: IngestCollectionResult["failed"] = [];
  let succeeded = 0;
  let changed = 0;
  let unchanged = 0;
  const checkedAt = new Date().toISOString();
  const statePath = collectionStatePath(options.rootDir, manifest);
  const state = await readCollectionState(statePath, manifest, checkedAt);

  await mkdir(path.join(options.rootDir, "data", "sources", manifest.platform), {
    recursive: true,
  });

  async function processRawHtml(item: CollectionManifestItem, rawHtml: string): Promise<void> {
    const artifacts = buildSourceArtifacts({
      recipe: item.recipe,
      rawHtml,
    });
    const contentHash = sha256(artifacts.cleanedMarkdown);
    const previous = state.sources[item.source_id];
    const artifactsComplete = await hasSourceArtifacts(options.rootDir, manifest.platform, item.source_id);
    const shouldWriteArtifacts = shouldWriteSourceArtifacts({
      changedOnly: options.changedOnly ?? false,
      artifactsComplete,
      previousContentHash: previous?.content_hash,
      nextContentHash: contentHash,
    });

    const nextSourceState = buildUpdatedSourceState({
      item,
      checkedAt,
      previous,
      contentHash,
      rawHash: artifacts.source.hash,
    });
    if (nextSourceState.status === "changed") {
      changed += 1;
    } else {
      unchanged += 1;
    }

    if (shouldWriteArtifacts) {
      await writeSourceArtifacts(options.rootDir, artifacts);
    }

    state.sources[item.source_id] = nextSourceState;
    succeeded += 1;
  }

  if (items.every((item) => item.recipe.capture.mode === "fetch")) {
    await runWithConcurrency(items, options.maxConcurrency ?? 2, async (item) => {
      try {
        await processRawHtml(item, await captureHtml(item.recipe));
      } catch (error) {
        const message = error instanceof Error ? error.message : String(error);
        state.sources[item.source_id] = {
          ...state.sources[item.source_id],
          url: item.url,
          title: item.title,
          status: "failed",
          last_checked_at: checkedAt,
          error: message,
        };
        failed.push({
          source_id: item.source_id,
          url: item.url,
          error: message,
        });
      }
    });

    state.last_checked_at = checkedAt;
    await writeCollectionState(statePath, state);

    return {
      requested: items.length,
      succeeded,
      changed,
      unchanged,
      failed,
    };
  }

  const crawler = new PlaywrightCrawler({
    maxConcurrency: options.maxConcurrency ?? 2,
    maxRequestRetries: options.maxRequestRetries ?? 2,
    requestHandlerTimeoutSecs: 90,
    launchContext: {
      launchOptions: {
        headless: true,
      },
    },
    async requestHandler({ page, request }) {
      const item = (request.userData as CrawleeUserData).item;
      await page.waitForLoadState("domcontentloaded", { timeout: 60_000 });

      if (item.recipe.capture.wait_for) {
        await page.waitForSelector(item.recipe.capture.wait_for, { timeout: 15_000 });
      }

      await page
        .waitForFunction(
          (minLength) => document.body.innerText.trim().length >= minLength,
          defaultRenderedTextMinLength,
          { timeout: 15_000 },
        )
        .catch(() => undefined);
      await processRawHtml(item, await page.content());
    },
    async failedRequestHandler({ request }, error) {
      const item = (request.userData as CrawleeUserData).item;
      state.sources[item.source_id] = {
        ...state.sources[item.source_id],
        url: item.url,
        title: item.title,
        status: "failed",
        last_checked_at: checkedAt,
        error: error.message,
      };
      failed.push({
        source_id: item.source_id,
        url: item.url,
        error: error.message,
      });
    },
  });

  await crawler.run(
    items.map((item) => ({
      url: item.url,
      uniqueKey: item.source_id,
      userData: { item },
    })),
  );

  state.last_checked_at = checkedAt;
  await writeCollectionState(statePath, state);

  return {
    requested: items.length,
    succeeded,
    changed,
    unchanged,
    failed,
  };
}

export function buildUpdatedSourceState(input: {
  item: CollectionManifestItem;
  checkedAt: string;
  previous?: SourceIngestState;
  contentHash: string;
  rawHash: string;
}): SourceIngestState {
  const changed = input.previous?.content_hash !== input.contentHash;

  return {
    url: input.item.url,
    title: input.item.title,
    status: changed ? "changed" : "unchanged",
    last_checked_at: input.checkedAt,
    last_changed_at: changed ? input.checkedAt : input.previous?.last_changed_at,
    content_hash: input.contentHash,
    raw_hash: input.rawHash,
  };
}

export function shouldWriteSourceArtifacts(input: {
  changedOnly: boolean;
  artifactsComplete: boolean;
  previousContentHash?: string;
  nextContentHash: string;
}): boolean {
  if (!input.changedOnly) {
    return true;
  }

  if (!input.artifactsComplete) {
    return true;
  }

  return input.previousContentHash !== input.nextContentHash;
}

async function readCollectionState(
  statePath: string,
  manifest: CollectionManifest,
  checkedAt: string,
): Promise<CollectionIngestState> {
  try {
    const raw = await readFile(statePath, "utf8");
    return JSON.parse(raw) as CollectionIngestState;
  } catch (error) {
    if (!isNotFoundError(error)) {
      throw error;
    }

    return {
      collection_id: manifest.id,
      platform: manifest.platform,
      last_checked_at: checkedAt,
      sources: {},
    };
  }
}

async function writeCollectionState(
  statePath: string,
  state: CollectionIngestState,
): Promise<void> {
  await mkdir(path.dirname(statePath), { recursive: true });
  await writeFile(statePath, `${JSON.stringify(state, null, 2)}\n`, "utf8");
}

function collectionStatePath(rootDir: string, manifest: CollectionManifest): string {
  return path.join(
    rootDir,
    "data",
    "sources",
    manifest.platform,
    "_collections",
    manifest.id,
    "state.json",
  );
}

async function hasSourceArtifacts(
  rootDir: string,
  platform: string,
  sourceId: string,
): Promise<boolean> {
  const sourceDir = path.join(rootDir, "data", "sources", platform, sourceId);
  const files = ["source.json", "raw.html", "cleaned.md", "blocks.json"];

  try {
    await Promise.all(files.map((file) => access(path.join(sourceDir, file))));
    return true;
  } catch (error) {
    if (isNotFoundError(error)) {
      return false;
    }

    throw error;
  }
}

async function runWithConcurrency<T>(
  items: T[],
  concurrency: number,
  handler: (item: T) => Promise<void>,
): Promise<void> {
  const workerCount = Math.max(1, Math.min(concurrency, items.length));
  const workers = Array.from(
    { length: workerCount },
    async (_, workerIndex) => {
      for (let index = workerIndex; index < items.length; index += workerCount) {
        const item = items[index];
        if (item !== undefined) {
          await handler(item);
        }
      }
    },
  );

  await Promise.all(workers);
}

function sha256(value: string): string {
  return `sha256:${createHash("sha256").update(value).digest("hex")}`;
}

function isNotFoundError(error: unknown): boolean {
  return error instanceof Error && "code" in error && error.code === "ENOENT";
}
