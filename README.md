# Ad Docs Context

面向 IDE Agent 的广告平台文档上下文项目。当前主线是把已采集的广告平台文档生成 `llms.txt`、`llms-full.txt` 和静态 Markdown 文档包。

项目当前是 Node.js/TypeScript CLI，不使用 Next.js。

## 常用命令

```bash
pnpm install
pnpm build
pnpm test
pnpm typecheck
pnpm lint
```

`pnpm build` 校验已提交的 `public/` 静态产物，适合部署环境。重新采集后本地生成发布产物使用：

```bash
pnpm build:llms all
```

## 产物

```text
public/llms.txt
public/llms-full.txt
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

如果后续需要 MCP，可以在当前 Node 项目中增加独立服务入口，不需要恢复 Next.js。服务只读取 `public/` 下已经发布的静态文档和 manifest。
