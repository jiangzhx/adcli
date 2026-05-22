import { mkdir, rm } from "node:fs/promises";
import { join } from "node:path";
import { spawn } from "node:child_process";

const workspaceRoot = "/Users/sylar/workspace/startup/adcli";
const javaSdkRoot = process.env.OCEANENGINE_JAVA_SDK_ROOT ?? "/tmp/oceanengine-sdk-java";
const outputRoot = process.env.OCEANENGINE_CODEX_PORT_OUT ?? "/tmp/oceanengine-port-apis";
const codexModel = process.env.CODEX_MODEL ?? "gpt-5.5";

const defaultApiNames = [
  "Oauth2AdvertiserGetApi",
  "ProjectListV30Api",
  "PromotionListV30Api",
];

const apiNames = process.argv.slice(2).length > 0 ? process.argv.slice(2) : defaultApiNames;

function promptFor(apiName: string) {
  const javaFile = join(javaSdkRoot, "src/main/java/com/bytedance/ads/api", `${apiName}.java`);
  const outputFile = join(outputRoot, "apis", `${apiName}.ts`);

  return `使用中文。读取 ${javaFile}。

只生成这一个 Java API 文件对应的 TypeScript API 文件：
${outputFile}

要求：
- models 已存在，只引用 ${workspaceRoot}/packages/oceanengine-ad-open-sdk/src/models，不迁移 model。
- runtime 已存在，只引用 ${workspaceRoot}/packages/oceanengine-ad-open-sdk/src/runtime。
- 根据 Java 文件里的 path、method、required/optional 参数、query 参数名、collectionFormat、返回类型生成。
- Java optional 参数在 TypeScript 里也必须是 optional。
- Java Long 类型的 id 参数在 TypeScript 里用 number | string。
- 只写 ${outputFile}。
- 不要写测试，不要 typecheck，不要 diff。
- 不要修改当前仓库。
- 不要读取或运行 packages/codegen/src/oceanengine/*。
- 不要读取或运行 packages/codegen/scripts/oceanengine/*generate*.ts。
- 不要处理其他 API 文件。

完成后只汇报写入的文件路径。`;
}

async function runCodex(apiName: string) {
  const transcriptFile = join(outputRoot, `${apiName}.md`);
  const exitCode = await new Promise<number | null>((resolve, reject) => {
    const proc = spawn("codex", [
      "exec",
      "-m",
      codexModel,
      "-C",
      workspaceRoot,
      "--add-dir",
      "/tmp",
      "--full-auto",
      "-o",
      transcriptFile,
      promptFor(apiName),
    ], {
      stdio: ["ignore", "inherit", "inherit"],
    });

    proc.once("error", reject);
    proc.once("exit", resolve);
  });

  if (exitCode !== 0) {
    throw new Error(`codex exec failed for ${apiName} with exit code ${exitCode}`);
  }
}

await rm(outputRoot, { recursive: true, force: true });
await mkdir(join(outputRoot, "apis"), { recursive: true });

for (const apiName of apiNames) {
  console.log(`\n==> Codex porting ${apiName}`);
  await runCodex(apiName);
}

console.log(`\nDone. Files written under ${join(outputRoot, "apis")}`);
