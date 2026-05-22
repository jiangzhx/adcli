# OceanEngine Java SDK -> Node.js SDK Generation Guide

你正在把官方 Java SDK 迁移成 Node.js/TypeScript SDK。开始写任何代码前，必须先读完整份文档。

本文档定义迁移规则、执行阶段、生成器边界和 verifier 检查清单。后续实现、生成器、测试和 review 都必须以本文档为约束。

迁移目标不是重新设计一个更顺手的 SDK，而是先得到一份能和 Java SDK 逐项对照的 Node.js SDK。第一阶段优先保证语义、路径、参数、字段和错误行为可核对。

## 1. Source of Truth

迁移以官方 Java SDK 为唯一基准：

- Repository: `https://github.com/oceanengine/ad_open_sdk_java`
- Java package: `com.bytedance.ads`
- API version: `1.1.87`
- Build date: `2026-05-14T14:04:07.544989881+08:00[Asia/Shanghai]`

Go SDK 不作为迁移基准。只有当 Java SDK 代码语义不清时，才允许把 Go SDK 当作非权威参考。

长期最优 source of truth 是官方 OpenAPI JSON/YAML schema。如果后续能拿到巨量引擎用于生成 Java SDK 的原始 OpenAPI schema，应优先改成 `OpenAPI schema -> Node.js SDK`，而不是继续依赖 `Java generated source -> Node.js SDK`。

当前 Java parser 是 bridge/fallback：

- 用途：验证 Node SDK runtime、API/model 映射、全量覆盖率和生成报告。
- 优点：不依赖官方额外提供 schema，能直接从已发布 Java SDK 反推出大部分 API/model。
- 风险：Java 代码是二次生成物，可能丢失 OpenAPI schema 里的 description、format、oneOf/anyOf、binary response、nullable 等更精确信息。
- 约束：parser 必须输出 manifest 和 skipped 原因，不允许静默忽略无法解析的 Java 模式。

## 2. Goal

生成一份独立的 Node.js/TypeScript SDK，覆盖 Java SDK 的核心能力：

- `ApiClient`
- `ApiException`
- `ApiResponse`
- `CommonReqApi`
- `auth/ApiKeyAuth`
- 所有 `api/*Api.java` 对应的 API 方法
- 所有 `model/*.java` 对应的 TypeScript 类型、枚举、请求和响应结构
- 默认 header、鉴权、query 参数、body、form、multipart 行为

这份 SDK 在当前 `adcli` 仓库内开发和测试，但代码边界必须保持为独立 SDK，不依赖 `adcli` 的文档采集逻辑。

## 3. Non-goals

第一阶段不做：

- 不重新设计 OceanEngine API。
- 不按业务场景重组 API。
- 不手工改接口命名。
- 不引入 axios、openapi-client-axios、zod、io-ts 等运行时依赖来替代 Java SDK 的生成物结构。
- 不把 SDK 和文档采集工具强绑定。
- 不调用真实线上接口做验收，除非后续提供 token 和测试账号。

## 4. Phase Model

迁移分阶段执行，不允许一次性把所有目标混在一起：

### Phase A: Faithful Draft

目标是生成一份可读、可 diff、可测试的 TypeScript 草稿。它可以只覆盖少量 API，但必须忠实表达 Java SDK 的运行时语义。

Phase A 必须完成：

- 运行时核心：`ApiClient`、`ApiException`、`ApiResponse`。
- 生成器骨架：能从 Java 源码解析 API 方法和 model。
- 3 个代表接口的端到端生成和测试：
  - `Oauth2AccessTokenApi`
  - `ReportCustomConfigGetV30Api`
  - `AdvertiserFundGetV2Api`

Phase A 允许：

- 对暂时无法确认的文件输出 `// TODO(port): <reason>`。
- 对 multipart、file upload、date adapter 等复杂行为先标记 `// TODO(port): verify Java parity`。
- 对生成器无法解析的 Java 模式记录到 migration notes，而不是猜测。

Phase A 禁止：

- 手写 generated API 作为“临时实现”。
- 为了让 API 更像 JavaScript 而改变 Java 方法名、参数顺序或字段名。
- 靠 README 接口列表猜路径或方法。

### Phase B: Full Generation

目标是扩展生成器覆盖全部 Java `api/*.java` 和 `model/*.java`。

Phase B 必须完成：

- 生成所有 API class。
- 生成所有 model interface 和 enum。
- 输出生成报告，列出成功、跳过、TODO、无法解析的文件。
- 对无法解析项保留可检索的 `TODO(port)` 或 notes，不静默丢弃。

当前 Phase B 基线：

