# Ad Docs Builder Agent

## 定位

Ad Docs Builder Agent 是项目的数据维护侧 Agent，负责把外部广告平台文档、内部飞书资料、PDF 和人工备注转成可 review、可追溯、可发布的 LLM-readable docs pack。

它不承担线上请求处理。Vercel 运行时优先只提供 `/llms.txt`、`/llms-full.txt` 和公开 Markdown；未来 MCP Server 也只读取已经发布的静态产物。

## 总体关系

```text
维护侧：
Builder Agent
  -> 采集 source
  -> 清洗正文
  -> 切分 blocks
  -> 生成 llms.txt / llms-full.txt / 公开 Markdown
  -> 校验和自检
  -> 人工 review
  -> 发布静态文档包

运行侧：
Vercel static / future HTTP MCP
  -> 读取 public 文档包
  -> 提供 llms.txt 和 Markdown
```

核心原则：

- Agent 生产数据，运行时提供数据。
- 采集和发布不依赖 embedding 或 LanceDB。
- `llms.txt` 的高频任务入口必须经过人工 review。
- 每篇公开 Markdown 都必须能追溯到 source URL 和 source id。

## 第一阶段运行位置

第一阶段 Builder Agent 跑在本地维护侧。

```text
本地 Codex / CLI
  -> Builder Agent
  -> 写入 data/sources
  -> 生成 public/llms.txt 和 public/{platform}/docs/*.md
  -> 人工 review
  -> commit / push
  -> Vercel 重新部署
  -> Agent 读取新的 llms 文档入口
```

选择本地运行的原因：

- 容易调试采集和清洗结果。
- 可以使用本地浏览器、登录态、文件系统和飞书权限。
- 采集结果和 llms 发布产物可以进入 Git diff review。
- 不需要一开始就建设任务队列、对象存储、后台权限和长任务 worker。

第一阶段不建议把 Builder Agent 跑在 Vercel serverless function 中，因为采集、PDF 转换、飞书同步和 LLM 编译都可能是长任务，并且需要持久化中间状态。

## 后续服务器端形态

当需要多人维护、定时更新或批量采集时，再升级为服务器端异步 worker。

```text
Admin Console / 定时任务
  -> 创建采集任务
  -> Queue / Worker / Builder Agent
  -> 写入数据库或对象存储
  -> 生成 llms 发布产物
  -> 人工审核发布
  -> 运行时读取已发布版本
```

候选运行方式：

- GitHub Actions 定时运行。
- 独立 worker 服务。
- 队列 + 对象存储。
- 自托管机器。

静态托管或未来 HTTP MCP 服务都不承载长时间采集任务。

## 输入

Builder Agent 的输入是 Source Recipe。第一版可以用 JSON 文件描述一个来源。

```json
{
  "id": "oceanengine_1839621283557572",
  "platform": "oceanengine",
  "type": "official_html",
  "url": "https://open.oceanengine.com/labels/7/docs/1839621283557572?origin=left_nav",
  "title_hint": "API接口",
  "tasks_hint": ["auth", "read_ad_report"],
  "capture": {
    "mode": "playwright",
    "wait_for": "article"
  }
}
```

如果入口页下面有多篇文档，使用 Collection Recipe 先做 discovery。

项目内已经沉淀了 recipe 创建规范：

```text
skills/ad-docs-recipe-authoring/SKILL.md
```

新增或 review `recipes/` 文件时，先按这个 skill 判断应该使用单篇 Source Recipe 还是入口型 Collection Recipe，并用小批量 discovery/ingest 验证边界。

```json
{
  "id": "oceanengine_open_platform_docs",
  "platform": "oceanengine",
  "type": "official_html_collection",
  "entry_url": "https://open.oceanengine.com/labels/7/docs/1839621283557572?origin=left_nav",
  "discover": {
    "mode": "playwright",
    "link_patterns": ["/labels/7/docs/"],
    "wait_for": "body",
    "max_items": "all"
  }
}
```

运行：

```bash
pnpm discover:sources recipes/oceanengine-open-platform-docs.json
```

输出：

```text
data/sources/{platform}/_collections/{collection_id}/manifest.json
```

`manifest.json` 记录发现到的文档清单，并为每篇文档生成单篇 source recipe。后续再按 manifest 中的单篇 recipe 批量采集。

`max_items` 是 discovery 阶段的发现上限：

- `"all"`：全量发现入口下的所有文档。
- 数字：只发现前 N 篇，适合调试。

Discovery 和批量采集都使用 Crawlee 调度 Playwright。

- `discover:sources`：用 Crawlee 打开入口页，监听站点目录接口或扫描页面链接，生成 manifest。
- `ingest:collection`：用 Crawlee 按 manifest 批量打开文档页，管理队列、并发、重试和去重。

批量采集命令：

```bash
pnpm ingest:collection data/sources/oceanengine/_collections/oceanengine_open_platform_docs/manifest.json --limit 10 --concurrency 2
```

可选参数：

| 参数 | 说明 |
| --- | --- |
| `--limit N` | 只采集 manifest 中前 N 篇文档 |
| `--concurrency N` | 设置 Crawlee 并发数 |
| `--source-id ID` | 只采集指定 source，可重复传入 |

