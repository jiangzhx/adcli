# SDK

这里放媒体平台 SDK 迁移和封装代码。每个媒体平台使用独立子目录，避免不同平台的运行时、生成器、模型和测试相互混在一起。

当前规划：

- `oceanengine/`: 基于官方 Java SDK 迁移的巨量引擎 Node.js/TypeScript SDK。

## Monorepo 约定

根项目通过 Bun workspace 管理 SDK 子包：

```json
{
  "workspaces": ["src/sdk/*"]
}
```

每个媒体平台 SDK 都必须是独立包，至少包含：

- `package.json`
- `tsconfig.json`
- `src/index.ts`
- `test/*.test.ts`
- 平台自己的 `README.md`

新增平台时按独立目录添加，例如：

```txt
src/sdk/oceanengine/
src/sdk/tencentad/
```

根项目提供统一入口：

```bash
bun run sdk:test
bun run sdk:typecheck
```