- Java SDK `api/*.java`: 1137 个。
- 已生成 API class: 1136 个。
- special runtime API: 1 个。
  - `api/CommonReqApi.java`: 已由 runtime 手写 `src/runtime/CommonReqApi.ts` 覆盖，不走 generated API。
- Java SDK `model/*.java`: 9671 个。
- 已生成 model: 9671 个。
  - `model/AbstractOpenApiSchema.java`: 作为 OpenAPI Generator 内部抽象 schema 生成最小 TypeScript interface。
- skipped: 0 个。

### Phase C: Publishable SDK

目标是把 `packages/oceanengine-ad-open-sdk` 收口成可发布或可被当前仓库稳定引用的 SDK。

Phase C 才允许做：

- 包导出优化。
- 使用体验补充。
- 文档示例。
- npm 发布配置。

当前 Phase C 状态：

- 已建立 `packages/oceanengine-ad-open-sdk/package.json` 和独立 `tsconfig.json`。
- 已提供包入口、generated API/model 入口和包级 test/typecheck 脚本。
- 当前 exports 指向 TypeScript 源码，适合 Bun/TypeScript 环境继续验证。
- 尚未生成 npm 发布用 `dist` 产物；正式发布前必须补构建产物验证。

任何 Phase C 改动不得破坏 Phase A/B 的 Java parity。

## 5. Output Package Shape

SDK 代码放在当前仓库内的 `packages/*` workspace。不同媒体平台必须有自己的子目录：

```txt
packages/oceanengine-ad-open-sdk/
```

建议目录结构：

```txt
packages/oceanengine-ad-open-sdk/
  package.json
  tsconfig.json
  src/
    runtime/
      ApiClient.ts
      ApiException.ts
      ApiResponse.ts
      auth.ts
      types.ts
    apis/
      XxxApi.ts
    models/
      XxxRequest.ts
    apis.ts
    models.ts
    manifest.json
    index.ts
  test/
    api-client.test.ts
    common-req-api.test.ts
    generated-api.test.ts
```

生成器和生成脚本放在内部 workspace：

```txt
packages/codegen/
  src/oceanengine/
  scripts/oceanengine/
  test/oceanengine/
```

`packages/oceanengine-ad-open-sdk/src/apis*`、`packages/oceanengine-ad-open-sdk/src/models*` 和 `src/manifest.json` 必须由生成器产生，不允许手工维护。

## 6. Agent Task Contract

每个执行迁移的 agent 必须按固定输入、输出和状态汇报工作。

### Implement Task

输入：

- 本文档路径：`packages/codegen/GENERATION.md`
- Java SDK 根目录，例如：`/tmp/oceanengine-sdk-java`
- 明确任务范围，例如：
  - runtime only
  - one API file
  - one model file
  - generator parser for one Java pattern

执行要求：

1. 先读本文档。
2. 只读任务范围需要的 Java 文件和已有 TypeScript 文件。
3. 输出或修改确定路径下的文件。
4. 不确定时写 `TODO(port)`，不要猜。
5. 不重写无关文件。

实现任务完成后，在最终说明里必须给出：

```json
{
  "phase": "A",
  "source_files": ["..."],
  "written_files": ["..."],
  "generated_files": ["..."],
  "todos": 0,
  "confidence": "high|medium|low"
}
```

### Verify Task

verifier 只检查实现是否偏离本文档和 Java SDK，不做风格重构。

verifier 输入：

- 本文档。
- Java 源文件。
- TypeScript 实现或 generated 输出。
- 对应测试。

verifier 输出：

```json
{
  "ok": true,
  "issues": []
}
```

或：

```json
{
  "ok": false,
  "issues": [
    {
      "severity": "must-fix|should-fix|nit",
      "file": "...",
      "source": "...",
      "problem": "...",
      "expected": "..."
    }
  ]
}
```

verifier 不要因为还未覆盖 Phase B 范围而报错；只检查当前任务声明的范围。

### Fix Task

fixer 只处理 verifier 指出的 must-fix 和 should-fix。

fixer 禁止：

- 顺手重写整个文件。
- 顺手改命名。
- 顺手补新功能。
- 删除 `TODO(port)` 但没有解决对应问题。

## 7. Naming Rules

Java 类名到 TypeScript 导出名保持一致：

```txt
Oauth2AccessTokenApi.java -> Oauth2AccessTokenApi
ReportCustomConfigGetV30Api.java -> ReportCustomConfigGetV30Api
Oauth2AccessTokenRequest.java -> Oauth2AccessTokenRequest
ReportCustomConfigGetV30DataTopics.java -> ReportCustomConfigGetV30DataTopics
```

