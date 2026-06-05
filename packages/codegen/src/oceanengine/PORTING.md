# OceanEngine Go -> TypeScript 迁移规范

你正在把一个 OceanEngine 官方 Go SDK 文件迁移成 TypeScript。写任何代码之前，必须先读完整份文档。

目标是产出一个忠实的 `.ts` 文件，行为要匹配 `github.com/oceanengine/ad_open_sdk_go` 中表达的逻辑。结果应方便和 Go 源码并排审查。拿不准时优先写明确的 `TODO(port)`，不要猜。

## 基本规则

- 迁移你拿到的源文件。直接阅读 Go 源码，并翻译它表达的行为。
- 除非本文另有说明，保持 Go 文件到 TypeScript 文件的一一映射：
  - `api/api_project_list_v30.go` -> `api/api_project_list_v30.ts`
  - `models/model_project_list_v3_0_response.go` -> `models/model_project_list_v3_0_response.ts`
  - `config/configuration.go` -> `config/configuration.ts`
  - `client.go` -> `client.ts`
- 对外可见的官方 SDK 名称必须保留。例如 `ProjectListV30ApiService` 映射为 `ProjectListV30Api`，不要改成 `ProjectApi`。
- 保留 request-object 风格。API 方法只接收一个 `request` 对象。
- runtime 行为只放在 runtime 文件里：`api/client.go`、`api/api_common.go`、`config/configuration.go`、`middleware/*.go` 和根目录 `client.go`。
- 依赖保持稳定。如果某个 Go 行为无法用当前 runtime 表达，留下 `// TODO(port): runtime parity`。
- ID 形态的 `int64` 映射为 `number | string`，避免 JavaScript 丢失精度。
- import 保持本地且稳定。API 文件从 `./client` 引入 `ApiClient`、`ApiException`、`ApiResponse`；model 类型从 `../models/index` 引入。
- 输出合法的 TypeScript module，只使用 named exports。不要使用 default export。
- 除非源字段名、JSON tag 或 enum value 本身需要，否则只使用 ASCII。
- 如果遇到本文未覆盖的 Go 源码模式，保留意图并添加 `// TODO(port): unsupported Go SDK pattern: ...`。

## 工具使用契约

workflow 在“实现”前会先做本地 AST 分析并产出 API/model/unknown 分类；调度 prompt 只接收这个轻量分类和文件元信息，用它选择实现路线。实现 agent 只处理被调度为 `agent_port` 的文件；被调度为 `local_model_codegen` 的文件由 workflow 本地确定性生成，不进入本文的手写迁移流程。你仍然必须阅读 Go 源码来完成迁移和核对细节。

可用工具：

- `oceanengine_analyze_ast`：分析一个 Go 源文件，返回 API、model 或 unknown 的 Go AST facts。用于核对 method/path/params/model fields 等细节；不要用它重复替代 workflow 已给出的分类。
- `oceanengine_generate_model`：从 Go model 文件确定性生成 TypeScript model。实现 agent 只有在调度结果允许该工具，且源码没有显示 API/runtime/client/config/middleware 混合行为时才可以调用。
- `oceanengine_verify_port`：对照 Go AST facts 校验已迁移的 TypeScript 文件。用于自检 API 合同，不替代人工迁移判断。

规则：

- 必须先阅读 Go 源码，再决定是否调用工具。
- 禁止通过 Bash 调用 `bun run analyze:oceanengine`、`bun run generate-model:oceanengine`、`bun run verify:oceanengine` 或其他生成脚本。使用已注册的普通工具。
- 不要自己调用本地分类器重新判断文件类型。实现路径以任务里给出的调度结果为准；如果调度结果是 `agent_port`，按源码和本文规则手写迁移。
- 如果源码阅读发现分类结果明显不可信，例如 `model` 文件里出现 HTTP request、service receiver 或 runtime 行为，不要调用 `oceanengine_generate_model`，改按源码手写迁移并添加 `TODO(port)` 说明差距。
- `oceanengine_generate_model` 只能用于纯 model。API、runtime、client、configuration、middleware 或混合文件必须按本文规则迁移，不能用 model 工具绕过。
- 工具生成的纯 model 文件不需要 `PORT STATUS` trailer；手写迁移文件必须包含 trailer。
- 如果工具输出和源码阅读结论冲突，以源码为准，并在需要时添加 `TODO(port)` 说明差距。

## 源码映射

