# 技术架构

## 总体分层

项目分为四个责任边界：

```text
Builder Agent -> 采集层 -> 发布层 -> 运行时入口
```

这些职责必须分开。运行时入口不直接抓网页，采集层也不直接面向 IDE Agent 返回上下文。

核心原则：

- Builder Agent 负责生产和维护数据。
- 采集层负责拿到来源内容并保留证据。
- 发布层负责把来源内容整理成 LLM-readable docs pack。
- 运行时入口负责稳定提供 `llms.txt` 和公开 Markdown。

## Builder Agent

Builder Agent 是维护侧 Agent，不是线上 MCP runtime。

职责：

- 根据 Source Recipe 采集 URL、飞书 Sheet、PDF 或人工备注。
- 调用采集和清洗工具生成 `source.json`、`cleaned.md`、`blocks.json`。
- 生成 `llms.txt`、`llms-full.txt` 和公开 Markdown。
- 校验来源追踪、目录完整性和高频任务入口。
- 输出可 review 的 Git diff。

第一阶段 Builder Agent 跑在本地维护侧：

```text
本地 Codex / CLI
  -> Builder Agent
  -> data/sources
  -> public/llms.txt
  -> public/{platform}/docs/*.md
  -> 人工 review
  -> commit / push
  -> Vercel 重新部署
```

后续需要多人维护、定时更新或批量采集时，再升级为服务器端异步 worker 或 GitHub Actions。

更多细节见 `docs/builder-agent.md`。

## 采集层

采集层解决“内容拿得到”的问题。

职责：

- 读取飞书 Sheet。
- 抓取普通 HTML 页面。
- 使用浏览器渲染前端页面。
- 下载 PDF 或附件。
- 保留原始内容。
- 记录来源、抓取时间、hash、失败原因。

第一阶段可以先用少量真实 source 建立采集闭环，再由 Builder Agent 发布静态 LLM 文档包。

后续候选工具：

- Crawlee：文档入口 discovery、URL 队列、重试、并发、去重。
- Playwright：由 Crawlee 调度，用于动态页面渲染和 DOM 抽取。
- Readability / Turndown：HTML 正文清洗和 Markdown 转换。
- Docling：PDF / Office 文档转换。
- lark-cli / 飞书 API：内部飞书 Sheet 和文档读取。

采集层输出：

```text
raw.html
raw.pdf
cleaned.md
blocks.json
source.json
```

## 发布层

发布层解决“AI 找得到、读得懂”的问题，是当前项目核心。

职责：

- 将原始文档转换为结构化 Block。
- 保留标题层级、表格、代码块、链接、注意事项。
- 将内容按平台归类。
- 生成 `llms.txt` 的任务入口。
- 生成 `llms-full.txt` 的完整目录。
- 生成每篇 source 的公开 Markdown。
- 维护来源追踪。

普通采集项目通常停在 cleaned Markdown；本项目当前差异点是发布层：它把 cleaned Markdown 组织成 Agent 可直接使用的入口和目录。

当前不使用 embedding、LanceDB 或运行时向量库。Agent 通过 `/llms.txt` 进入，再打开具体 Markdown。

后续如果需要 MCP，MCP runtime 也只读取已经发布的静态文档和索引，不临场抓取或编译。

## 运行时入口

运行时入口解决“IDE Agent 访问得到”的问题。

职责：

- 暴露 `/llms.txt`。
- 暴露 `/llms-full.txt`。
- 暴露 `/oceanengine/index.md`。
- 暴露 `/{platform}/docs/{doc_id}.md`。
- 返回来源 frontmatter。

第一阶段运行时只读取随项目发布的静态文件，不直接执行采集和解析。

MCP HTTP transport 暂时降级为后续增强：

- 若 `llms.txt` 对真实 Agent 使用足够，先不做 MCP。
- 若需要结构化 tool 查询，再基于同一批 `public` 文档增加 HTTP MCP。
- 如果公开部署第三方商业平台文档，需要确认内容授权和访问策略。

## 第一阶段存储

第一阶段使用文件存储即可：

```text
data/
  sources/
    oceanengine/
      oceanengine_1741387668314126/
        source.json
        cleaned.md
        blocks.json
public/
  llms.txt
  llms-full.txt
  oceanengine/
    index.md
    manifest.json
    docs/
      1741387668314126.md
```

原因：

- 文件便于 review 和人工编辑。
- 不需要在第一天引入数据库复杂度。
- Vercel 部署时可以读取随项目发布的只读文件。

注意：

- 不依赖 Vercel serverless 本地文件写入。
- 文档包更新通过代码提交和重新部署完成。
- 后续需要在线校正或采集状态时，再引入数据库。

后续可以补 SQLite：

- source/block/context 映射。
- 全文搜索。
- 采集状态。
- hash 和版本。

服务化后再考虑 PostgreSQL、对象存储和队列。

## Node.js 的角色

当前项目使用 Node.js/TypeScript CLI 作为工程壳。

第一阶段 Node.js 主要承担：

- 采集命令。
- 清洗和 block 化命令。
- `llms.txt` 发布命令。
- 本地质量检查和评测命令。

第一阶段不需要页面框架。核心是采集、清洗和 `llms.txt` 静态发布。

未来如果需要简单 MCP 服务，也可以继续使用 Node.js：

```text
scripts/serve-mcp.ts
  -> 读取 public/llms.txt
  -> 读取 public/{platform}/manifest.json
  -> 读取 public/{platform}/docs/{doc_id}.md
  -> 暴露 MCP resources/tools
```

不需要为了 MCP 恢复 Next.js。可选实现包括 Node 原生 HTTP、Fastify、Hono 或 MCP TypeScript SDK。

## 推荐目录

当前仓库已经采用轻量 Bun workspace monorepo。根包继续作为 `@jiangzhx/adcli` CLI 和文档包生成入口，独立广告平台 SDK 放到 `packages/*`。

当前根包目录：

```text
src/lib/
  builder/
  llms/
  search/
src/commands/
  oceanengine/
scripts/
  discover-sources.ts
  ingest-collection.ts
  build-llms.ts
```

当前 monorepo 子包：

```text
packages/
  oceanengine-ad-open-sdk/
  codegen/
```

迁移触发条件：

- Builder Agent 和 Admin Console 开始需要独立构建或部署。
- builder/llms 被多个 runtime 复用。
- 测试、lint、构建速度或依赖边界开始互相拖累。
- 需要把通用采集器或 llms 生成器单独开源。
