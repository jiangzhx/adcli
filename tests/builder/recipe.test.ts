import assert from "node:assert/strict";
import test from "node:test";

import { parseCollectionRecipe, parseSourceRecipe } from "@/src/lib/builder/recipe";

test("parseSourceRecipe accepts a valid official HTML recipe", () => {
  const recipe = parseSourceRecipe({
    id: "oceanengine_1839621283557572",
    platform: "oceanengine",
    type: "official_html",
    url: "https://open.oceanengine.com/labels/7/docs/1839621283557572?origin=left_nav",
    title_hint: "API接口",
    tasks_hint: ["auth", "read_ad_report"],
    capture: {
      mode: "playwright",
      wait_for: "article",
    },
  });

  assert.deepEqual(recipe, {
    id: "oceanengine_1839621283557572",
    platform: "oceanengine",
    type: "official_html",
    url: "https://open.oceanengine.com/labels/7/docs/1839621283557572?origin=left_nav",
    title_hint: "API接口",
    tasks_hint: ["auth", "read_ad_report"],
    capture: {
      mode: "playwright",
      wait_for: "article",
    },
  });
});

test("parseSourceRecipe rejects unsafe source ids", () => {
  assert.throws(
    () =>
      parseSourceRecipe({
        id: "../secret",
        platform: "oceanengine",
        type: "official_html",
        url: "https://open.oceanengine.com/",
        capture: { mode: "fetch" },
      }),
    /id/,
  );
});

test("parseCollectionRecipe accepts an official HTML collection recipe", () => {
  const recipe = parseCollectionRecipe({
    id: "oceanengine_open_platform_docs",
    platform: "oceanengine",
    type: "official_html_collection",
    entry_url: "https://open.oceanengine.com/labels/7/docs/1839621283557572?origin=left_nav",
    discover: {
      mode: "playwright",
      link_patterns: ["/labels/7/docs/"],
      wait_for: "body",
      max_items: 20,
    },
  });

  assert.equal(recipe.id, "oceanengine_open_platform_docs");
  assert.equal(recipe.discover.link_patterns[0], "/labels/7/docs/");
});

test("parseCollectionRecipe accepts max_items all for full discovery", () => {
  const recipe = parseCollectionRecipe({
    id: "oceanengine_open_platform_docs",
    platform: "oceanengine",
    type: "official_html_collection",
    entry_url: "https://open.oceanengine.com/labels/7/docs/1839621283557572",
    discover: {
      mode: "playwright",
      link_patterns: ["/labels/7/docs/"],
      max_items: "all",
    },
  });

  assert.equal(recipe.discover.max_items, "all");
});
