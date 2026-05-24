# @jiangzhx/adcli-codegen

AdCLI 内部代码生成工具包，不发布到 npm。

当前保留广告平台官方 Go SDK 到 TypeScript SDK 的生成链路：

- `src/oceanengine/go-parser.ts`: 解析官方 Go SDK 的 API 和 model 源码。
- `src/oceanengine/go-workflow.ts`: 扫描 Go SDK 并写入 TypeScript SDK 文件。
- `src/oceanengine/typescript-emitter.ts`: 输出 TypeScript API 和 model 文件。
- `src/oceanengine/runtime-emitter.ts`: 输出 `api/client.ts`、`api/api_common.ts`、`config/configuration.ts` 和 package entrypoint。
- `src/oceanengine/generate-from-go-sdk.ts`: 命令行入口。
- `src/oceanengine/PORTING.md`: 面向 AI 的 OceanEngine Go -> TypeScript 单文件 porting 规范。
- `src/oceanengine/phase-a-port.workflow.js`: OceanEngine porting workflow。
- `src/workflow-runtime/`: Bun 风格 `.workflow.js` 的最小执行 runtime，用于 AI porting 实验。
- `test/oceanengine/`: 生成器测试。

常用命令：

```bash
bun run generate:oceanengine /path/to/ad_open_sdk_go
bun run workflow:run
bun run test
bun run typecheck
```

根目录等价命令：

```bash
bun run codegen:oceanengine:generate /path/to/ad_open_sdk_go
```

AI porting workflow：

```bash
# 不配置 .env / backend 时，默认使用 mock agent，只验证扫描、跳过已存在输出和 workflow DSL。
bun run workflow:run

# 需要真实执行 agent(...) 时，先复制配置模板，再填入真实 token。
cp .env.example .env

# 使用 .env 中的 Claude/Anthropic 兼容配置执行。
bun run workflow:run

# 也可以指定 env 文件。
bun run workflow:run --env-file .env.deepseek

# 打印每个 agent 的 start/end。
ADCLI_WORKFLOW_VERBOSE=1 bun run workflow:run

# 单文件试跑，输出到项目内 output/oceanengine 目录。
ADCLI_WORKFLOW_BACKEND=claude-sdk \
ADCLI_WORKFLOW_INPUT=/Users/sylar/workspace/opensource/ad_open_sdk_go/api/api_project_list_v30.go \
ADCLI_WORKFLOW_SKIP_EXISTING=0 \
bun run workflow:run
```

workflow 文件在 `src/oceanengine/phase-a-port.workflow.js`。默认源目录和输出目录都是 `/Users/sylar/workspace/opensource/ad_open_sdk_go`。输出路径会保持 Go SDK 相对目录，并把 `.go` 改成 `.ts`，例如 `api/client.go` -> `api/client.ts`、`config/configuration.go` -> `config/configuration.ts`、顶层 `client.go` -> `client.ts`。单文件输入如果位于默认源目录下，也会按默认源目录计算相对路径；其他源目录可用 `ADCLI_WORKFLOW_SOURCE_ROOT` 指定。

默认扫描 `*.go`、`api/*.go`、`config/*.go`、`middleware/*.go`，暂不默认扫描 `models/*.go` 和 `examples/*.go`，避免一次启动上万文件。可以用 `ADCLI_WORKFLOW_INPUT` 指向单个文件或目录，也可以用 `ADCLI_WORKFLOW_INCLUDE` 指定逗号分隔的 glob，例如 `ADCLI_WORKFLOW_INCLUDE='models/*.go'`。扫描时如果目标 `.ts` 已存在，默认会跳过，方便断点续跑。当前 runtime 只提供通用 `discoverInputs(...)`，不绑定 Java 或 Go，具体语言由 workflow 顶部配置决定。

`.env` 默认从当前 `packages/codegen` 工作目录读取。支持 `KEY=value`、`export KEY=value`、单双引号和行尾注释；`.env` 中的同名变量会覆盖 shell 里已经 `export` 的变量。

每次运行会在 `/tmp/adcli-workflow-runs/<run-id>/` 写入：

- `events.jsonl`: 每个 phase/log/agent 事件。
- `usage.json`: 按 total、phase、label、file 聚合的 agent token、cost、耗时统计。

示例：

```bash
git clone https://github.com/oceanengine/ad_open_sdk_go.git /tmp/ad_open_sdk_go
bun run generate:oceanengine /tmp/ad_open_sdk_go
```

生成输出默认写入：

```text
packages/oceanengine-ad-open-sdk/src/api/
packages/oceanengine-ad-open-sdk/src/config/
packages/oceanengine-ad-open-sdk/src/models/
packages/oceanengine-ad-open-sdk/src/index.ts
packages/oceanengine-ad-open-sdk/src/manifest.json
```

生成规则：

- 保留官方文档表格里的 Class/Method 命名。
- Go request struct 映射成 TypeScript request object。
- 明显是 ID 语义的 `int64` 生成 `number | string`，避免 JS 大整数精度问题。
- 非 ID 的数字字段继续生成 `number`。
- 输出路径尽量保持 Go 文件对文件关系，例如 `api/api_project_list_v30.go` -> `src/api/api_project_list_v30.ts`，`models/model_project_list_v3_0_response.go` -> `src/models/model_project_list_v3_0_response.ts`。
