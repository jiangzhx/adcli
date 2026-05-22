# @jiangzhx/tencent-ads-marketing-api-sdk

基于腾讯广告官方 Go SDK [`github.com/tencentad/marketing-api-go-sdk`](https://github.com/tencentad/marketing-api-go-sdk) porting 生成的 Node.js/TypeScript SDK。

## 安装

```bash
npm install @jiangzhx/tencent-ads-marketing-api-sdk
```

本发布线对标官方 Go SDK `github.com/tencentad/marketing-api-go-sdk@v1.7.84`。

## 使用入口

统一从包入口导入：

```ts
import {
  ApiClient,
  AdgroupsApi,
} from "@jiangzhx/tencent-ads-marketing-api-sdk";

const client = new ApiClient().setAccessToken("access-token");
const api = new AdgroupsApi(client);

await api.get({
  accountId: "1234567890",
  fields: ["adgroup_id", "adgroup_name"],
});
```

## Porting 来源

当前 SDK 的目标源码是官方 Go SDK：

- Go module: `github.com/tencentad/marketing-api-go-sdk`
- 当前源码版本: `v1.7.84`
- API 源码: `pkg/api/*.go` 和 `pkg/api/v3/*.go`
- Model 源码: `pkg/model/*.go` 和 `pkg/model/v3/*.go`
- 仓库源码中的生成版本记录: `src/manifest.json` 的 `sourceVersion`

生成链路读取 Go SDK 源码，生成 TypeScript API、类型模型和运行时调用配置。

## Porting 规则

生成器维护在内部包 `packages/codegen`，入口命令：

```bash
bun run codegen:tencent-ads:generate /path/to/marketing-api-go-sdk
```

核心映射规则：

- Go 的 `XxxApiService` 映射为 TypeScript `XxxApi` class。
- Go service method 映射为 TypeScript request object 方法，例如 `Get(ctx, accountId, opts)` 映射为 `get({ accountId, ...opts })`。
- Go required 参数和 `optional.*` 参数统一收口到 request object。
- Go `localVarQueryParams` 映射为 `queryParams`。
- Go `localVarPostBody` 映射为 JSON request body。
- Go `localVarFormParams` 和文件参数映射为 `formParams` 和 `files`，用于 `multipart/form-data` 上传。
- JSON 响应使用 `json-bigint` 的 `storeAsString: true` 配置解析，避免响应体里的大整数在解析阶段丢失精度。
- Go `int64` 中 ID 类字段映射为 `number | string`，允许调用方在请求入参里传字符串 ID。

## 包形态

发布到 npm 的包只包含 `dist/`、`README.md` 和 `package.json`。`package.json` 的 exports 指向 `dist` 构建产物；`prepack` 会在打包前执行 `bun run build`，生成可被 Node.js 直接导入的 ESM `.js` 文件和 `.d.ts` 类型声明。

## 包验证

在当前 SDK 目录执行：

```bash
bun run build
bun run typecheck
bun run test
npm pack --dry-run
```
