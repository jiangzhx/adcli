# OceanEngine Java -> TypeScript 迁移契约

把官方 Java SDK 文件迁移成 TypeScript SDK 文件时，按这份 contract 执行。目标是保留 Java SDK 的公开语义，并接入当前 `src/runtime`。

## 1. 范围

- 只迁移任务明确指定的 Java 文件。
- 输出位置以任务要求为准。
- 先读 Java 源码，再读目标目录已有 runtime/API/model 风格。
- 不按 JavaScript 习惯重命名 API、参数、字段或 enum。
- 不把多个 Java API 合并成 wrapper。
- 不为了通过测试删除 Java 源码中存在的参数、字段或检查。
- 不确定时写 `TODO(port): <reason>`，不要猜。

如果当前 `src/runtime` 不能表达 Java SDK 的真实行为，先补 runtime 能力，再迁移 API/model；不要在单个 API 文件里绕开 runtime。

## 2. API 事实

API 文件必须从 Java 源码抽取这些事实：

- class name
- public sync method name
- public `WithHttpInfo` method name
- method parameter names and order
- required checks from `if (<param> == null)`
- path from `localVarPath`
- HTTP method from `buildCall(...)`
- scalar query params from `parameterToPair`
- collection query params from `parameterToPairs`
- body from `localVarPostBody`
- form params from `localVarFormParams`
- response type from `TypeToken`

不要从类名、文件名或接口路径猜 method、response type、query params。

## 3. Model 事实

Model 文件必须从 Java 源码抽取这些事实：

- class or enum name
- `@SerializedName(...)` JSON field name
- Java field type
- required fields from `openapiRequiredFields`
- enum serialized values

TypeScript model 字段名使用 JSON 字段名，不使用 Java camelCase 字段名。

## 4. 类型映射

| Java | TypeScript |
| --- | --- |
| `String` | `string` |
| `Integer` / `int` | `number` |
| `Long` / `long` | ID 使用 `number \| string`，其他使用 `number` |
| `Float` / `Double` / `BigDecimal` | `number` |
| `Boolean` / `boolean` | `boolean` |
| `Object` | `unknown` |
| `File` | runtime 支持时使用 `Blob \| File \| ArrayBuffer`，否则 `TODO(port)` |
| `byte[]` | `ArrayBuffer` |
| `List<T>` | `T[]` |
| `Map<String, T>` | `Record<string, T>` |
| `JsonNullable<T>` | `T \| null` |

ID 规则：

- 字段名匹配 `id`、`*_id`、`advertiser_id`、`project_id`、`promotion_id` 时，类型必须允许 `string`。
- 不要把 19 位 ID 只声明成 `number`。
- 请求参数如果 Java 是 `Long` 且语义是 ID，使用 `number | string`。

## 5. API 类

每个 Java `*Api.java` 输出一个同名 TypeScript class。

必须保留：

- constructor accepts optional `ApiClient`
- `getApiClient()`
- `setApiClient(apiClient)`
- Java sync method name
- Java `WithHttpInfo` method name

普通方法只调用 `WithHttpInfo` 并返回 `response.data`。request 构造、required checks、query/body/form 都放在 `WithHttpInfo`。

```ts
async openApiV30ProjectListGet(...): Promise<ProjectListV30Response> {
  const response = await this.openApiV30ProjectListGetWithHttpInfo(...);
  return response.data;
}

async openApiV30ProjectListGetWithHttpInfo(...): Promise<ApiResponse<ProjectListV30Response>> {
  if (advertiserId == null) {
    throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30ProjectListGet");
  }

  return this.apiClient.requestWithHttpInfo<ProjectListV30Response>({
    method: "GET",
    path: "/open_api/v3.0/project/list/",
    queryParams: [
      { name: "advertiser_id", value: advertiserId },
      { name: "fields", value: fields, collectionFormat: "csv" },
    ],
  });
}
```

Required check 必须使用 `== null`，不要改成 truthy check。

## 6. 请求映射

标量 query：

```java
parameterToPair("advertiser_id", advertiserId)
```

```ts
{ name: "advertiser_id", value: advertiserId }
```

集合 query：

```java
parameterToPairs("csv", "fields", fields)
```

```ts
{ name: "fields", value: fields, collectionFormat: "csv" }
```

规则：

