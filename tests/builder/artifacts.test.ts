import assert from "node:assert/strict";
import test from "node:test";

import { buildSourceArtifacts } from "@/src/lib/builder/artifacts";
import { parseSourceRecipe } from "@/src/lib/builder/recipe";

test("buildSourceArtifacts creates source metadata, cleaned markdown, and blocks", () => {
  const recipe = parseSourceRecipe({
    id: "oceanengine_1839621283557572",
    platform: "oceanengine",
    type: "official_html",
    url: "https://open.oceanengine.com/labels/7/docs/1839621283557572?origin=left_nav",
    title_hint: "API接口",
    tasks_hint: ["auth"],
    capture: { mode: "fetch" },
  });

  const artifacts = buildSourceArtifacts({
    recipe,
    rawHtml: "<main><h1>API接口</h1><p>授权说明</p></main>",
    capturedAt: "2026-05-18T00:00:00+08:00",
  });

  assert.equal(artifacts.source.id, "oceanengine_1839621283557572");
  assert.equal(artifacts.source.platform, "oceanengine");
  assert.equal(artifacts.source.type, "official_html");
  assert.equal(artifacts.source.title, "API接口");
  assert.equal(artifacts.source.status, "ok");
  assert.match(artifacts.source.hash, /^sha256:[a-f0-9]{64}$/);
  assert.equal(artifacts.cleanedMarkdown, "# API接口\n\n授权说明");
  assert.equal(artifacts.blocks.length, 2);
  assert.equal(artifacts.blocks[1]?.source_id, "oceanengine_1839621283557572");
});
