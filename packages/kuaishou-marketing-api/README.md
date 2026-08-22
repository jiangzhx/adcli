# @jiangzhx/kuaishou-marketing-api

基于社区 Go SDK [`github.com/bububa/kwai-marketing-api`](https://github.com/bububa/kwai-marketing-api) 转译的快手磁力引擎 Marketing API Node.js/TypeScript SDK。

源码不是快手官方 SDK。当前对标 Go 模块 `v1.10.1`。

## 安装

```bash
npm install @jiangzhx/kuaishou-marketing-api
```

## 使用入口

```ts
import { SDKClient, advertiser, campaign, oauth, unit } from "@jiangzhx/kuaishou-marketing-api";

const client = new SDKClient(appId, secret);

const authorizeUrl = oauth.url(client, {
  redirect_uri: "https://example.com/callback",
  scope: ["ad:manage"],
});

const token = await oauth.accessToken(client, authCode);
const info = await advertiser.info(client, token.access_token ?? "", token.advertiser_id ?? 0);
const campaignId = await campaign.create(client, token.access_token ?? "", {
  advertiser_id: token.advertiser_id,
  campaign_name: "plan-1",
  type: 5,
});
const unitId = await unit.create(client, token.access_token ?? "", {
  advertiser_id: token.advertiser_id,
  campaign_id: campaignId,
  unit_name: "unit-1",
});
```

函数同时提供 camelCase 和 Go 原名：

```ts
await advertiser.Info(client, accessToken, advertiserId);
await oauth.AccessToken(client, authCode);
```

## 转译范围

业务文件由 [adcli](https://github.com/jiangzhx/adcli) 的 `packages/codegen/src/kuaishou` 解释器从 Go 源码生成，不是手翻。

```bash
bun run --cwd /path/to/adcli codegen:kuaishou:generate /path/to/kwai-marketing-api /path/to/kuaishou-marketing-api/src
```

当前生成规模对标上游 `v1.10.1`：209 个 API、534 个 model。`core.SDKClient` 仍是手写 runtime。对外入口和类型检查覆盖 `oauth`、`advertiser`、`dsp/campaign`、`dsp/unit`。

跳过的上游文件：`api/track/*`（不走 `SDKClient`）。OpenTelemetry 没有搬。

## 映射规则

- Go 的 `NewSDKClient(appID, secret)` 映射为 `new SDKClient(appId, secret)`。
- Go 的 `Url()` 映射为 `path()`，避免和 JSON 字段 `url`（落地页）撞名。
- Go 的 `clt.Post/Get/Upload` 保留为 client 方法；API 函数继续接收 `(client, accessToken, ...)`。
- Go `context.Context` 映射为可选 `AbortSignal`。
- Go `uint64` / `int64` ID 映射为 `number | string`，响应用 `json-bigint` 的 `storeAsString: true` 解析，避免大整数丢精度。
- 请求/响应字段名保持官方 JSON snake_case，例如 `advertiser_id`、`access_token`。
- 文件一一对应：`api/advertiser/info.go` -> `src/api/advertiser/info.ts`。

## 源码许可

上游 SDK 使用 Apache-2.0。本包是衍生作品，保留同样许可证和上游署名。
