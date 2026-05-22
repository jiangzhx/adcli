# 命令功能清单

当前项目使用 Bun + TypeScript。命令分为两层：

- `adcli ...`：面向使用者的 CLI。
- `bun run ...`：面向项目维护、采集、构建和校验的工程命令。

## 对外 CLI

### `adcli list`

列出当前支持的广告平台和能力。

```bash
adcli list
adcli list kuaishou
adcli list --json
```

当前能力：

- `doc`: 已发布的文档查询能力，对应命令形态是 `adcli doc search <query> --platform <platform>`。

这个命令会读取本地缓存；缓存不存在时会下载线上 `search-index.json`。

兼容命令：

```bash
adcli doc list
```

### `adcli doc search`

搜索已经发布到线上 docs pack 的广告平台文档。全局安装后直接使用：

```bash
adcli doc search "广告消耗"
```

支持参数：

```bash
adcli doc search "广告消耗" --limit 5
adcli doc search "广告消耗" --json
adcli doc search "广告消耗" --index public/search-index.json
adcli doc search "广告消耗" --platform tencent_ads
```

全局 CLI 默认读取：

```text
https://adcli.jiangzhx.com/search-index.json
```

第一次搜索会下载索引并写入系统标准缓存目录：

- macOS: `~/Library/Caches/adcli/search-index.json`
- Linux: `${XDG_CACHE_HOME:-~/.cache}/adcli/search-index.json`
- Windows: `%LOCALAPPDATA%/adcli/Cache/search-index.json`

主动更新缓存：

```bash
adcli doc sync
adcli doc search "广告消耗" --refresh
```

也可以用环境变量覆盖：

```bash
ADCLI_SEARCH_INDEX=https://example.com/search-index.json adcli doc search "广告消耗"
```

当前返回：

- 平台 ID。
- 文档标题。
- `public/` 下的 Markdown 路径。
- 原始官方文档 URL。
- 搜索分数。

当前搜索依赖 `public/search-index.json`，不重新采集原始站点。

查询词中包含平台别名时会提升对应平台的排序权重，例如 `广点通`、`腾讯广告` 会提升 `tencent_ads` 文档，但不会硬过滤其他平台。需要明确限制平台时，使用 `--platform tencent_ads`。

### `adcli llms`

输出给 AI / Agent 使用的 docs pack 入口。

```bash
adcli llms
adcli llms --json
```

输出包括：

- `llms.txt`
- `llms-full.txt`
- `search-index.json`
- 各平台 index

### `adcli prompt`

输出一段可复制给 AI / Agent 的使用说明。

```bash
adcli prompt
```

这段 prompt 会要求 AI 优先使用 AdCLI 发布的 Markdown 文档，引用具体来源，并在文档不足时明确说明缺口。

兼容命令：

```bash
adcli llms prompt
```

### `adcli oceanengine auth`

保存巨量引擎 access token。保存后，巨量引擎相关命令可以不再重复传 `--access-token`。

```bash
adcli oceanengine auth <token>
```

token 会按 CLI 缓存处理，保存到 AdCLI 缓存目录下的 `oceanengine.json`。macOS 默认路径：

```text
~/Library/Caches/adcli/oceanengine.json
```

token 优先级：

1. `--access-token`
2. `OCEANENGINE_ACCESS_TOKEN`
3. `adcli oceanengine auth <token>` 保存的本地 token

### `adcli oceanengine advertiser list`

通过当前仓库内的巨量引擎 Node.js SDK 拉取授权广告主列表。
默认输出 `advertiser_id` 和 `name` 两列；需要完整响应时加 `--json`。

```bash
adcli oceanengine advertiser list --access-token <token>
adcli oceanengine advertiser list --json
```

也可以用环境变量提供 token，或先通过 `adcli oceanengine auth <token>` 保存 token：

```bash
OCEANENGINE_ACCESS_TOKEN=<token> adcli oceanengine advertiser list --json
```

对应 SDK/API：

- SDK: `Oauth2AdvertiserGetApi`
- API: `GET /open_api/oauth2/advertiser/get/`

### `adcli oceanengine project list`

通过当前仓库内的巨量引擎 Node.js SDK 拉取广告主下的项目列表，对应巨量引擎 OpenAPI 的 `project/list`。

