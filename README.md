# AdCLI

AdCLI 是一个广告平台 API 文档查询 CLI。它默认使用线上发布的文档包，帮助开发者和 AI Agent 快速定位快手磁力引擎、巨量引擎、腾讯广告等平台的接口文档。

线上文档入口：

```text
https://adcli.jiangzhx.com/llms.txt
https://adcli.jiangzhx.com/llms-full.txt
https://adcli.jiangzhx.com/search-index.json
```

项目当前是 Bun + TypeScript CLI，不使用 Next.js。

## Monorepo

当前仓库使用 Bun workspace 管理：

- 根包：`@jiangzhx/adcli`，负责 CLI 和文档包生成。
- SDK 子包：`packages/*`，每个媒体平台 SDK 独立维护。

已存在的 SDK：

- `packages/oceanengine-ad-open-sdk`: 巨量广告开放平台 OpenAPI SDK。

后续新增广点通等媒体 SDK 时，按平台官方 API 名称放到独立子包，例如 `packages/tencentad-marketing-api-sdk/`。

## 安装

```bash
node --version
npm install -g @jiangzhx/adcli
```

安装后确认：

```bash
adcli list
adcli doc search "广告消耗"
```

也可以从 GitHub 安装当前代码：

```bash
npm install -g github:jiangzhx/adcli
```

## 常用命令

列出当前支持的平台和能力：

```bash
adcli list
adcli list kuaishou
```

搜索文档：

```bash
adcli doc search "广点通 广告消耗"
adcli doc search "广告消耗" --platform tencent_ads
adcli doc search "广告消耗" --limit 5
adcli doc search "广告消耗" --json
```

刷新本地搜索索引缓存：

```bash
adcli doc sync
adcli doc search "广告消耗" --refresh
```

输出给 AI / Agent 使用的文档入口：

```bash
adcli llms
adcli prompt
```

调用巨量引擎 SDK。可以先保存一次 token，后续命令会自动读取：

| 命令 | 作用 | 默认输出 |
| --- | --- | --- |
| `adcli oceanengine auth <token>` | 保存巨量引擎 access token | 保存结果 |
| `adcli oceanengine advertiser list` | 拉取当前 token 授权的广告主列表 | `advertiser_id`、`name` |
| `adcli oceanengine project list --advertiser-id <id>` | 拉取广告主下的项目列表 | `project_id`、`name` |
| `adcli oceanengine promotion list --advertiser-id <id>` | 拉取广告主下的广告列表 | `promotion_id`、`name` |

常用示例：

```bash
adcli oceanengine auth <token>
adcli oceanengine advertiser list --json
adcli oceanengine project list --advertiser-id <advertiser_id> --page 1 --page-size 20
adcli oceanengine project list --advertiser-id <advertiser_id> --filtering '{"status":"PROJECT_STATUS_ALL"}'
adcli oceanengine promotion list --advertiser-id <advertiser_id> --project-id <project_id>
```

token 优先级为 `--access-token`、`OCEANENGINE_ACCESS_TOKEN`、本地保存的 token。
本地 token 会保存到同一个 AdCLI 缓存目录，例如 macOS 上是 `~/Library/Caches/adcli/oceanengine.json`。
巨量 `project/list` 默认不返回已删除项目；需要包含已删除时传 `--filtering '{"status":"PROJECT_STATUS_ALL"}'`。

调用腾讯广告 SDK。命令名按腾讯广告 v3 API 资源定义，`--advertiser-id` 可作为 `--account-id` 的别名：

| 命令 | 作用 | 默认输出 |
| --- | --- | --- |
| `adcli tencent-ads auth <token>` | 保存腾讯广告 access token | 保存结果 |
| `adcli tencent-ads advertiser list` | 拉取账号列表 | `account_id`、`name` |
| `adcli tencent-ads advertiser get --account-id <id>` | 拉取单个账号详情 | `account_id`、`name` |
| `adcli tencent-ads adgroup list --account-id <id>` | 拉取账号下的营销单元列表 | `adgroup_id`、`name` |
| `adcli tencent-ads dynamic-creative list --account-id <id>` | 拉取账号下的创意列表 | `dynamic_creative_id`、`name` |

```bash
adcli tencent-ads auth <token>
adcli tencent-ads advertiser list --json
adcli tencent-ads advertiser get --account-id <account_id> --json
adcli tencent-ads adgroup list --account-id <account_id> --page 1 --page-size 20
adcli tencent-ads dynamic-creative list --account-id <account_id> --filtering '{"adgroup_id":"<adgroup_id>"}'
```

token 优先级为 `--access-token`、`TENCENT_ADS_ACCESS_TOKEN`、本地保存的 token。
`advertiser list` 对齐 fujian，走 `organization_account_relation/get`；`advertiser get` 才走 `advertiser/get`。
腾讯广告 CLI 不做跨平台层级别名，`adgroup` 对应 v3.0 `adgroups/get`，`dynamic-creative` 对应 v3.0 `dynamic_creatives/get`。资源过滤统一传 `--filtering` JSON。

完整命令说明见 [docs/commands.md](docs/commands.md)。

## 搜索索引缓存

`adcli doc search` 默认读取线上索引：

```text
https://adcli.jiangzhx.com/search-index.json
```

第一次搜索会下载索引并缓存到系统标准缓存目录：

- macOS: `~/Library/Caches/adcli/search-index.json`
- Linux: `${XDG_CACHE_HOME:-~/.cache}/adcli/search-index.json`
- Windows: `%LOCALAPPDATA%/adcli/Cache/search-index.json`

巨量引擎 token 也按缓存处理，保存到同目录的 `oceanengine.json`。

本地调试可指定索引文件：

```bash
adcli doc search "广告消耗" --index public/search-index.json
```

## 维护者工作流

安装开发依赖：

```bash
bun install
```

常用校验：

```bash
bun run test
bun run typecheck
bun run sdk:test
bun run sdk:typecheck
bun run lint
bun run build
```

重新生成发布产物：

```bash
bun run build:llms all
```

只重建搜索索引：

```bash
bun run build:search-index
```

构建 CLI 发布文件：

```bash
bun run build:cli
npm pack --dry-run
```

## 发布产物

```text
public/llms.txt
public/llms-full.txt
public/search-index.json
public/{platform}/index.md
public/{platform}/manifest.json
public/{platform}/docs/{doc_id}.md
```

`public/` 是可发布文档包；`data/` 是维护者本地采集数据，不提交。

## 数据流

```text
recipes/
  -> discover / ingest
  -> data/sources/{platform}/{source_id}/cleaned.md
  -> build:llms
  -> public/
```

更多文档包说明见 [docs/llms.md](docs/llms.md)。