Java 方法名保持一致：

```txt
openApiOauth2AccessTokenPost()
openApiV30ReportCustomConfigGetGet()
commonReq()
commonReqWithHttpInfo()
```

Node.js 侧允许额外提供更自然的 Promise API，但不得替代原始 Java 命名方法。

## 8. ApiClient Generation Rules

Java `ApiClient` 对应 TypeScript `ApiClient`。

必须保留：

- `basePath`
- `defaultHeaders`
- `addDefaultHeader(name, value)`
- `setBasePath(basePath)`
- `setAccessToken(token)`，等价于设置 header `Access-Token`
- 默认 `User-Agent: Bytedance Ads Openapi SDK`
- 默认 `X-Sdk-Language: node`
- 默认 `X-Sdk-Version`
- `buildUrl(path, queryParams)`
- `request(...)`
- `requestWithHttpInfo(...)`

Java 的 `OkHttpClient` 语义在 Node.js 里用 `fetch` 或可注入 `fetch` 实现。实现必须支持测试注入 fake fetch，避免测试访问真实网络。

## 9. Auth Rules

Java SDK 使用：

```java
new ApiKeyAuth("header", "Access-Token")
```

TypeScript SDK 必须等价为：

```ts
client.setAccessToken("xxx");
```

最终 HTTP header 必须包含：

```txt
Access-Token: xxx
```

注意：Java `CommonReqApi` 中 `localVarAuthNames` 是空数组。Node 迁移时默认仍应透传 `ApiClient.defaultHeaders`，但不要给 `CommonReqApi` 强塞额外鉴权分支。

## 10. API Method Generation Rules

每个 Java `*Api.java` 文件迁移成 TypeScript class。

Java 示例：

```java
public ReportCustomConfigGetV30Response openApiV30ReportCustomConfigGetGet(
  Long advertiserId,
  List<ReportCustomConfigGetV30DataTopics> dataTopics
)
```

TypeScript 对应：

```ts
openApiV30ReportCustomConfigGetGet(
  advertiserId: number,
  dataTopics: ReportCustomConfigGetV30DataTopics[],
): Promise<ReportCustomConfigGetV30Response>
```

同时生成：

```ts
openApiV30ReportCustomConfigGetGetWithHttpInfo(...)
```

Java async callback 方法不原样迁移成 callback；Node 默认 Promise 已经覆盖异步语义。

## 11. Required Parameter Rules

Java 中出现：

```java
throw new ApiException("Missing the required parameter 'advertiserId' ...")
```

TypeScript 必须生成同等校验：

```ts
if (advertiserId == null) {
  throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30ReportCustomConfigGetGet");
}
```

`null` 和 `undefined` 都视为缺失。

## 12. Query Serialization Rules

Java:

```java
parameterToPair("advertiser_id", advertiserId)
parameterToPairs("csv", "data_topics", dataTopics)
```

TypeScript 等价：

```txt
advertiser_id=123
data_topics=BASIC_DATA,CREATIVE_DATA
```

集合格式第一阶段必须支持：

- `csv`
- 单值 query

如果 Java SDK 后续出现 `multi`、`ssv`、`tsv`、`pipes`，再补齐对应序列化规则和测试。

## 13. Body And Form Rules

Java:

```java
Object localVarPostBody = request;
Content-Type: application/json
```

TypeScript:

- JSON body 使用 `JSON.stringify`。
- `Content-Type` 默认 `application/json`。
- GET 请求不发送 body。
- form 参数使用 `URLSearchParams`。
- multipart 文件上传后续单独验收，不在第一批默认为完成。

## 14. Model Generation Rules

Java model class 迁移为 TypeScript interface。

Java:

```java
@SerializedName("app_id")
private Long appId;
```

TypeScript:

```ts
export interface Oauth2AccessTokenRequest {
  app_id?: number;
  auth_code: string;
  secret: string;
}
```

外部 JSON 字段名以 `@SerializedName` 为准，不使用 Java camelCase 字段名。

## 15. Enum Generation Rules

Java enum:

```java
BASIC_DATA("BASIC_DATA")
```

TypeScript:

```ts
export const ReportCustomConfigGetV30DataTopics = {
  BASIC_DATA: "BASIC_DATA",
} as const;

export type ReportCustomConfigGetV30DataTopics =
  typeof ReportCustomConfigGetV30DataTopics[keyof typeof ReportCustomConfigGetV30DataTopics];
```

不要生成 TypeScript `enum`，避免运行时 ESM/CJS 兼容问题。

## 16. Type Mapping Rules