```bash
adcli oceanengine project list --advertiser-id <advertiser_id> --access-token <token>
adcli oceanengine project list --advertiser-id <advertiser_id> --page 1 --page-size 20
adcli oceanengine project list --advertiser-id <advertiser_id> --json
adcli oceanengine project list --advertiser-id <advertiser_id> --filtering '{"status":"PROJECT_STATUS_ALL"}'
adcli oceanengine project list --advertiser-id <advertiser_id> --filtering '{"status_first":"PROJECT_STATUS_ENABLE"}'
```

默认输出只包含 `project_id` 和 `name` 两列；使用 `--json` 打印完整原始响应。
巨量接口默认不返回已删除项目；需要和 fujian 同步口径一致时，使用 `--filtering '{"status":"PROJECT_STATUS_ALL"}'` 拉取包含已删除项目的全量列表。

对应 SDK/API：

- SDK: `ProjectListV30Api`
- API: `GET /open_api/v3.0/project/list/`

### `adcli oceanengine promotion list`

通过当前仓库内的巨量引擎 Node.js SDK 拉取广告主下的广告列表，对应巨量引擎 OpenAPI 的 `promotion/list`。

```bash
adcli oceanengine promotion list --advertiser-id <advertiser_id> --access-token <token>
adcli oceanengine promotion list --advertiser-id <advertiser_id> --project-id <project_id>
adcli oceanengine promotion list --advertiser-id <advertiser_id> --project-id <project_id> --json
adcli oceanengine promotion list --advertiser-id <advertiser_id> --fields promotion_id,name,status_first
adcli oceanengine promotion list --advertiser-id <advertiser_id> --filtering '{"status_first":"PROMOTION_STATUS_ENABLE"}'
```

默认输出只包含 `promotion_id` 和 `name` 两列；使用 `--json` 打印完整原始响应。

对应 SDK/API：

- SDK: `PromotionListV30Api`
- API: `GET /open_api/v3.0/promotion/list/`

### `adcli tencent-ads auth`

保存腾讯广告 access token。保存后，腾讯广告相关命令可以不再重复传 `--access-token`。

```bash
adcli tencent-ads auth <token>
```

token 会按 CLI 缓存处理，保存到 AdCLI 缓存目录下的 `tencent-ads.json`。macOS 默认路径：

```text
~/Library/Caches/adcli/tencent-ads.json
```

token 优先级：

1. `--access-token`
2. `TENCENT_ADS_ACCESS_TOKEN`
3. `adcli tencent-ads auth <token>` 保存的本地 token

### `adcli tencent-ads advertiser list`

通过当前仓库内的腾讯广告 Node.js SDK 拉取 BM/管家账号下的账号列表。
默认输出 `account_id` 和 `name` 两列；需要完整响应时加 `--json`。

```bash
adcli tencent-ads advertiser list --access-token <token>
adcli tencent-ads advertiser list --json
adcli tencent-ads advertiser list --fields account_id,corporation_name,is_bid,is_mp,is_adx,comment_list
```

这个命令对齐 fujian 的广告主同步逻辑，默认调用 `organization_account_relation/get`，不是 `advertiser/get`。

对应 SDK/API：

- SDK: `api/v3.OrganizationAccountRelationApi`
- API: `GET /organization_account_relation/get`

### `adcli tencent-ads advertiser get`

通过当前仓库内的腾讯广告 Node.js SDK 拉取单个账号详情，对应腾讯广告 OpenAPI 的 `advertiser/get`。

```bash
adcli tencent-ads advertiser get --account-id <account_id> --access-token <token>
adcli tencent-ads advertiser get --account-id <account_id> --json
adcli tencent-ads advertiser get --account-id <account_id> --fields account_id,account_name
```

对应 SDK/API：

- SDK: `api/v3.AdvertiserApi`
- API: `GET /advertiser/get`

### `adcli tencent-ads adgroup list`

通过当前仓库内的腾讯广告 Node.js SDK 拉取账号下的营销单元列表，对应腾讯广告 v3 API 的 `adgroups/get`。

```bash
adcli tencent-ads adgroup list --account-id <account_id> --access-token <token>
adcli tencent-ads adgroup list --account-id <account_id> --page 1 --page-size 20
adcli tencent-ads adgroup list --account-id <account_id> --json
adcli tencent-ads adgroup list --account-id <account_id> --fields adgroup_id,adgroup_name
adcli tencent-ads adgroup list --account-id <account_id> --filtering '{"configured_status":"AD_STATUS_NORMAL"}'
```

`--advertiser-id` 可作为 `--account-id` 的别名。默认输出只包含 `adgroup_id` 和 `name` 两列；使用 `--json` 打印完整原始响应。资源过滤统一传 `--filtering` JSON。

