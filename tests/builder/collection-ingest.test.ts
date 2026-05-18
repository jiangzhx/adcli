import assert from "node:assert/strict";
import test from "node:test";

import {
  buildUpdatedSourceState,
  shouldWriteSourceArtifacts,
  selectCollectionItems,
} from "@/src/lib/builder/collection-ingest";
import type { CollectionManifest } from "@/src/lib/builder/discover";

const manifest: CollectionManifest = {
  id: "oceanengine_open_platform_docs",
  platform: "oceanengine",
  entry_url: "https://open.oceanengine.com/labels/7/docs/1839621283557572?origin=left_nav",
  discovered_at: "2026-05-18T00:00:00+08:00",
  items: [
    {
      source_id: "oceanengine_1",
      title: "A",
      url: "https://open.oceanengine.com/labels/7/docs/1?origin=left_nav",
      recipe: {
        id: "oceanengine_1",
        platform: "oceanengine",
        type: "official_html",
        url: "https://open.oceanengine.com/labels/7/docs/1?origin=left_nav",
        capture: { mode: "playwright", wait_for: "body" },
      },
    },
    {
      source_id: "oceanengine_2",
      title: "B",
      url: "https://open.oceanengine.com/labels/7/docs/2?origin=left_nav",
      recipe: {
        id: "oceanengine_2",
        platform: "oceanengine",
        type: "official_html",
        url: "https://open.oceanengine.com/labels/7/docs/2?origin=left_nav",
        capture: { mode: "playwright", wait_for: "body" },
      },
    },
    {
      source_id: "oceanengine_2_duplicate",
      title: "B duplicate",
      url: "https://open.oceanengine.com/labels/7/docs/2?origin=left_nav",
      recipe: {
        id: "oceanengine_2_duplicate",
        platform: "oceanengine",
        type: "official_html",
        url: "https://open.oceanengine.com/labels/7/docs/2?origin=left_nav",
        capture: { mode: "playwright", wait_for: "body" },
      },
    },
  ],
};

test("selectCollectionItems deduplicates by url and applies limit", () => {
  const selected = selectCollectionItems(manifest, { limit: 2 });

  assert.deepEqual(
    selected.map((item) => item.source_id),
    ["oceanengine_1", "oceanengine_2"],
  );
});

test("selectCollectionItems filters by source id", () => {
  const selected = selectCollectionItems(manifest, {
    sourceIds: ["oceanengine_2"],
  });

  assert.deepEqual(
    selected.map((item) => item.source_id),
    ["oceanengine_2"],
  );
});

test("buildUpdatedSourceState records per-source check and change timestamps", () => {
  const state = buildUpdatedSourceState({
    item: manifest.items[0]!,
    checkedAt: "2026-05-18T10:00:00.000Z",
    previous: {
      url: "https://open.oceanengine.com/labels/7/docs/1?origin=left_nav",
      title: "A",
      status: "changed",
      last_checked_at: "2026-05-18T09:00:00.000Z",
      last_changed_at: "2026-05-18T09:00:00.000Z",
      content_hash: "sha256:old-content",
      raw_hash: "sha256:old-raw",
    },
    contentHash: "sha256:new-content",
    rawHash: "sha256:new-raw",
  });

  assert.deepEqual(state, {
    url: "https://open.oceanengine.com/labels/7/docs/1?origin=left_nav",
    title: "A",
    status: "changed",
    last_checked_at: "2026-05-18T10:00:00.000Z",
    last_changed_at: "2026-05-18T10:00:00.000Z",
    content_hash: "sha256:new-content",
    raw_hash: "sha256:new-raw",
  });
});

test("shouldWriteSourceArtifacts skips unchanged sources in changed-only mode", () => {
  assert.equal(
    shouldWriteSourceArtifacts({
      changedOnly: true,
      artifactsComplete: true,
      previousContentHash: "sha256:same",
      nextContentHash: "sha256:same",
    }),
    false,
  );

  assert.equal(
    shouldWriteSourceArtifacts({
      changedOnly: true,
      artifactsComplete: false,
      previousContentHash: "sha256:same",
      nextContentHash: "sha256:same",
    }),
    true,
  );
});
