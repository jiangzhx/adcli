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
bun run analyze:oceanengine /path/to/ad_open_sdk_go/api/api_xxx.go
bun run generate-model:oceanengine /path/to/ad_open_sdk_go/models/model_xxx.go
bun run verify:oceanengine /path/to/ad_open_sdk_go/api/api_xxx.go /path/to/ad_open_sdk_go/api/api_xxx.ts
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
# 需要真实执行 agent(...) 时，先复制配置模板，再填入真实 token。
cp .env.example .env

# 所有 workflow 开关都放在 .env：
# ADCLI_WORKFLOW_BACKEND=claude-sdk
# ADCLI_WORKFLOW_INPUT=/Users/sylar/workspace/opensource/ad_open_sdk_go/models/model_oauth2_access_token_request.go
# ADCLI_WORKFLOW_SOURCE_ROOT=/Users/sylar/workspace/opensource/ad_open_sdk_go
# ADCLI_WORKFLOW_OUTPUT_ROOT=/Users/sylar/workspace/opensource/ad_open_sdk_go
# ADCLI_WORKFLOW_INCLUDE=models/*.go
# ADCLI_WORKFLOW_SKIP_EXISTING=0
# ADCLI_WORKFLOW_VERIFY_MODE=local
# ADCLI_WORKFLOW_VERBOSE=1
# ADCLI_WORKFLOW_ADDITIONAL_DIRECTORIES=/Users/sylar/workspace/opensource/ad_open_sdk_go
# ADCLI_WORKFLOW_BUILTIN_TOOLS=Read,Write,Edit,MultiEdit,Glob,Grep
# ADCLI_WORKFLOW_SETTING_SOURCES=none
# ADCLI_WORKFLOW_TRACE_SDK=1
# ADCLI_WORKFLOW_SDK_DEBUG=0
# ADCLI_WORKFLOW_SDK_INCLUDE_PARTIAL=0

# 使用 .env 中的配置执行。
bun run workflow:run

# 也可以指定 env 文件。
bun run workflow:run --env-file .env.deepseek
```

workflow 文件在 `src/oceanengine/phase-a-port.workflow.js`。默认源目录和输出目录都是 `/Users/sylar/workspace/opensource/ad_open_sdk_go`。输出路径会保持 Go SDK 相对目录，并把 `.go` 改成 `.ts`，例如 `api/client.go` -> `api/client.ts`、`config/configuration.go` -> `config/configuration.ts`、顶层 `client.go` -> `client.ts`。单文件输入如果位于默认源目录下，也会按默认源目录计算相对路径；其他源目录可用 `ADCLI_WORKFLOW_SOURCE_ROOT` 指定。

默认扫描 `*.go`、`api/*.go`、`config/*.go`、`middleware/*.go`，暂不默认扫描 `models/*.go` 和 `examples/*.go`，避免一次启动上万文件。可以用 `ADCLI_WORKFLOW_INPUT` 指向单个文件或目录，也可以用 `ADCLI_WORKFLOW_INCLUDE` 指定逗号分隔的 glob，例如 `ADCLI_WORKFLOW_INCLUDE='models/*.go'`。扫描时如果目标 `.ts` 已存在，默认会跳过，方便断点续跑。当前 runtime 只提供通用 `discoverInputs(...)`，不绑定 Java 或 Go，具体语言由 workflow 顶部配置决定。

workflow 先进入“分析”阶段，用本地 Go AST 产出 API/model/unknown 分类；然后进入“调度”阶段，由调度 prompt 只基于轻量分类和文件元信息决定 `local_model_codegen` 或 `agent_port`；最后进入“实现”阶段，按调度结果真正执行。调度选择 `local_model_codegen` 时，workflow 本地调用确定性 model generator，不启动实现 agent；调度选择 `agent_port` 时，才把 `本地 AST 分类结果` 和调度结果交给“实现”agent。API 文件默认校验模式是 `local`：AI 完成“实现”后，workflow 会调用 Go AST analyzer 和 TypeScript AST verifier 做本地 API 合同检查；只有检查失败才进入 AI 修复，修复后会再次本地校验。需要回到旧的 AI 校验流程时可设置 `ADCLI_WORKFLOW_VERIFY_MODE=agent`。

`.env` 默认从当前 `packages/codegen` 工作目录读取。支持 `KEY=value`、`export KEY=value`、单双引号和行尾注释；`.env` 中的同名变量会覆盖 shell 里已经 `export` 的变量。

`ADCLI_WORKFLOW_ADDITIONAL_DIRECTORIES` 用于把 Go SDK 源目录加入 Claude Code 可读写范围，否则 agent 的 `Read` / `Glob` / `Write` 只能访问当前 `packages/codegen` 工作目录。`ADCLI_WORKFLOW_BUILTIN_TOOLS` 用于限制 Claude Code 内置工具，减少无关工具带来的提示词和权限成本。

`ADCLI_WORKFLOW_SETTING_SOURCES=none` 会关闭 Claude Code 的 user/project/local settings 加载，避免把用户全局 MCP servers、skills 或 hooks 带入批量 porting 任务。workflow 自己传入的 `adcli_workflow_tools` 不受影响。

每次运行会在 `/tmp/adcli-workflow-runs/<run-id>/` 写入：

- `events.jsonl`: 每个 phase/log/agent 事件。
- `usage.json`: 按 total、phase、label、file 聚合的 agent token、cost、耗时统计。
- `sdk-messages.jsonl`: 当 `ADCLI_WORKFLOW_TRACE_SDK=1` 时写入 Claude Agent SDK message 流，包含 agent request、assistant/tool/result message 和 agent result。
- `claude-debug.log`: 当 `ADCLI_WORKFLOW_SDK_DEBUG=1` 时写入 Claude Code debug 日志。

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