对应 SDK/API：

- SDK: `api/v3.AdgroupsApi`
- API: `GET /v3.0/adgroups/get`

### `adcli tencent-ads dynamic-creative list`

通过当前仓库内的腾讯广告 Node.js SDK 拉取账号下的创意列表，对应腾讯广告 v3 API 的 `dynamic_creatives/get`。

```bash
adcli tencent-ads dynamic-creative list --account-id <account_id> --access-token <token>
adcli tencent-ads dynamic-creative list --account-id <account_id> --page 1 --page-size 20
adcli tencent-ads dynamic-creative list --account-id <account_id> --json
adcli tencent-ads dynamic-creative list --account-id <account_id> --fields dynamic_creative_id,dynamic_creative_name
adcli tencent-ads dynamic-creative list --account-id <account_id> --filtering '{"adgroup_id":"<adgroup_id>"}'
```

`--advertiser-id` 可作为 `--account-id` 的别名。默认输出只包含 `dynamic_creative_id` 和 `name` 两列；使用 `--json` 打印完整原始响应。资源过滤统一传 `--filtering` JSON。

对应 SDK/API：

- SDK: `api/v3.DynamicCreativesApi`
- API: `GET /v3.0/dynamic_creatives/get`

## 采集命令

### `bun run discover:sources`

从 collection recipe 入口发现文档列表，生成 collection manifest。

```bash
bun run discover:sources recipes/oceanengine-open-platform-docs.json
```

输入：

- `recipes/{platform}-*.json`

输出：

- `data/sources/{platform}/_collections/{collection_id}/manifest.json`

### `bun run ingest:collection`

按 collection manifest 批量采集文档。

```bash
bun run ingest:collection data/sources/oceanengine/_collections/oceanengine_open_platform_docs/manifest.json
```

支持参数：

```bash
--limit N
--concurrency N
--source-id ID
--changed-only
```

输出：

- `data/sources/{platform}/{source_id}/source.json`
- `data/sources/{platform}/{source_id}/raw.html`
- `data/sources/{platform}/{source_id}/cleaned.md`
- `data/sources/{platform}/{source_id}/blocks.json`

### `bun run ingest:source`

采集单篇 source recipe。

```bash
bun run ingest:source recipes/some-single-source.json
```

适合调试单个页面，不是当前批量采集主路径。

## 构建命令

### `bun run build:llms`

把 `data/sources/` 编译成 `public/` 静态文档包。

```bash
bun run build:llms all
bun run build:llms oceanengine
```

输出：

- `public/llms.txt`
- `public/llms-full.txt`
- `public/search-index.json`
- `public/{platform}/index.md`
- `public/{platform}/manifest.json`
- `public/{platform}/docs/{doc_id}.md`

### `bun run build:search-index`

只基于当前 `public/` 重新生成搜索索引。

```bash
bun run build:search-index
```

输出：

- `public/search-index.json`

适合只调整搜索逻辑或搜索索引结构后使用。

### `bun run rebuild:source-blocks`

基于已有 `raw.html` 重建 source blocks。

```bash
bun run rebuild:source-blocks oceanengine
```

适合调整 HTML block 抽取逻辑后，避免重新访问远程站点。

## 校验命令

### `bun run build`

校验当前 `public/` 是否是完整可发布产物。

```bash
bun run build
```

当前检查：

- `public/llms.txt` 存在。
- `public/llms-full.txt` 存在。
- `public/search-index.json` 存在。
- 每个平台 manifest 被 root index 覆盖。
- manifest 中每篇文档的 Markdown 文件存在。
- 搜索索引覆盖 manifest 中每篇文档。

### `bun run test`

运行测试。

```bash
bun run test
```

### `bun run typecheck`

运行 TypeScript 类型检查。

```bash
bun run typecheck
```

### `bun run lint`

运行 ESLint。

```bash
bun run lint
```

## 当前边界

`adcli` CLI 当前支持 `doc search`、`doc sync` 和 `llms` 入口。采集、构建和校验还停留在 `bun run ...` 工程命令层。

后续如果要把项目产品化成完整 CLI，可以逐步把这些能力收进 `adcli`：

- `adcli doc show <doc-path-or-id>`
- `adcli doc build llms [platform|all]`
- `adcli doc build search-index`
- `adcli source discover <recipe>`
- `adcli source ingest <manifest-or-recipe>`
- `adcli build llms [platform|all]`
- `adcli build search-index`
- `adcli verify`
