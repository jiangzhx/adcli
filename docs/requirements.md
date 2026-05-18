# Ad Docs Context 需求文档

## 项目定位

Ad Docs Context 是一个面向 IDE Agent 的广告平台文档上下文项目。

当前第一阶段不做 MCP 服务，也不做 Next.js 应用。目标是用 Node.js/TypeScript CLI 把广告平台文档生成 LLM-readable docs pack，让 Codex、Claude、Cursor、ChatGPT 等 Agent 能从 `llms.txt` 进入，再打开具体 Markdown 文档。

## 背景问题

当前广告平台对接文档分散在多个来源：

- 官方开放平台文档，例如巨量、腾讯、快手。
- 飞书 Sheet 中的内部规格表和字段映射。
- PDF、腾讯文档、语雀、青雀等非统一格式文档。
- 联调过程中产生的内部经验和备注。

这些资料对人来说已经不好查，对 AI Agent 更难直接使用。常见问题包括：

- 原始文档页面依赖前端渲染，直接读取不到正文。
- 表格、代码块、枚举值、参数说明容易在清洗过程中丢失。
- 官方文档和内部联调备注混在一起，可信级别不明确。
- Agent 缺少明确入口，不知道先读哪篇文档。
- 字段、事件、金额单位等关键结论缺少来源追踪，容易被 AI 猜错。

## 核心目标

第一阶段目标是生成可静态托管的 LLM 文档包：

- `/llms.txt`：轻量入口，包含平台说明、高频任务和关键文档链接。
- `/llms-full.txt`：完整目录，包含全部文档标题、公开路径、原始 URL 和 doc id。
- `/oceanengine/index.md`：平台文档索引。
- `/{platform}/docs/{doc_id}.md`：每篇 cleaned Markdown 的公开版本。
- 每篇公开 Markdown 顶部包含 frontmatter，可追溯 `source_url`、`doc_id` 和 `source_id`。

数据维护侧目标是建设 Builder Agent 工作流，用于采集来源、清洗内容、切分 blocks，并发布静态文档包。运行时只提供已经发布的数据。

## 非目标

第一阶段不做：

- 不生成 SDK。
- 不自动调用广告平台 API。
- 不自动写入或修改广告平台数据。
- 不做完整管理后台。
- 不做通用开源采集框架。
- 不引入 LanceDB。
- 不构建 embedding index。
- 不做 Next.js 页面或 API route。
- 不优先实现 MCP tools/resources。
- 不在运行时临场采集网页或调用 LLM 编译上下文。

## 第一阶段平台范围

优先支持以下平台或来源：

| 编码 | 名称 | 说明 |
| --- | --- | --- |
| `oceanengine` | 巨量引擎 | 当前全量采集 seed |
| `internal` | 内部规格 | 后续接入飞书 Sheet、人工备注、联调经验 |

## 第一阶段任务入口

`llms.txt` 先维护少量高频任务入口：

| 任务 | 说明 |
| --- | --- |
| 获取广告消耗数据 | 报表消耗、账户日流水、代理商消耗 |
| 获取 Access Token | 授权、token、开发者应用 |

后续从真实问题中继续沉淀 common tasks。

## 成功标准

第一版成功不以“采集了多少页面”为标准，而以 Agent 是否能稳定从 `llms.txt` 找到正确文档为标准。

最低验收：

- `pnpm build:llms all` 能生成静态产物。
- `/llms.txt` 包含跨平台入口和高频任务入口。
- `/llms-full.txt` 包含跨平台完整文档目录。
- `/{platform}/docs/{doc_id}.md` 包含 source frontmatter 和 cleaned Markdown。
- 用真实问题模拟验证时，Agent 能找到正确文档并给出来源。

## 后续方向

第二阶段：

- 改进 Source Recipe 和 Collection Recipe。
- 改进官方文档 discovery / ingest。
- 接入飞书 Sheet。
- 改进 HTML / PDF / 表格解析。
- 建立 llms 发布前质量检查。

第三阶段：

- 管理后台。
- 多人协作校正。
- 服务器端异步 Builder Agent。
- 更多平台。
- HTTP MCP 增强。
- 可开源的采集工具和 llms.txt 生成器。
- 采集状态、hash 和版本管理。
