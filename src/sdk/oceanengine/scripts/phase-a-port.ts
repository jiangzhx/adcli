import { runPortWorkflow } from "../src/generator/workflow";
import type { PortWorkflowResult } from "../src/generator/workflow";

const DEFAULT_API_FILES = [
  "Oauth2AccessTokenApi.java",
  "ReportCustomConfigGetV30Api.java",
  "AdvertiserFundGetV2Api.java",
];

const DEFAULT_MODEL_FILES = [
  "Oauth2AccessTokenRequest.java",
  "Oauth2AccessTokenResponse.java",
  "ReportCustomConfigGetV30DataTopics.java",
  "ReportCustomConfigGetV30Response.java",
  "AdvertiserFundGetV2GrantTypeSplit.java",
  "AdvertiserFundGetV2Response.java",
];

export interface PhaseAPortOptions {
  javaSdkRoot: string;
  outputDir?: string;
  apiFiles?: string[];
  modelFiles?: string[];
}

export type PhaseAPortResult = PortWorkflowResult & { phase: "A" };

export async function runPhaseAPort(options: PhaseAPortOptions): Promise<PhaseAPortResult> {
  return runPortWorkflow({
    phase: "A",
    javaSdkRoot: options.javaSdkRoot,
    outputDir: options.outputDir,
    apiFiles: options.apiFiles ?? DEFAULT_API_FILES,
    modelFiles: options.modelFiles ?? DEFAULT_MODEL_FILES,
    includeModelClosure: true,
  }) as Promise<PhaseAPortResult>;
}

const isCliEntry = process.argv[1] ? import.meta.url === new URL(`file://${process.argv[1]}`).href : false;

if (isCliEntry) {
  const javaSdkRoot = process.argv[2];
  if (!javaSdkRoot) {
    console.error("Usage: bun run src/sdk/oceanengine/scripts/phase-a-port.ts /path/to/ad_open_sdk_java [outputDir]");
    process.exit(1);
  }
  const outputDir = process.argv[3];
  const result = await runPhaseAPort({ javaSdkRoot, outputDir });
  console.log(JSON.stringify(result, null, 2));
}
