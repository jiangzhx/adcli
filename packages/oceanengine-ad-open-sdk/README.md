# @jiangzhx/oceanengine-ad-open-sdk

基于巨量引擎官方 Go SDK [`github.com/oceanengine/ad_open_sdk_go`](https://github.com/oceanengine/ad_open_sdk_go) porting 生成的 Node.js/TypeScript SDK。

## 安装

```bash
npm install @jiangzhx/oceanengine-ad-open-sdk
```

`npm install` 会安装当前 npm `latest` 版本。本发布线对标官方 Go SDK `github.com/oceanengine/ad_open_sdk_go@1.1.87`。

## 使用入口

统一从包入口导入：

```ts
import {
  ApiClient,
  ReportCustomConfigGetV30Api,
  ReportCustomConfigGetV30DataTopics,
} from "@jiangzhx/oceanengine-ad-open-sdk";

const client = new ApiClient().setAccessToken("access-token");
const api = new ReportCustomConfigGetV30Api(client);

await api.openApiV30ReportCustomConfigGetGet({
  advertiserId: 123,
  dataTopics: [ReportCustomConfigGetV30DataTopics.BASIC_DATA],
});
```

## Porting 来源

当前 SDK 的目标源码是官方 Go SDK：

- Go module: `github.com/oceanengine/ad_open_sdk_go`
- 当前源码版本: `1.1.87`
- 版本来源: Go SDK `config/configuration.go` 中的 `config.Version`
- 仓库源码中的生成版本记录: `src/manifest.json` 的 `sourceVersion`

当前生成链路直接读取 Go SDK 源码里的 `api/*.go`、`models/*.go` 和 `config/configuration.go`，再生成 TypeScript API、类型模型和运行时调用配置。

## Porting 规则

生成器维护在内部包 `packages/codegen`，入口命令：

```bash
bun run codegen:oceanengine:generate /path/to/ad_open_sdk_go
```

核心映射规则：

- Go 的 `ApiXxxRequest` struct 映射为 TypeScript request object。
- Go 的 `XxxApiService` 映射为 TypeScript `XxxApi` class。
- Go 官方方法名派生出的 `OpenApi...Get/Post` 保持为 TypeScript 方法名。
- Go `localVarQueryParams` 映射为 `queryParams`。
- Go `localVarPostBody` 映射为 JSON request body。
- Go `localVarFormParams` 和 `formFiles` 映射为 `formParams` 和 `files`，用于 `multipart/form-data` 上传。
- Go `api/client.go` 映射为 `src/api/client.ts`，保留 `ApiClient`、`ApiException`、`ApiResponse`、请求构建和 JSON 大整数解析能力。
- Go `api/api_common.go` 映射为 `src/api/api_common.ts`，导出 `CommonApi`。
- Go `config/configuration.go` 映射为 `src/config/configuration.ts`，默认 host/scheme/userAgent 来自 Go SDK。
- Go `[]byte` 响应映射为 TypeScript `ArrayBuffer`。
- JSON 响应使用 `json-bigint` 的 `storeAsString: true` 配置解析，避免响应体里的大整数在解析阶段丢失精度。
- Go `int64` 中 ID 类字段映射为 `number | string`，允许调用方在请求入参里传字符串 ID，避免已经超出 JavaScript safe integer 范围的 ID 在发送前被舍入。
- 运行时 header 中的 `X-Sdk-Version` 使用目标 Go SDK 的 `config.Version`。

## 包形态

源码仓库中的 SDK 子项目结构：

```txt
packages/oceanengine-ad-open-sdk/
  package.json
  tsconfig.json
  tsconfig.build.json
  scripts/
    build.ts
  src/
    index.ts
    api/
      client.ts
      api_common.ts
      api_*.ts
      index.ts
    config/
      configuration.ts
    models/
      model_*.ts
      index.ts
  dist/
    index.js
    index.d.ts
    api/
    config/
    models/
```

发布到 npm 的包只包含 `dist/`、`README.md` 和 `package.json`。`package.json` 的 exports 指向 `dist` 构建产物；`prepack` 会在打包前执行 `bun run build`，生成可被 Node.js 直接导入的 ESM `.js` 文件和 `.d.ts` 类型声明。

生成输出结构：

```txt
packages/oceanengine-ad-open-sdk/src/
  api/client.ts      # generated from Go api/client.go
  api/api_common.ts  # generated from Go api/api_common.go
  api/api_*.ts       # one generated file per Go api/api_*.go
  api/index.ts       # api barrel export
  config/configuration.ts
  models/model_*.ts  # one generated file per Go models/model_*.go
  models/index.ts    # model barrel export
```

当前基线：

- generated API: 1136
- generated model: 9671
- skipped: 0

## 包验证

在当前 SDK 目录执行：

```bash
bun run build
bun run typecheck
bun run test
npm pack --dry-run
```
