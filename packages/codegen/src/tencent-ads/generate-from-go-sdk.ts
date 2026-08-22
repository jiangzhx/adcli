import { runGoPortWorkflow } from "./go-workflow";
import type { GoPortWorkflowResult } from "./go-workflow";

export type GoFullGenerationResult = GoPortWorkflowResult & { source: "go" };

export async function generateFromGoSdk(options: { goSdkRoot: string; outputDir: string }): Promise<GoFullGenerationResult> {
  return runGoPortWorkflow({
    goSdkRoot: options.goSdkRoot,
    outputDir: options.outputDir,
  }) as Promise<GoFullGenerationResult>;
}

const isCliEntry = process.argv[1] ? import.meta.url === new URL(`file://${process.argv[1]}`).href : false;

if (isCliEntry) {
  const goSdkRoot = process.argv[2];
  const outputDir = process.argv[3];
  if (!goSdkRoot || !outputDir) {
    console.error("用法：bun run src/tencent-ads/generate-from-go-sdk.ts /path/to/marketing-api-go-sdk /path/to/tencent-ads-marketing-api-sdk/src");
    process.exit(1);
  }
  const result = await generateFromGoSdk({ goSdkRoot, outputDir });
  console.log(JSON.stringify(result, null, 2));
}
