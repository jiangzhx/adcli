import { buildSourceArtifacts } from "./artifacts";
import { captureHtml } from "./capture";
import type { SourceRecipe } from "./recipe";
import { writeSourceArtifacts } from "./store";

export type IngestSourceInput = {
  recipe: SourceRecipe;
  rootDir: string;
};

export type IngestSourceResult = {
  targetDir: string;
  blockCount: number;
  sourceId: string;
};

export async function ingestSource(input: IngestSourceInput): Promise<IngestSourceResult> {
  const rawHtml = await captureHtml(input.recipe);
  const artifacts = buildSourceArtifacts({
    recipe: input.recipe,
    rawHtml,
  });
  const targetDir = await writeSourceArtifacts(input.rootDir, artifacts);

  return {
    targetDir,
    blockCount: artifacts.blocks.length,
    sourceId: artifacts.source.id,
  };
}
