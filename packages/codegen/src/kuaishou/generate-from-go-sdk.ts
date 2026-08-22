import { runGoPortWorkflow } from "./go-workflow";
import type { KuaishouGoPortWorkflowResult } from "./go-workflow";

export async function generateFromGoSdk(options: { goSdkRoot: string; outputDir?: string }): Promise<KuaishouGoPortWorkflowResult> {
  return runGoPortWorkflow({
    goSdkRoot: options.goSdkRoot,
    outputDir: options.outputDir,
  });
}

const isCliEntry = process.argv[1] ? import.meta.url === new URL(`file://${process.argv[1]}`).href : false;

if (isCliEntry) {
  const goSdkRoot = process.argv[2];
  if (!goSdkRoot) {
    console.error("用法：bun run src/kuaishou/generate-from-go-sdk.ts /path/to/kwai-marketing-api [outputDir]");
    process.exit(1);
  }
  const outputDir = process.argv[3];
  const result = await generateFromGoSdk({ goSdkRoot, outputDir });
  console.log(JSON.stringify(result, null, 2));
}
