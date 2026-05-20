# 命令功能清单

当前项目使用 Bun + TypeScript。命令分为两层：

- `adcli ...`：面向使用者的 CLI。
- `bun run ...`：面向项目维护、采集、构建和校验的工程命令。

## 对外 CLI

### `adcli doc search`

搜索已经发布到线上 docs pack 的广告平台文档。全局安装后直接使用：

```bash
adcli doc search "广告消耗"
```

项目内开发时也可以用：

```bash
bun run adcli doc search "广告消耗"
```

支持参数：

```bash
bun run adcli doc search "广告消耗" --limit 5
bun run adcli doc search "广告消耗" --json
bun run adcli doc search "广告消耗" --index public/search-index.json
bun run adcli doc search "广告消耗" --platform tencent_ads
```

全局 CLI 默认读取：

```text
https://adcli.jiangzhx.com/search-index.json
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

`adcli` CLI 当前只支持 `doc search`。采集、构建和校验还停留在 `bun run ...` 工程命令层。

后续如果要把项目产品化成完整 CLI，可以逐步把这些能力收进 `adcli`：

- `adcli doc show <doc-path-or-id>`
- `adcli doc build llms [platform|all]`
- `adcli doc build search-index`
- `adcli source discover <recipe>`
- `adcli source ingest <manifest-or-recipe>`
- `adcli build llms [platform|all]`
- `adcli build search-index`
- `adcli verify`
