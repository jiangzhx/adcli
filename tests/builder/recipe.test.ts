import assert from "node:assert/strict";
import test from "node:test";

import { parseCollectionRecipe, parseCollectionRecipes, parseSourceRecipe } from "@/src/lib/builder/recipe";

test("parseSourceRecipe accepts a valid web recipe", () => {
  const recipe = parseSourceRecipe({
    id: "oceanengine_1839621283557572",
    platform: "oceanengine",
    type: "web",
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
    type: "web",
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
        type: "web",
        url: "https://open.oceanengine.com/",
        capture: { mode: "fetch" },
      }),
    /id/,
  );
});

test("parseCollectionRecipe infers a web collection recipe from url", () => {
  const recipe = parseCollectionRecipe({
    platform: "oceanengine",
    url: "https://open.oceanengine.com/labels/7/docs/1839621283557572?origin=left_nav",
    discover: {
      mode: "playwright",
      link_patterns: ["/labels/7/docs/"],
      wait_for: "body",
      max_items: 20,
    },
  });

  assert.equal(recipe.type, "web");
  assert.equal(recipe.entry_url, "https://open.oceanengine.com/labels/7/docs/1839621283557572?origin=left_nav");
  assert.equal(recipe.discover.link_patterns[0], "/labels/7/docs/");
});

test("parseCollectionRecipe accepts max_items all for full discovery", () => {
  const recipe = parseCollectionRecipe({
    platform: "oceanengine",
    url: "https://open.oceanengine.com/labels/7/docs/1839621283557572",
    discover: {
      mode: "playwright",
      link_patterns: ["/labels/7/docs/"],
      max_items: "all",
    },
  });

  assert.equal(recipe.discover.max_items, "all");
});

test("parseCollectionRecipe infers a Lark doc collection recipe from url", () => {
  const recipe = parseCollectionRecipe({
    platform: "oceanengine",
    url: "https://bytedance.larkoffice.com/docx/BH6zdu3j2o9hiGxr4oucedjFnGb",
    discover: {
      link_patterns: ["https://open.oceanengine.com/labels/7/docs/"],
      max_items: "all",
    },
  });

  assert.equal(recipe.type, "lark_doc");
  assert.equal(recipe.entry_url, "https://bytedance.larkoffice.com/docx/BH6zdu3j2o9hiGxr4oucedjFnGb");
  assert.equal(recipe.discover.mode, "fetch");
  assert.deepEqual(recipe.discover.link_patterns, ["https://open.oceanengine.com/labels/7/docs/"]);
});

test("parseCollectionRecipes accepts a platform-level config file", () => {
  const recipes = parseCollectionRecipes({
    platform: "oceanengine",
    sources: [
      {
        url: "https://open.oceanengine.com/labels/7/docs/1839621283557572",
        discover: {
          mode: "playwright",
          link_patterns: ["/labels/7/docs/"],
        },
      },
      {
        url: "https://bytedance.larkoffice.com/docx/BH6zdu3j2o9hiGxr4oucedjFnGb",
        discover: {
          link_patterns: ["https://open.oceanengine.com/labels/7/docs/"],
        },
      },
    ],
  });

  assert.deepEqual(recipes.map((recipe) => recipe.type), ["web", "lark_doc"]);
  assert.deepEqual(recipes.map((recipe) => recipe.platform), ["oceanengine", "oceanengine"]);
});

test("parseCollectionRecipes rejects a top-level array config file", () => {
  assert.throws(
    () =>
      parseCollectionRecipes([
        {
          platform: "oceanengine",
          url: "https://open.oceanengine.com/labels/7/docs/1839621283557572",
          discover: {
            mode: "playwright",
            link_patterns: ["/labels/7/docs/"],
          },
        },
      ]),
    /platform-level object/,
  );
});
