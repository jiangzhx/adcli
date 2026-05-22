# @jiangzhx/oceanengine-ad-open-sdk

基于官方 Java SDK `oceanengine/ad_open_sdk_java` 迁移的巨量引擎 Node.js/TypeScript SDK。

## 当前包形态

当前 SDK 已经收口成独立源码包：

```txt
packages/oceanengine-ad-open-sdk/
  package.json
  tsconfig.json
  src/
    index.ts
    runtime/
    apis/
    models/
    apis.ts
    models.ts
```

`package.json` 的 exports 目前指向 TypeScript 源码，适合当前 Bun/TypeScript 仓库内测试和继续迁移。真正发布 npm 前，还需要补 `dist` 构建产物和发布流程。

生成器、迁移脚本和生成规范在内部包 `packages/codegen` 维护。默认生成输出结构：

```txt
packages/oceanengine-ad-open-sdk/src/
  apis.ts            # barrel export
  models.ts          # barrel export
  apis/*.ts          # one generated file per Java API class
  models/*.ts        # one generated file per Java model/enum
```

当前基线：

- generated API: 1136
- special runtime API: 1 (`api/CommonReqApi.java`)
- generated model: 9671
- skipped: 0

## 包验证

在当前 SDK 目录执行：

```bash
bun run typecheck
bun run test
```

## 使用入口

统一从包入口导入：

```ts
import {
  ApiClient,
  ReportCustomConfigGetV30Api,
  ReportCustomConfigGetV30DataTopics,
} from "@jiangzhx/oceanengine-ad-open-sdk";

const client = new ApiClient().setAccessToken("access-token");
const api = new ReportCustomConfigGetV30Api(client);

await api.openApiV30ReportCustomConfigGetGet(123, [
  ReportCustomConfigGetV30DataTopics.BASIC_DATA,
]);
```