| Go 源文件 | TypeScript 输出 | 说明 |
| --- | --- | --- |
| `api/api_*.go`，但不含 `api/api_common.go` | `api/<same basename>.ts` | 每个 Go API service 对应一个 API class 和一个 request interface。 |
| `api/api_common.go` | `api/api_common.ts` | 共享的动态请求 helper。 |
| `api/client.go` | `api/client.ts` | SDK runtime HTTP client。 |
| `models/*.go` | `models/<same basename>.ts` | 每个 Go model 或 enum 对应一个 model module。 |
| `config/configuration.go` | `config/configuration.ts` | 配置默认值和 base path。 |
| `middleware/*.go` | `middleware/<same basename>.ts` | 需要时迁移 runtime middleware helper。 |
| `client.go` | `client.ts` | 根目录 SDK facade。 |

Index 文件：

- `api/index.ts` 导出 `./client`、`./api_common` 和每个 API module。
- `models/index.ts` 导出每个 model module。
- package `index.ts` 导出 API、models 和 configuration。

## API Class 形态

对于 Go API service：

```go
type ProjectListV30ApiService service
type ApiOpenApiV30ProjectListGetRequest struct { ... }
func (a *ProjectListV30ApiService) openApiV30ProjectListGetExecute(r *ApiOpenApiV30ProjectListGetRequest) (...)
```

输出：

```ts
export interface ProjectListV30ApiOpenApiV30ProjectListGetRequest {
  advertiserId: number | string;
  filtering?: ProjectListV30Filtering;
}

export class ProjectListV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ProjectListGet(
    request: ProjectListV30ApiOpenApiV30ProjectListGetRequest,
  ): Promise<ProjectListV30Response> {
    const response = await this.openApiV30ProjectListGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ProjectListGetWithHttpInfo(
    request: ProjectListV30ApiOpenApiV30ProjectListGetRequest,
  ): Promise<ApiResponse<ProjectListV30Response>> {
    // 先做 validation，再调用 apiClient.requestWithHttpInfo(...)
  }
}
```

规则：

- Class name = Go service name 去掉 `Service`。
- Request interface name = `${ClassName}${UpperFirst(methodName)}Request`。
- Method name = Go request struct name 去掉 `Api` 前缀和 `Request` 后缀，然后只把第一个字符改成小写。
- 同时输出两种方法：
  - `method(request): Promise<ResponseType>` 返回 `response.data`。
  - `methodWithHttpInfo(request): Promise<ApiResponse<ResponseType>>` 返回完整的 status/headers/data。
- 必须存在 `constructor(private apiClient = new ApiClient()) {}`。
- 必须存在 `getApiClient()` 和 `setApiClient(apiClient)`。
- 不要暴露 Go 的 `context.Context`、`ApiService`、`*http.Response` 或 `error`。

## HTTP 请求映射

| Go 模式 | TypeScript 输出 |
| --- | --- |
| `localVarHTTPMethod := http.MethodGet` | `method: "GET"` |
| `http.MethodPost` | `method: "POST"` |
| `http.MethodPut` | `method: "PUT"` |
| `http.MethodPatch` | `method: "PATCH"` |
| `http.MethodDelete` | `method: "DELETE"` |
| `localBasePath + "/open_api/..."` | `path: "/open_api/..."` |
| `parameterAddToHeaderOrQuery(localVarQueryParams, "x", r.foo)` | `queryParams` 中的 `{ name: "x", value: request.foo }` |
| `parameterAddToHeaderOrQuery(localVarFormParams, "x", r.foo)` | `formParams: { x: request.foo }` |
| `formFiles["file"] = r.file` | `files: { file: request.file }` |
| `localVarPostBody = r.body` | `body: request.body` |
| `localVarHTTPContentTypes := []string{"application/json"}` | `contentType: "application/json"` |
| `localVarHTTPContentTypes := []string{"multipart/form-data"}` | `contentType: "multipart/form-data"` |
| response type `[]byte` | `responseType: "arrayBuffer"`，并返回 `Promise<ArrayBuffer>` |

始终调用：

```ts
return this.apiClient.requestWithHttpInfo<ResponseType>({
  method: "...",
  path: "...",
  queryParams: [
    { name: "...", value: request.someField },
  ],
  contentType: "...",
  formParams: { ... },
  files: { ... },
  body: request.someBody,
});
```

Go 源码没有使用的请求选项可以省略。源码没有 query params 时，保留空的 `queryParams: []` 也可以。

## 校验映射

请求调用前必须迁移 Go 的 `ReportError(...)` 检查。

| Go 条件 | TypeScript 条件 |
| --- | --- |
| `r.foo == nil` | `request.foo == null` |
| `*r.foo < 1` | `request.foo != null && Number(request.foo) < 1` |
| `*r.foo > 100` | `request.foo != null && Number(request.foo) > 100` |
| `len(*r.foo) < 1` | `request.foo != null && request.foo.length < 1` |
| `len(*r.foo) > 100` | `request.foo != null && request.foo.length > 100` |
| `strlen(*r.foo) < 1` | `request.foo != null && Array.from(String(request.foo)).length < 1` |
| `strlen(*r.foo) > 100` | `request.foo != null && Array.from(String(request.foo)).length > 100` |

