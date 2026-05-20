import assert from "node:assert/strict";
import { mkdtemp, readFile, rm } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import test from "node:test";

import { getSearchIndexCacheInfo, loadSearchIndex, refreshSearchIndex } from "@/src/lib/search/cache";
import type { SearchIndex } from "@/src/lib/search/types";

test("loadSearchIndex downloads and caches the default remote index", async () => {
  const cacheDir = await mkdtemp(path.join(os.tmpdir(), "adcli-cache-"));
  const index = createIndex("remote");
  let calls = 0;

  try {
    const first = await loadSearchIndex({
      cacheDir,
      fetcher: async () => {
        calls += 1;
        return jsonResponse(index);
      },
    });
    const second = await loadSearchIndex({
      cacheDir,
      fetcher: async () => {
        throw new Error("fetch should not be called when cache exists");
      },
    });

    assert.equal(calls, 1);
    assert.equal(first.documents[0]?.id, "remote");
    assert.equal(second.documents[0]?.id, "remote");
    assert.match(await readFile(getSearchIndexCacheInfo({ cacheDir }).cachePath, "utf8"), /remote/);
  } finally {
    await rm(cacheDir, { force: true, recursive: true });
  }
});

test("refreshSearchIndex overwrites cached index", async () => {
  const cacheDir = await mkdtemp(path.join(os.tmpdir(), "adcli-cache-"));

  try {
    await loadSearchIndex({
      cacheDir,
      fetcher: async () => jsonResponse(createIndex("old")),
    });
    const refreshed = await refreshSearchIndex({
      cacheDir,
      fetcher: async () => jsonResponse(createIndex("new")),
    });

    assert.equal(refreshed.documents[0]?.id, "new");
    assert.match(await readFile(getSearchIndexCacheInfo({ cacheDir }).cachePath, "utf8"), /new/);
  } finally {
    await rm(cacheDir, { force: true, recursive: true });
  }
});

function createIndex(id: string): SearchIndex {
  return {
    version: 2,
    generated_at: "2026-05-20T00:00:00.000Z",
    platform_aliases: {},
    documents: [
      {
        id,
        platform: "test",
        title: id,
        public_path: `/${id}.md`,
        source_url: "",
        headings: [],
        text: id,
      },
    ],
  };
}

function jsonResponse(payload: unknown): Response {
  return new Response(JSON.stringify(payload), {
    status: 200,
    headers: { "content-type": "application/json" },
  });
}
