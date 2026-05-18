# Roadmap

## Phase 1: llms.txt Docs Pack MVP

目标：先证明 Vercel 上的静态 LLM 文档入口能帮助 Agent 正确使用广告平台文档。

范围：

- 保留 OceanEngine 全量采集种子数据。
- 从 `data/sources/{platform}` 生成公开 Markdown。
- 生成 `/llms.txt` 轻量入口。
- 生成 `/llms-full.txt` 完整目录。
- 生成 `/{platform}/index.md` 和 `/{platform}/docs/{doc_id}.md`。
- 在 `llms.txt` 中维护高频任务入口，例如“获取广告消耗数据”“获取 Access Token”。

不做：

- LanceDB。
- embedding index。
- 运行时向量检索。
- MCP tools/resources。
- 管理后台。
- 运行时写入 Vercel 本地文件系统。

## Phase 2: Source Ingestion

目标：用 Builder Agent 建立可重复的数据采集闭环，把官方入口页下的文档稳定同步到 `data/sources`。

范围：

- Source Recipe。
- Collection Recipe。
- 入口页 discovery。
- collection manifest。
- Crawlee 批量采集、并发、重试和去重。
- 官方 HTML 文档抓取。
- 动态页面渲染。
- source metadata 和 hash。
- cleaned Markdown 和 blocks.json。

输出：

```text
data/sources/{platform}/{source_id}/source.json
data/sources/{platform}/{source_id}/cleaned.md
data/sources/{platform}/{source_id}/blocks.json
```

OceanEngine 入口：

```text
https://open.oceanengine.com/labels/7/docs/1839621283557572?origin=left_nav
```

## Phase 3: llms 入口质量

目标：让 Agent 面对真实问题时能从 `/llms.txt` 快速进入正确文档。

范围：

- 从真实问题沉淀 common tasks。
- 为每个 common task 绑定关键文档。
- 检查公开 Markdown 的 frontmatter、标题、来源 URL。
- 用真实 Agent 问答和人工查询模拟验证入口质量。
- 对 cleaned Markdown 质量差的页面改进提取器。
- 建立发布前质量检查。

输出：

```text
public/llms.txt
public/llms-full.txt
public/{platform}/index.md
public/{platform}/docs/{doc_id}.md
```

## Phase 4: HTTP MCP 增强

目标：当 `llms.txt` 无法满足结构化查询时，再提供 HTTP MCP 服务。

候选范围：

- `ad-docs://platforms`
- `ad-docs://documents/{platform}`
- `ad-docs://document/{platform}/{doc_id}`
- `find_doc`
- `trace_source`

原则：

- MCP 只读取已发布静态文档和 manifest。
- MCP 不临场采集。
- MCP 不临场调用 LLM 重新编译上下文。

## Phase 5: Admin Console

目标：给内部人员查看和校正文档入口。

范围：

- 平台列表。
- 来源列表。
- 公开文档预览。
- common tasks 编辑。
- 采集状态。
- 质量检查结果。

## Phase 6: Public / Open Source Split

目标：把通用能力抽出，方便外部用户自己采集和本地运行。

候选开源组件：

- 文档采集 CLI。
- llms.txt 生成器。
- Source Recipe 格式。

不随开源仓库分发第三方商业平台文档内容。