第一阶段建议小批量采集，确认 `cleaned.md` 和 `blocks.json` 质量后再扩大范围。

字段说明：

| 字段 | 说明 |
| --- | --- |
| `id` | source 唯一 ID |
| `platform` | 平台编码，如 `oceanengine` |
| `type` | 来源类型，如 `official_html`、`lark_sheet`、`official_pdf` |
| `url` | 来源 URL |
| `title_hint` | 人工给出的标题提示 |
| `tasks_hint` | 可能相关的任务类型 |
| `capture` | 采集方式和等待条件 |

## 输出

每个 source 输出到独立目录。

```text
data/sources/{platform}/{source_id}/source.json
data/sources/{platform}/{source_id}/raw.html
data/sources/{platform}/{source_id}/cleaned.md
data/sources/{platform}/{source_id}/blocks.json
```

`source.json` 记录来源元数据：

```json
{
  "id": "oceanengine_1839621283557572",
  "platform": "oceanengine",
  "type": "official_html",
  "title": "API接口",
  "url": "https://open.oceanengine.com/labels/7/docs/1839621283557572?origin=left_nav",
  "captured_at": "2026-05-18T00:00:00+08:00",
  "hash": "sha256:...",
  "status": "ok"
}
```

`blocks.json` 保留结构化正文：

```json
[
  {
    "id": "blk_001",
    "source_id": "oceanengine_1839621283557572",
    "kind": "heading",
    "level": 1,
    "text": "API接口",
    "markdown": "# API接口",
    "locator": "h1"
  },
  {
    "id": "blk_002",
    "source_id": "oceanengine_1839621283557572",
    "kind": "table",
    "markdown": "| 字段 | 类型 | 说明 |\\n| --- | --- | --- |",
    "locator": "table[1]"
  },
  {
    "id": "blk_003",
    "source_id": "oceanengine_1839621283557572",
    "kind": "paragraph",
    "text": "获取到客户授权返回的auth_code后，可通过获取Access Token接口获取授权客户对应的AccessToken和RefreshToken",
    "markdown": "获取到客户授权返回的auth_code后，可通过[获取Access Token](https://open.oceanengine.com/labels/7/docs/1696710505596940)接口获取授权客户对应的AccessToken和RefreshToken",
    "locator": "p",
    "references": [
      {
        "url": "https://open.oceanengine.com/labels/7/docs/1696710505596940",
        "text": "获取Access Token",
        "target_source_id": "oceanengine_1696710505596940"
      }
    ]
  }
]
```

`references` 记录 block 内部的链接引用。链接指向当前文档集合里的其他文档时，会尽量推导出 `target_source_id`，后续知识图谱可以据此生成文档/证据边。

## 采集质量检查

项目内已经沉淀了一个采集质量检查 skill：

```text
skills/ad-docs-source-quality/SKILL.md
```

它用于 `discover:sources` 或 `ingest:collection` 之后、发布 llms 文档包之前，检查：

- manifest 条目数、source 目录数、完整产物数是否一致。
- 是否存在空的 `cleaned.md` 或空的 `blocks.json`。
- 是否存在只有标题的页面。
- manifest 标题是否像真实文档标题，而不是页面锚点或泛化文案。
- 全量 seed 数据大小是否异常。

当前 OceanEngine 全量 seed 的基线是：643 篇文档，643 个完整 source，空提取 0 个，标题-only 页面 1 个。标题-only 页面可以作为 seed 数据进入下一步，但要在质量检查中保留清单，便于后续改进提取器或人工确认。

## LLM 使用边界

不使用 LLM 的环节：

- 打开 URL。
- 渲染页面。
- 保存 raw 内容。
- 计算 hash。
- HTML/PDF/Sheet 到 cleaned Markdown 的基础转换。
- 标题、段落、表格、代码块的结构化切分。

当前 llms 发布链路不要求使用 LLM。后续如果要自动维护 `llms.txt` 的 common tasks，可以让 LLM 提议任务入口，但最终入口必须人工 review。

## 发布 llms 文档包

当前主线是把 source 发布成静态 LLM 文档包：

```bash
pnpm build:llms all
```

输出：

```text
public/llms.txt
public/llms-full.txt
public/{platform}/index.md
public/{platform}/manifest.json
public/{platform}/docs/{doc_id}.md
```

`llms.txt` 是跨平台轻量入口，按平台聚合高频任务链接；`llms-full.txt` 是跨平台完整目录；每篇公开 Markdown 由对应 source 的 `cleaned.md` 加来源 frontmatter 生成。

## 第一条试点 Source

第一条试点 source 使用巨量引擎官方 HTML 文档：

```text
https://open.oceanengine.com/labels/7/docs/1839621283557572?origin=left_nav
```

目标：

- 验证动态页面采集。
- 验证 cleaned Markdown 是否保留正文结构。
- 验证 blocks 是否保留表格和代码块。
- 验证公开 Markdown 能追溯到 source URL 和 source id。

飞书 Sheet 作为第二类 source 接入，用于验证内部字段映射和人工备注。