Java 到 TypeScript 的基础类型映射：

```txt
String -> string
Integer -> number
Long -> number
Float -> number
Double -> number
Boolean -> boolean
Object -> unknown
List<T> -> T[]
Map<String, T> -> Record<string, T>
JsonNullable<T> -> T | null
```

第一阶段不解决 Java `Long` 超过 JavaScript safe integer 的问题。后续如果业务需要，可增加 `bigint` 或 string long 模式。

## 17. Generation Strategy

不要手工迁移 1000+ 个 API 文件。

必须写生成器：

```txt
Java SDK api/*.java   -> packages/oceanengine-ad-open-sdk/src/apis/*.ts
Java SDK model/*.java -> packages/oceanengine-ad-open-sdk/src/models/*.ts

packages/oceanengine-ad-open-sdk/src/apis.ts   -> API barrel export only
packages/oceanengine-ad-open-sdk/src/models.ts -> model barrel export only
```

生成器输入必须是本地 Java SDK 路径：

```bash
bun run packages/codegen/scripts/oceanengine/phase-a-generate.ts /path/to/ad_open_sdk_java
```

### 17.1 Generation Scripts

当前保留两个脚本，入口都在 `packages/codegen/scripts/oceanengine/`。

#### `phase-a-generate.ts`

用途：Phase A 抽样生成。它只生成少量代表 API/model，用来快速验证 parser、emitter 和 runtime 的 Java parity。

默认覆盖输出到：

```txt
packages/oceanengine-ad-open-sdk/src/
```

推荐调试时指定临时输出目录，避免覆盖当前全量生成物：

```bash
bun run packages/codegen/scripts/oceanengine/phase-a-generate.ts /path/to/ad_open_sdk_java /tmp/oceanengine-phase-a
```

默认覆盖的代表 API：

- `Oauth2AccessTokenApi.java`
- `ReportCustomConfigGetV30Api.java`
- `AdvertiserFundGetV2Api.java`

对应实现：

- 脚本入口：`packages/codegen/scripts/oceanengine/phase-a-generate.ts`
- workflow：`packages/codegen/src/oceanengine/workflow.ts`
- parser：`packages/codegen/src/oceanengine/java-parser.ts`
- emitter：`packages/codegen/src/oceanengine/typescript-emitter.ts`
- 测试：`packages/codegen/test/oceanengine/phase-a-generation.test.ts`

#### `generate-from-java-sdk.ts`

用途：Phase B 全量生成。它扫描 Java SDK 的 `api/*.java` 和 `model/*.java`，刷新全部 generated API/model。

默认命令：

```bash
bun run packages/codegen/scripts/oceanengine/generate-from-java-sdk.ts /path/to/ad_open_sdk_java
```

默认覆盖输出到：

```txt
packages/oceanengine-ad-open-sdk/src/
```

推荐先 dry-run 到临时目录：

```bash
bun run packages/codegen/scripts/oceanengine/generate-from-java-sdk.ts /path/to/ad_open_sdk_java /tmp/oceanengine-generated
```

全量生成后必须检查：

```bash
bun run --cwd packages/oceanengine-ad-open-sdk typecheck
bun run --cwd packages/oceanengine-ad-open-sdk test
```

#### Generated Output Contract

两个脚本都必须输出同一种 generated 结构：

```txt
packages/oceanengine-ad-open-sdk/src/
  apis.ts
  models.ts
  manifest.json
  apis/*.ts
  models/*.ts
```

`manifest.json` 只允许包含稳定、可提交的生成摘要，例如 phase、API/model 数量、special API、skipped 原因。不要写入本机绝对路径、临时目录、用户目录或 token。

生成结果要带来源注释：

```ts
// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.
```

生成器必须从 Java 源码解析这些事实，不能凭命名猜测：

- `localVarPath`
- HTTP method
- query 参数名
- collection query 格式
- request body 参数
- required 参数
- response type
- `@SerializedName`
- enum value

生成器输出必须具备可审计性：

- 每次生成前覆盖旧 generated 文件。
- 输出 `packages/oceanengine-ad-open-sdk/src/manifest.json` 或等价报告。
- 报告包含 phase、文件数量、跳过数量、special API 和 skipped 原因。
- 每个 skipped 文件必须有原因。

当前 Phase A 进度：

- 已实现 runtime 核心和 `CommonReqApi`。
- 已实现 Java API/model parser 雏形。
- 已实现 TypeScript emitter 雏形。
- 已用 3 个代表 API 验证 parser 可以读出核心事实。
- 已实现 `phase-a-generate.ts`，用于生成 Phase A 代表 API/model 和 manifest。
- 已实现 Full Generation 的 `generate-from-java-sdk.ts`。

