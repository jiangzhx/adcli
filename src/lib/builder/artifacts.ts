import { createHash } from "node:crypto";

import { extractBlocksFromHtml, type SourceBlock } from "./html-to-blocks";
import type { SourceRecipe } from "./recipe";

export type SourceMetadata = {
  id: string;
  platform: string;
  type: SourceRecipe["type"];
  title: string;
  url: string;
  captured_at: string;
  hash: string;
  status: "ok";
  tasks_hint?: string[];
};

export type SourceArtifacts = {
  source: SourceMetadata;
  rawHtml: string;
  cleanedMarkdown: string;
  blocks: SourceBlock[];
};

export type BuildSourceArtifactsInput = {
  recipe: SourceRecipe;
  rawHtml: string;
  capturedAt?: string;
};

export function buildSourceArtifacts(input: BuildSourceArtifactsInput): SourceArtifacts {
  const capturedAt = input.capturedAt ?? new Date().toISOString();
  const extracted = extractBlocksFromHtml({
    html: input.rawHtml,
    sourceId: input.recipe.id,
    sourceUrl: input.recipe.url,
    titleHint: input.recipe.title_hint,
  });

  return {
    source: {
      id: input.recipe.id,
      platform: input.recipe.platform,
      type: input.recipe.type,
      title: inferTitle(extracted.blocks[0]?.text, input.recipe.title_hint),
      url: input.recipe.url,
      captured_at: capturedAt,
      hash: `sha256:${sha256(input.rawHtml)}`,
      status: "ok",
      tasks_hint: input.recipe.tasks_hint,
    },
    rawHtml: input.rawHtml,
    cleanedMarkdown: extracted.cleanedMarkdown,
    blocks: extracted.blocks,
  };
}

function inferTitle(firstHeading: string | undefined, titleHint: string | undefined): string {
  return firstHeading || titleHint || "Untitled Source";
}

function sha256(value: string): string {
  return createHash("sha256").update(value).digest("hex");
}
