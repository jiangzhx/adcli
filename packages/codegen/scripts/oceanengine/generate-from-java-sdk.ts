import { runPortWorkflow } from "../../src/oceanengine/workflow";
import type { PortWorkflowResult } from "../../src/oceanengine/workflow";

export type FullGenerationResult = PortWorkflowResult & { phase: "B" };

export async function generateFromJavaSdk(options: { javaSdkRoot: string; outputDir?: string }): Promise<FullGenerationResult> {
  return runPortWorkflow({
    phase: "B",
    javaSdkRoot: options.javaSdkRoot,
    outputDir: options.outputDir,
    includeModelClosure: false,
  }) as Promise<FullGenerationResult>;
}

const isCliEntry = process.argv[1] ? import.meta.url === new URL(`file://${process.argv[1]}`).href : false;

if (isCliEntry) {
  const javaSdkRoot = process.argv[2];
  if (!javaSdkRoot) {
    console.error("Usage: bun run packages/codegen/scripts/oceanengine/generate-from-java-sdk.ts /path/to/ad_open_sdk_java [outputDir]");
    process.exit(1);
  }
  const outputDir = process.argv[3];
  const result = await generateFromJavaSdk({ javaSdkRoot, outputDir });
  console.log(JSON.stringify(result, null, 2));
}
