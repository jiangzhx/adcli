# @jiangzhx/adcli-codegen

AdCLI 内部代码生成工具包，不发布到 npm。

当前职责：

- `src/oceanengine/`: 巨量广告开放平台 Java SDK 到 TypeScript SDK 的解析、生成和工作流。
- `scripts/oceanengine/`: 巨量 SDK 生成、抽样生成和 Codex 辅助迁移脚本。
- `test/oceanengine/`: 生成器和生成工作流测试。

常用命令：

```bash
bun run generate:oceanengine /path/to/ad_open_sdk_java
bun run phase-a:oceanengine /path/to/ad_open_sdk_java /tmp/oceanengine-phase-a
bun run test
bun run typecheck
```

默认全量生成会写入：

```text
packages/oceanengine-ad-open-sdk/src/apis/
packages/oceanengine-ad-open-sdk/src/models/
packages/oceanengine-ad-open-sdk/src/apis.ts
packages/oceanengine-ad-open-sdk/src/models.ts
```