- Java `parameterToPairs("csv", ...)` -> `collectionFormat: "csv"`。
- Java `parameterToPairs("multi", ...)` -> `collectionFormat: "multi"`。
- object query params 不手动 `JSON.stringify`，交给 runtime。
- `localVarPostBody = null` 不输出 `body`。
- `localVarPostBody = <param>` 输出 `body: <param>`。
- `localVarFormParams.put("<name>", <source>)` 输出到 `formParams`。
- API 文件不要手动拼接底层 header；runtime 缺能力就补 runtime。

## 7. Model 形态

对象 model：

```ts
export interface ProjectListV30Filtering {
  ids?: Array<number | string>;
  status?: ProjectListV30FilteringStatus;
  status_first?: ProjectListV30FilteringStatusFirst;
}
```

枚举 model：

```ts
export const ProjectListV30FilteringStatus = {
  ALL: "PROJECT_STATUS_ALL",
  DELETE: "PROJECT_STATUS_DELETE",
} as const;

export type ProjectListV30FilteringStatus =
  typeof ProjectListV30FilteringStatus[keyof typeof ProjectListV30FilteringStatus];
```

规则：

- 不能只迁移当前调用路径用到的字段。任务指定的 Java model 文件中所有 `@SerializedName` 字段都必须输出。
- 嵌套 model 不要降级成 `Record<string, unknown>`，除非 Java 源码本身是 `Object` / `Map<String, Object>`。
- `openapiRequiredFields` 中出现的字段不加 `?`。
- JSON 名不是合法 TS identifier 时，用字符串属性名：`"x-y"?: string`。
- enum key 保留 Java enum 常量名。
- enum value 使用 Java enum 构造参数里的字符串。
- enum 字段必须引用对应 enum type，不要为了省事降级成 `string`。
- 不输出 Java builder、getter、setter、`equals`、`hashCode`、`toString`。

## 8. Imports

API 文件：

```ts
import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ProjectListV30Filtering, ProjectListV30Response } from "../models";
```

Model 文件引用其他 model/enum 时，从 `../models` 导入。

不要导入未使用的类型。

## 9. 文件结构

迁移结果必须贴近当前 SDK 结构：

```txt
apis/<JavaApiClassName>.ts
models/<JavaModelClassName>.ts
models.ts
apis.ts
```

规则：

- 不要把多个 model 合并进一个大 `models/index.ts`，除非任务明确要求临时实验输出。
- 每个 Java model class / enum 输出一个同名 TypeScript 文件。
- barrel export 必须覆盖新增 API 和 model。
- API 文件不要导入未使用的 runtime 类型。

## 10. TODO 规则

只在 Java 源码模式无法安全映射时使用 `TODO(port)`。

可以：

```ts
// TODO(port): Java uses multipart upload; current ApiClient has no multipart encoder.
```

不可以：

```ts
// TODO(port): maybe this is GET
```

如果 path、method、field、enum value 存在于 Java 源码，必须抽取，不要 TODO。

## 11. 验证

迁移后检查：

- TS class name 和 Java class name 一致。
- TS method names 和 Java public methods 一致。
- 参数顺序和 Java method signature 一致。
- Required checks 和 Java null checks 一致。
- Path、HTTP method 和 Java source 一致。
- Query/body/form params 和 Java source 一致。
- Response type 和 Java `TypeToken` 一致。
- Model fields 和 `@SerializedName` 一致。
- Required model fields 和 `openapiRequiredFields` 一致。
- Enum values 和 Java serialized values 一致。
- Enum fields 没有被降级成 `string`。
- 指定 Java model 文件的字段没有因为 CLI 暂时不用而遗漏。
- ID fields 允许 `string`。
- 输出文件结构和当前 SDK 的 `apis/`、`models/`、barrel export 保持一致。

## 12. 第一批测试范围

先只迁移当前 CLI 已经覆盖的巨量接口，用它们验证这份 contract 的质量。

API：

- advertiser list
- project list
- promotion list

要求：

- 对应 TypeScript 文件能通过 typecheck。
- 请求 path、method、query、body 和 Java SDK 一致。
- CLI 现有命令能继续调用迁移后的 SDK。
- 默认列表输出能保留 ID 精度。
- project list 能通过过滤条件覆盖 ENABLE、DISABLE、DELETE 状态。
- 即使第一批只测试 CLI 三个命令，相关 Java model 文件也必须完整迁移；不能只输出 CLI 展示字段。

最终回答包含摘要：

```json
{
  "mode": "manual-port",
  "source_files": [],
  "written_files": [],
  "todos": 0,
  "confidence": "high"
}
```
