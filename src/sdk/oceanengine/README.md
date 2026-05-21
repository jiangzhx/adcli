# @jiangzhx/oceanengine-sdk

基于官方 Java SDK `oceanengine/ad_open_sdk_java` 迁移的巨量引擎 Node.js/TypeScript SDK。

迁移规则见当前目录 `PORTING.md`。

## 当前包形态

当前 SDK 已经收口成独立源码包：

```txt
src/sdk/oceanengine/
  package.json
  tsconfig.json
  src/
    index.ts
    runtime/
    generated/
```

`package.json` 的 exports 目前指向 TypeScript 源码，适合当前 Bun/TypeScript 仓库内测试和继续迁移。真正发布 npm 前，还需要补 `dist` 构建产物和发布流程。

## 迁移脚本

当前目录保留两个迁移脚本。它们都以官方 Java SDK 仓库根目录为输入，默认输出到 `src/generated/`。

### Phase A 抽样生成

用于验证 parser、emitter 和 runtime 行为，只生成少量代表 API/model。适合修改 `src/generator/*` 后快速回归。

```bash
bun run scripts/phase-a-port.ts /path/to/ad_open_sdk_java
```

也可以指定输出目录，避免覆盖当前全量 generated：

```bash
bun run scripts/phase-a-port.ts /path/to/ad_open_sdk_java /tmp/oceanengine-phase-a
```

### 全量重新生成

用于从 Java SDK 全量刷新 `src/generated/`：

```bash
bun run scripts/generate-from-java-sdk.ts /path/to/ad_open_sdk_java
```

也可以指定输出目录做 dry-run：

```bash
bun run scripts/generate-from-java-sdk.ts /path/to/ad_open_sdk_java /tmp/oceanengine-generated
```

默认输出结构：

```txt
src/sdk/oceanengine/src/generated/
  apis.ts            # barrel export
  models.ts          # barrel export
  apis/*.ts          # one generated file per Java API class
  models/*.ts        # one generated file per Java model/enum
```

生成后必须验证：

```bash
bun run typecheck
bun run test
```

生成器实现放在 `src/generator/*`，由上述两个脚本调用；这些文件用于继续 porting / regenerate，不会进入 npm 发布包。

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
} from "@jiangzhx/oceanengine-sdk";

const client = new ApiClient().setAccessToken("access-token");
const api = new ReportCustomConfigGetV30Api(client);

await api.openApiV30ReportCustomConfigGetGet(123, [
  ReportCustomConfigGetV30DataTopics.BASIC_DATA,
]);
```