抛出 `ApiException`，并使用和 Go 完全一致的错误消息：

```ts
if (request.advertiserId == null) {
  throw new ApiException("advertiserId is required and must be specified");
}
```

如果源码没有显式 `ReportError` 检查，但某个 request 字段已知是 required，添加同样的 required 检查。不要凭空添加 Go 源码里不存在的 range/length 校验。

## 类型映射

| Go 类型或归一化类型 | TypeScript | 说明 |
| --- | --- | --- |
| `string` / `String` | `string` | |
| `int`, `int32` / `Integer` | `number` | |
| `int64` / `Long` | `number` | 仅用于非 ID 形态字段。 |
| ID-shaped `int64` / `LongString` | `number | string` | 适用于名称 `id`、`ids`、`*_id`、`*_ids`、`*Id`、`*Ids`。 |
| `float32` / `Float` | `number` | |
| `float64` / `Double` | `number` | |
| `BigDecimal` | `number` | |
| `bool` / `Boolean` | `boolean` | |
| `interface{}` / `Object` | `unknown` | |
| `[]byte` / `byte[]` | `ArrayBuffer` | |
| `FormFileInfo` / `File` | `Blob` | |
| `NullableTime` | `string | null` | Go 映射为 nullable string。 |
| `time.Time` | `string` | |
| `[]T` / `List<T>` | `T[]` | union 元素类型需要加括号：`(number | string)[]`。 |
| `map[string]T` / `Map<String, T>` | `Record<string, T>` | |
| `JsonNullable<T>` | `T | null` | |
| 具名 model type | 同名 | 在 API/model module 中从 `../models/index` 引入。 |

ID 精度规则是强制要求。类似 `7641898034989400000` 这样的 advertiser/project/promotion/material ID，从 JSON 解析返回或作为请求值接收时，都必须能以 string 保留。

## Model 形态

对于 Go struct：

```go
type ProjectListV30Response struct {
  Code *int64 `json:"code,omitempty"`
  Message string `json:"message"`
}
```

输出：

```ts
export interface ProjectListV30Response {
  code?: number;
  message: string;
}
```

规则：

- 使用 JSON tag 名称作为 TypeScript property name。
- 如果 JSON 名称不是合法 identifier，使用引号：`"7d_retention"?: number`。
- 跳过 `json:"-"` 字段。
- `omitempty` 表示 optional property，即 `?`。
- 没有 `omitempty` 表示 required property。
- 不要使用 Go 字段名作为 property name，除非 JSON tag 就是这样写的。
- 带 `omitempty` 的 pointer 是 optional，不是 nullable，除非 Go 类型明确表达 nullable。
- `[]*T` 和 `[]T` 都映射为 `T[]`。
- 引用的 model 必须从 `../models/index` 引入，排除 self-import。

对于 Go enum：

```go
type ReportCustomConfigGetV30DataTopics string

const (
  BASIC_DATA_ReportCustomConfigGetV30DataTopics ReportCustomConfigGetV30DataTopics = "BASIC_DATA"
)
```

输出：

```ts
export const ReportCustomConfigGetV30DataTopics = {
  BASIC_DATA: "BASIC_DATA",
} as const;

export type ReportCustomConfigGetV30DataTopics =
  typeof ReportCustomConfigGetV30DataTopics[keyof typeof ReportCustomConfigGetV30DataTopics];
```

规则：

- 当 const key 带有 enum type 后缀时，去掉该后缀。
- 完全保留 string 和 numeric enum value。
- 使用 `as const` 加 value-union type。

对于 `AbstractOpenApiSchema`，输出：

```ts
export interface AbstractOpenApiSchema {
  instance?: unknown;
  is_nullable?: boolean;
  schema_type?: string;
}
```

## Runtime 文件

runtime 行为属于下面这些文件。普通 API 和 model module 调用这个 runtime，不要在本地重新实现 HTTP 或 JSON 行为。

### `api/client.ts`

必须具备的行为：

- 默认使用 `fetch`，但允许通过 `new ApiClient({ fetch, basePath })` 注入。
- `defaultHeaders` 保持为 `Headers`。
- `setAccessToken(token)` 设置 `Access-Token`。
- 添加默认 headers：
  - `User-Agent`
  - `X-Sdk-Language: node`
  - `X-Sdk-Version: <source version>`
  - configuration default headers。
- `buildUrl(path, queryParams)` 必须跳过 `null` / `undefined` 值。
- 数组支持：
  - `collectionFormat: "multi"` -> 追加重复 query params。
  - `collectionFormat: "csv"` -> 用逗号 join。
  - 默认 -> 把整个数组 stringify 成单个值。
