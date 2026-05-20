# llms 文档包

当前主线是把已经采集好的 `cleaned.md` 发布成标准的 LLM-readable docs pack。

## 生成命令

```bash
bun run build:llms all
```

`data/` 是本地采集数据，不提交到 Git。部署环境使用已提交的 `public/`，运行：

```bash
bun run build
```

只校验公开产物是否完整，不重新生成。

输出：

```text
public/llms.txt
public/llms-full.txt
public/search-index.json
public/{platform}/index.md
public/{platform}/manifest.json
public/{platform}/docs/{doc_id}.md
```

## 产物说明

`/llms.txt` 是跨平台轻量入口，包含每个平台说明、常见任务和全量索引链接。它不放全文。

`/llms-full.txt` 是跨平台完整目录，列出每篇文档的公开路径、原始 URL 和 doc id。

`/search-index.json` 是 CLI 和后续 MCP 服务使用的轻量检索索引，按每篇公开 Markdown 文档生成一条记录，包含标题、来源、公开路径、标题层级和清洗后的正文。

`/{platform}/docs/{doc_id}.md` 是每篇 `cleaned.md` 的公开版本，顶部包含来源 frontmatter，例如：

```yaml
---
title: 自定义报表
platform: oceanengine
source_url: https://open.oceanengine.com/labels/7/docs/1741387668314126
doc_id: 1741387668314126
source_id: oceanengine_1741387668314126
---
```

## 输入

```text
data/sources/{platform}/{source_id}/source.json
data/sources/{platform}/{source_id}/cleaned.md
```

生成器会跳过 `_collections` 目录。数字型官方文档使用官方 doc id 生成公开路径；路径型文档使用稳定的 source id 生成公开路径。

`bun run build:llms <platform>` 仍可用于单平台增量发布；执行后根目录 `llms.txt`、`llms-full.txt` 和 `search-index.json` 会重新聚合所有已经发布的平台 manifest。干净重建时使用 `bun run build:llms all`。

## 搜索

```bash
bun run build:search-index
adcli doc search "广告消耗"
```

搜索先走本地 `public/search-index.json`，返回平台、标题、公开 Markdown 路径和原始文档 URL。这个索引可以随 `public/` 一起发布，使用者不需要重新采集原始文档。
