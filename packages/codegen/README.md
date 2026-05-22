# @jiangzhx/adcli-codegen

AdCLI 内部代码生成工具包，不发布到 npm。

当前保留广告平台官方 Go SDK 到 TypeScript SDK 的生成链路：

- `src/oceanengine/go-parser.ts`: 解析官方 Go SDK 的 API 和 model 源码。
- `src/oceanengine/go-workflow.ts`: 扫描 Go SDK 并写入 TypeScript SDK 文件。
- `src/oceanengine/typescript-emitter.ts`: 输出 TypeScript API 和 model 文件。
- `src/oceanengine/runtime-emitter.ts`: 输出 `api/client.ts`、`api/api_common.ts`、`config/configuration.ts` 和 package entrypoint。
- `src/oceanengine/generate-from-go-sdk.ts`: 命令行入口。
- `test/oceanengine/`: 生成器测试。

常用命令：

```bash
bun run generate:oceanengine /path/to/ad_open_sdk_go
bun run test
bun run typecheck
```

根目录等价命令：

```bash
bun run codegen:oceanengine:generate /path/to/ad_open_sdk_go
```

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
