import { execFile } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { promisify } from "node:util";

const execFileAsync = promisify(execFile);

export interface GoApiFacts {
  kind: "api";
  file: string;
  className: string;
  methodName: string;
  httpMethod: string;
  path: string;
  responseType: string;
  params: Array<{ name: string; type: string; required: boolean }>;
  queryParams: Array<{ name: string; source: string }>;
  formParams: Array<{ name: string; source: string }>;
  fileParams: Array<{ name: string; source: string }>;
  checks: Array<{ kind: string; param: string; message: string; operator?: string; value?: string }>;
  bodyParam?: string;
  contentTypes: string[];
}

export interface GoModelFacts {
  kind: "model";
  file: string;
  model:
    | {
        kind: "interface";
        name: string;
        fields: Array<{ jsonName: string; goName: string; goType: string; required: boolean }>;
      }
    | {
        kind: "enum";
        name: string;
        values: Array<{ key: string; value: string | number }>;
      };
}

export interface GoUnknownFacts {
  kind: "unknown";
  file: string;
}

export type GoFacts = GoApiFacts | GoModelFacts | GoUnknownFacts;

export async function analyzeGoFile(goPath: string): Promise<GoFacts> {
  const analyzerPath = path.join(import.meta.dirname, "goast-analyzer", "main.go");
  const { stdout } = await execFileAsync("go", ["run", "main.go", "--", goPath], {
    cwd: path.dirname(analyzerPath),
    maxBuffer: 10 * 1024 * 1024,
  });
  return JSON.parse(stdout) as GoFacts;
}

async function main(): Promise<void> {
  const goPath = process.argv[2];
  if (!goPath) {
    console.error("用法：bun src/oceanengine/ast-analyzer.ts <go-file>");
    process.exitCode = 1;
    return;
  }
  const facts = await analyzeGoFile(goPath);
  console.log(JSON.stringify(facts, null, 2));
}

const entryPath = process.argv[1] ? path.resolve(process.argv[1]) : "";
if (entryPath === fileURLToPath(import.meta.url)) {
  await main();
}
