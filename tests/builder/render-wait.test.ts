import assert from "node:assert/strict";
import test from "node:test";

import { hasRenderedContent } from "@/src/lib/builder/render-wait";

test("hasRenderedContent waits past an empty shell", () => {
  assert.equal(hasRenderedContent("刷新Refresh Token"), false);
});

test("hasRenderedContent accepts a hydrated documentation page", () => {
  assert.equal(hasRenderedContent("导航".repeat(600)), true);
});
