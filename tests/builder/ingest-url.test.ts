import assert from "node:assert/strict";
import test from "node:test";

import {
  buildSourceRecipeFromUrl,
  formatIngestUrlSummary,
  parseIngestUrlArgs,
} from "@/src/lib/builder/ingest-url";

test("buildSourceRecipeFromUrl infers OceanEngine source recipe from docs URL", () => {
  const recipe = buildSourceRecipeFromUrl({
    url: "https://open.oceanengine.com/labels/7/docs/1865873315616282",
  });

  assert.deepEqual(recipe, {
    id: "oceanengine_1865873315616282",
    platform: "oceanengine",
    type: "web",
    url: "https://open.oceanengine.com/labels/7/docs/1865873315616282",
    capture: {
      mode: "playwright",
      wait_for: "body",
    },
  });
});

test("buildSourceRecipeFromUrl rejects mismatched explicit platform", () => {
  assert.throws(
    () =>
      buildSourceRecipeFromUrl({
        url: "https://open.oceanengine.com/labels/7/docs/1865873315616282",
        platform: "tencent_ads",
      }),
    /does not match inferred platform/,
  );
});

test("parseIngestUrlArgs rejects title because title must come from source page", () => {
  assert.throws(
    () =>
      parseIngestUrlArgs([
        "https://open.oceanengine.com/labels/7/docs/1865873315616282",
        "--title",
        "更新标准项目",
      ]),
    /--title is not supported/,
  );
});

test("formatIngestUrlSummary prints next build command", () => {
  assert.equal(
    formatIngestUrlSummary({
      sourceId: "oceanengine_1865873315616282",
      sourceUrl: "https://open.oceanengine.com/labels/7/docs/1865873315616282",
      title: "更新标准项目",
      blockCount: 420,
      cleanedLength: 36653,
      targetDir: "/repo/data/sources/oceanengine/oceanengine_1865873315616282",
    }),
    [
      "Ingested oceanengine_1865873315616282",
      "Title: 更新标准项目",
      "Blocks: 420",
      "Cleaned chars: 36653",
      "Output: /repo/data/sources/oceanengine/oceanengine_1865873315616282",
      "",
      "Next: bun run build:llms --url https://open.oceanengine.com/labels/7/docs/1865873315616282",
    ].join("\n"),
  );
});
