# llms 文档包

当前主线是把已经采集好的 `cleaned.md` 发布成标准的 LLM-readable docs pack。

## 生成命令

```bash
pnpm build:llms all
```

`data/` 是本地采集数据，不提交到 Git。部署环境使用已提交的 `public/`，运行：

```bash
pnpm build
```

只校验公开产物是否完整，不重新生成。

输出：

```text
public/llms.txt
public/llms-full.txt
public/{platform}/index.md
public/{platform}/manifest.json
public/{platform}/docs/{doc_id}.md
```

## 产物说明

`/llms.txt` 是跨平台轻量入口，包含每个平台说明、常见任务和全量索引链接。它不放全文。

`/llms-full.txt` 是跨平台完整目录，列出每篇文档的公开路径、原始 URL 和 doc id。

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

`pnpm build:llms <platform>` 仍可用于单平台增量发布；执行后根目录 `llms.txt` 和 `llms-full.txt` 会重新聚合所有已经发布的平台 manifest。干净重建时使用 `pnpm build:llms all`。