## 18. Java Pattern Extraction Rules

解析 Java API 文件时，必须按源码中的结构提取，不靠类名推导。

API 文件中至少提取：

```txt
class name
public sync method name
public WithHttpInfo method name
request method: GET/POST
localVarPath
required parameter checks
query params from parameterToPair
collection query params from parameterToPairs
post body source from localVarPostBody
form params from localVarFormParams
response type from TypeToken
auth names from localVarAuthNames
accept headers
content-type headers
```

model 文件中至少提取：

```txt
class or enum name
@SerializedName JSON key
Java field name
Java field type
@Nonnull / openapiRequiredFields
enum constants and string values
nested model references
List<T>
Map<String, T>
JsonNullable<T>
```

如果一个 Java 文件包含当前生成器不支持的模式，必须：

1. 在生成报告里标记 skipped 或 partial。
2. 在生成输出附近保留 `TODO(port)`。
3. 增加一个最小 fixture 或测试再修生成器。

## 19. Verification Rules

第一阶段验收至少包含：

- `ApiClient` 默认 header 测试。
- `Access-Token` header 测试。
- GET query 序列化测试。
- csv array query 序列化测试。
- POST JSON body 测试。
- required 参数缺失测试。
- `CommonReqApi` 测试。
- 至少 3 个真实 Java API 类的迁移快照测试：
  - `Oauth2AccessTokenApi`
  - `ReportCustomConfigGetV30Api`
  - `AdvertiserFundGetV2Api`

测试必须通过 fake fetch 或 request capture 验证请求，不访问真实 OceanEngine API。

## 20. Adversarial Verifier Checklist

verifier 必须重点找这些偏差：

- API 方法名和 Java 不一致。
- 参数顺序和 Java public method 不一致。
- required 参数没有按 Java `ValidateBeforeCall` 校验。
- `null`/`undefined` 缺失判断不完整。
- query key 没有使用 Java `parameterToPair` / `parameterToPairs` 里的字符串。
- `csv` 数组序列化成了重复 query 或 JSON。
- GET 请求带了 body。
- POST JSON 没有设置 `Content-Type: application/json`。
- 默认 header 缺失：`User-Agent`、`X-Sdk-Language`、`X-Sdk-Version`。
- `Access-Token` header 名大小写或拼写不一致。
- model 使用 camelCase 字段替代 `@SerializedName` JSON 字段。
- enum 生成成 TypeScript `enum`。
- response type 被写成 `any`，但 Java 有明确 model。
- generated 文件被手工改动。
- 为了“更 JS”新增了与 Java parity 冲突的包装层。
- 没有 fake fetch 测试就声称请求行为完成。
- silent skip：生成器跳过文件但报告中没有记录。

verifier 不要报这些：

- Phase A 中尚未覆盖的全部 API 数量。
- generated 文件格式不够漂亮但语义正确。
- Promise API 没有 callback 版本。
- 没有真实 token 调用线上接口。

## 21. Migration Discipline For AI Agents

执行迁移的 agent 必须遵守：

- Java SDK 是唯一真相。
- 不猜接口路径，必须从 Java 文件解析 `localVarPath`。
- 不猜 HTTP method，必须从 `buildCall(..., "GET"/"POST", ...)` 解析。
- 不猜 required 参数，必须从 `ValidateBeforeCall` 解析。
- 不猜 JSON 字段名，必须从 `@SerializedName` 解析。
- 不手改 generated 文件。
- 每完成一个生成能力，先补测试再实现。
- 如果 Java SDK 中存在不一致，先记录到迁移 notes，再决定兼容策略。

## 22. First Implementation Milestone

第一批实现只要求跑通完整迁移链路的最小闭环：

1. 建立 `packages/oceanengine-ad-open-sdk` 独立包结构。
2. 实现 `runtime/ApiClient.ts`、`ApiException.ts`、`ApiResponse.ts`。
3. 实现 `CommonReqApi`。
4. 实现 Java parser 和 TypeScript emitter。
5. 实现 `scripts/phase-a-generate.ts` 并生成验证 3 个 API 类：
   - `Oauth2AccessTokenApi`
   - `ReportCustomConfigGetV30Api`
   - `AdvertiserFundGetV2Api`
6. 生成并验证这些 API 依赖的 model 和 enum。
7. 扩展生成器覆盖所有 Java `api/*.java` 和 `model/*.java`。

第一批 milestone 结束时，SDK 可以不发布 npm，但必须可以在当前仓库内通过测试调用。