- 非 GET 请求支持 JSON body、URL encoded form body 和 multipart form body。
- `request()` 返回 `data`。
- `requestWithHttpInfo()` 返回 `{ data, statusCode, headers }`。
- 非 2xx 响应抛出 `ApiException`，并保留 `statusCode`、response body 和 headers。
- JSON 响应必须使用 `json-bigint` 解析，并设置 `storeAsString: true`。
- `responseType: "arrayBuffer"` 必须返回 `response.arrayBuffer()`。

### `api/api_common.ts`

必须具备的行为：

- 导出 `CommonApiGetRequest`、`CommonApiPostRequest` 和 `CommonApiPostMultipartRequest`。
- 导出 `CommonApi`，并包含 `get`、`getWithHttpInfo`、`post`、`postWithHttpInfo`、`postMultipart` 和 `postMultipartWithHttpInfo`。
- 把 `requestQuery` 映射为 query params。
- JSON post 使用 `requestBody` 或 `requestForm` 作为 body。
- multipart post 把 `requestFile` 映射为 `files`，把 `requestForm` 映射为 `formParams`。

### `config/configuration.ts`

必须具备的行为：

- 导出 `Configuration`、`NewConfiguration()` 和 `DefaultConfiguration`。
- 保留 Go 对 `host`、`scheme` 和 `userAgent` 的默认值。
- `getBasePath()` 返回 `${scheme}://${host}`。
- 支持 `defaultHeaders`、`debug`、`logEnable` 和 `useLogMw` options，即使这些选项在 runtime 中是 no-op。

### `middleware/*.ts`

只有当 middleware 提供 TypeScript runtime 需要的行为时才迁移。如果 TypeScript runtime 已经有意把这些行为吸收到 `ApiClient`，留下 `TODO(port): runtime parity`，不要复制无用 middleware。

### 根目录 `client.ts`

根目录 Go `client.go` 是 `api.APIClient` 的 facade。

规则：

- 保留 facade 意图。
- 暴露等价于 Go `Init(cfg)` 的初始化 helper。
- 如果 TypeScript 用户可以直接导入 API classes，且 package exports 已经覆盖，不要生成成千上万个手写 service accessor。省略时添加 `TODO(port): facade service accessors omitted`。

## Imports

API module imports：

```ts
import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { SomeModel, SomeEnum } from "../models/index";
```

Model module imports：

```ts
import type { OtherModel } from "../models/index";
```

规则：

- 按字母序排列 imported model names。
- 只 import 当前文件引用的 model types。
- 不要 import primitive types。
- 不要 import 当前正在声明的 model。
- model 使用 type-only imports。

不得 import 的 primitive 归一化类型：

`String`, `Integer`, `Long`, `LongString`, `Float`, `Double`, `BigDecimal`, `Boolean`, `Object`, `File`, `byte[]`。

## 输出风格

- 使用两个空格缩进。
- 使用 semicolons。
- 使用 double quotes。
- request interfaces 放在 API classes 前面。
- model 文件中，除了必要 imports，只导出 model interfaces/enums。
- 不要 runtime logging。
- 除必要的 `TODO(port)` 外，不写 comments。
- 每个文件结尾都要有 port status trailer：

```ts
// --------------------------------------------------------------------------
// PORT STATUS
// source: api/example.go (NNN 行)
// confidence: high | medium | low
// todos: N
// notes: 一句简短说明
// --------------------------------------------------------------------------
```

## 一致性检查

完成文件前，检查：

- 输出路径匹配源路径映射。
- API class、request interface、method 和 `WithHttpInfo` 名称匹配规则。
- required checks 和 range/length checks 与 Go `ReportError` 消息完全一致。
- Query/form/file/body params 与 Go 源码名称完全一致。
- Response type 匹配 Go execute return type。
- ID 形态的 `int64` fields 和 params 是 `number | string`。
- Models 使用 JSON tag 名称，而不是 Go field names。
- `omitempty` optionality 正确。
- Runtime 文件导出 API 文件需要的稳定 runtime surface。
- 非 2xx 和 JSON big integer 行为保留在 runtime 中，不要复制到每个 API 文件里。

## TODO 策略

使用：

```ts
// TODO(port): 说明缺失的源码模式或 runtime 差距
```

下列情况使用 `TODO(port)`：

- 本文未覆盖的 Go 源码模式。
- 超出 `Access-Token` / `ApiKeyAuth` 的 auth 行为。
- 源码里看不出 collection format 的场景。
- 已迁移文件需要但 `ApiClient` 尚缺失的 runtime 行为。

不要为普通类型映射、optional fields、query params 或已知 request checks 使用 `TODO(port)`。
