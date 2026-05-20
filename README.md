# AdCLI

面向 IDE Agent 和 LLM 的广告平台 API 文档包。当前主线是把已采集的广告平台文档生成 `llms.txt`、`llms-full.txt` 和静态 Markdown 文档包。

项目当前是 Bun + TypeScript CLI，不使用 Next.js。

## 安装 CLI

发布到 npm 后：

```bash
node --version
npm install -g adcli
adcli doc search "广点通 广告消耗"
```

从 GitHub 安装当前版本：

```bash
npm install -g github:jiangzhx/adcli
adcli doc search "广告消耗"
```

本地开发安装：

```bash
bun install
bun run build:cli
npm install -g .
adcli doc search "广告消耗"
```

`adcli doc search` 默认读取线上索引：

```text
https://adcli.jiangzhx.com/search-index.json
```

本地调试可指定索引：

```bash
adcli doc search "广告消耗" --index public/search-index.json
```

## 常用命令

```bash
bun install
bun run build
bun run test
bun run typecheck
bun run lint
```

`bun run build` 校验已提交的 `public/` 静态产物，适合部署环境。重新采集后本地生成发布产物使用：

```bash
bun run build:llms all
```

只基于当前 `public/` 重新生成搜索索引：

```bash
bun run build:search-index
```

本地搜索已发布文档：

```bash
bun run adcli doc search "广告消耗"
```

完整命令清单见 [docs/commands.md](docs/commands.md)。

## 产物

```text
public/llms.txt
public/llms-full.txt
public/search-index.json
public/{platform}/index.md
public/{platform}/manifest.json
public/{platform}/docs/{doc_id}.md
```

## 数据流

```text
recipes/
  -> discover / ingest
  -> data/sources/{platform}/{source_id}/cleaned.md  # local only, not committed
  -> build:llms
  -> public/
```

详细说明见 [docs/llms.md](docs/llms.md)。

## 未来 MCP 服务

如果后续需要 MCP，可以在当前 Bun/TypeScript 项目中增加独立服务入口，不需要恢复 Next.js。服务只读取 `public/` 下已经发布的静态文档和 manifest。
