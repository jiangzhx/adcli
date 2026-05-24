# OceanEngine Go -> TypeScript porting guide

You are translating one OceanEngine official Go SDK file to TypeScript. Read this whole document before writing any code.

The goal is a faithful `.ts` file that matches the behavior encoded in `github.com/oceanengine/ad_open_sdk_go`. The result should be useful for side-by-side review against the Go source. Prefer an explicit `TODO(port)` over guessing.

## Ground Rules

- Port the source file you are given. Read the Go source directly and translate the behavior it expresses.
- Keep the Go file-to-file shape unless this document says otherwise:
  - `api/api_project_list_v30.go` -> `api/api_project_list_v30.ts`
  - `models/model_project_list_v3_0_response.go` -> `models/model_project_list_v3_0_response.ts`
  - `config/configuration.go` -> `config/configuration.ts`
  - `client.go` -> `client.ts`
- Preserve official SDK names when they are API-visible. For example, `ProjectListV30ApiService` maps to `ProjectListV30Api`, not `ProjectApi`.
- Preserve request-object style. API methods take one `request` object.
- Keep runtime behavior isolated to runtime files (`api/client.go`, `api/api_common.go`, `config/configuration.go`, `middleware/*.go`, and root `client.go`).
- Keep dependencies stable. If a Go behavior cannot be expressed with the current runtime, leave `// TODO(port): runtime parity`.
- ID-shaped `int64` values map to `number | string` so JavaScript does not lose precision.
- Keep imports local and stable. API files import `ApiClient`, `ApiException`, and `ApiResponse` from `./client`; model types come from `../models/index`.
- Emit valid TypeScript modules with named exports only. Do not use default exports.
- Use ASCII only unless the source field name, JSON tag, or enum value requires otherwise.
- If a Go source pattern is not covered here, preserve intent and add `// TODO(port): unsupported Go SDK pattern: ...`.

## Source Map

| Go source | TypeScript output | Notes |
| --- | --- | --- |
| `api/api_*.go` except `api/api_common.go` | `api/<same basename>.ts` | One API class and one request interface per Go API service. |
| `api/api_common.go` | `api/api_common.ts` | Shared dynamic request helper. |
| `api/client.go` | `api/client.ts` | SDK runtime HTTP client. |
| `models/*.go` | `models/<same basename>.ts` | One model module per Go model or enum. |
| `config/configuration.go` | `config/configuration.ts` | Configuration defaults and base path. |
| `middleware/*.go` | `middleware/<same basename>.ts` | Runtime middleware helpers when needed. |
| `client.go` | `client.ts` | Root SDK facade. |

Index files:

- `api/index.ts` exports `./client`, `./api_common`, and each API module.
- `models/index.ts` exports each model module.
- package `index.ts` exports API, models, and configuration.

## API Class Shape

For a Go API service:

```go
type ProjectListV30ApiService service
type ApiOpenApiV30ProjectListGetRequest struct { ... }
func (a *ProjectListV30ApiService) openApiV30ProjectListGetExecute(r *ApiOpenApiV30ProjectListGetRequest) (...)
```

emit:

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
    // validation, then apiClient.requestWithHttpInfo(...)
  }
}
```

Rules:

- Class name = Go service name without `Service`.
- Request interface name = `${ClassName}${UpperFirst(methodName)}Request`.
- Method name = Go request struct name without `Api` prefix and `Request` suffix, then lower-case the first character only.
- Emit both method forms:
  - `method(request): Promise<ResponseType>` returns `response.data`.
  - `methodWithHttpInfo(request): Promise<ApiResponse<ResponseType>>` returns full status/headers/data.
- `constructor(private apiClient = new ApiClient()) {}` must exist.
- `getApiClient()` and `setApiClient(apiClient)` must exist.
- Do not expose Go `context.Context`, `ApiService`, `*http.Response`, or `error`.

## HTTP Request Mapping

| Go pattern | TypeScript output |
| --- | --- |
| `localVarHTTPMethod := http.MethodGet` | `method: "GET"` |
| `http.MethodPost` | `method: "POST"` |
| `http.MethodPut` | `method: "PUT"` |
| `http.MethodPatch` | `method: "PATCH"` |
| `http.MethodDelete` | `method: "DELETE"` |
| `localBasePath + "/open_api/..."` | `path: "/open_api/..."` |
| `parameterAddToHeaderOrQuery(localVarQueryParams, "x", r.foo)` | `{ name: "x", value: request.foo }` in `queryParams` |
| `parameterAddToHeaderOrQuery(localVarFormParams, "x", r.foo)` | `formParams: { x: request.foo }` |
| `formFiles["file"] = r.file` | `files: { file: request.file }` |
| `localVarPostBody = r.body` | `body: request.body` |
| `localVarHTTPContentTypes := []string{"application/json"}` | `contentType: "application/json"` |
| `localVarHTTPContentTypes := []string{"multipart/form-data"}` | `contentType: "multipart/form-data"` |
| response type `[]byte` | `responseType: "arrayBuffer"` and return `Promise<ArrayBuffer>` |

Always call:

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

Omit optional request options when the Go source does not use them. It is fine to leave an empty `queryParams: []` when the source has no query params.

## Validation Mapping

Port Go `ReportError(...)` checks before the request call.

| Go condition | TypeScript condition |
| --- | --- |
| `r.foo == nil` | `request.foo == null` |
| `*r.foo < 1` | `request.foo != null && Number(request.foo) < 1` |
| `*r.foo > 100` | `request.foo != null && Number(request.foo) > 100` |
| `len(*r.foo) < 1` | `request.foo != null && request.foo.length < 1` |
| `len(*r.foo) > 100` | `request.foo != null && request.foo.length > 100` |
| `strlen(*r.foo) < 1` | `request.foo != null && Array.from(String(request.foo)).length < 1` |
| `strlen(*r.foo) > 100` | `request.foo != null && Array.from(String(request.foo)).length > 100` |

Throw `ApiException` with the exact Go error message:

```ts
if (request.advertiserId == null) {
  throw new ApiException("advertiserId is required and must be specified");
}
```

If the source has no explicit `ReportError` check but a request field is known required, add the same required check. Do not invent range/length validation that is absent from the Go source.

## Type Map

| Go type or normalized type | TypeScript | Notes |
| --- | --- | --- |
| `string` / `String` | `string` | |
| `int`, `int32` / `Integer` | `number` | |
| `int64` / `Long` | `number` | only when not ID-shaped. |
| ID-shaped `int64` / `LongString` | `number | string` | applies to names `id`, `ids`, `*_id`, `*_ids`, `*Id`, `*Ids`. |
| `float32` / `Float` | `number` | |
| `float64` / `Double` | `number` | |
| `BigDecimal` | `number` | |
| `bool` / `Boolean` | `boolean` | |
| `interface{}` / `Object` | `unknown` | |
| `[]byte` / `byte[]` | `ArrayBuffer` | |
| `FormFileInfo` / `File` | `Blob` | |
| `NullableTime` | `string | null` | Go maps to nullable string. |
| `time.Time` | `string` | |
| `[]T` / `List<T>` | `T[]` | Wrap union element types: `(number | string)[]`. |
| `map[string]T` / `Map<String, T>` | `Record<string, T>` | |
| `JsonNullable<T>` | `T | null` | |
| named model type | same name | Import from `../models/index` in API/model modules. |

ID precision rule is mandatory. A captured advertiser/project/promotion/material ID such as `7641898034989400000` must survive as a string if returned by JSON parsing or accepted as a request value.

## Model Shape

For a Go struct:

```go
type ProjectListV30Response struct {
  Code *int64 `json:"code,omitempty"`
  Message string `json:"message"`
}
```

emit:

```ts
export interface ProjectListV30Response {
  code?: number;
  message: string;
}
```

Rules:

- Use the JSON tag name as the TypeScript property name.
- If the JSON name is not a valid identifier, quote it: `"7d_retention"?: number`.
- Skip `json:"-"` fields.
- `omitempty` means optional property (`?`).
- No `omitempty` means required property.
- Do not use Go field names for property names unless the JSON tag says so.
- Pointers with `omitempty` are optional, not nullable, unless the Go type is explicitly nullable.
- `[]*T` and `[]T` both map to `T[]`.
- Imported model references must come from `../models/index`, excluding self-imports.

For a Go enum:

```go
type ReportCustomConfigGetV30DataTopics string

const (
  BASIC_DATA_ReportCustomConfigGetV30DataTopics ReportCustomConfigGetV30DataTopics = "BASIC_DATA"
)
```

emit:

```ts
export const ReportCustomConfigGetV30DataTopics = {
  BASIC_DATA: "BASIC_DATA",
} as const;

export type ReportCustomConfigGetV30DataTopics =
  typeof ReportCustomConfigGetV30DataTopics[keyof typeof ReportCustomConfigGetV30DataTopics];
```

Rules:

- Strip the enum type suffix from constant keys when present.
- Preserve string and numeric enum values exactly.
- Use `as const` plus a value-union type.

For `AbstractOpenApiSchema`, emit:

```ts
export interface AbstractOpenApiSchema {
  instance?: unknown;
  is_nullable?: boolean;
  schema_type?: string;
}
```

## Runtime Files

Runtime behavior belongs in these files. Ordinary API and model modules call into this runtime instead of reimplementing HTTP or JSON behavior locally.

### `api/client.ts`

Required behavior:

- Use `fetch` by default, but allow injection through `new ApiClient({ fetch, basePath })`.
- Keep `defaultHeaders` as `Headers`.
- `setAccessToken(token)` sets `Access-Token`.
- Add default headers:
  - `User-Agent`
  - `X-Sdk-Language: node`
  - `X-Sdk-Version: <source version>`
  - configuration default headers.
- `buildUrl(path, queryParams)` must skip `null`/`undefined` values.
- Arrays support:
  - `collectionFormat: "multi"` -> append repeated query params.
  - `collectionFormat: "csv"` -> join by comma.
  - default -> stringify the array as a single value.
- Non-GET requests support JSON body, URL encoded form body, and multipart form body.
- `request()` returns `data`.
- `requestWithHttpInfo()` returns `{ data, statusCode, headers }`.
- Non-2xx responses throw `ApiException` and preserve `statusCode`, response body, and headers.
- JSON responses must be parsed with `json-bigint` using `storeAsString: true`.
- `responseType: "arrayBuffer"` must return `response.arrayBuffer()`.

### `api/api_common.ts`

Required behavior:

- Export `CommonApiGetRequest`, `CommonApiPostRequest`, and `CommonApiPostMultipartRequest`.
- Export `CommonApi` with `get`, `getWithHttpInfo`, `post`, `postWithHttpInfo`, `postMultipart`, and `postMultipartWithHttpInfo`.
- Map `requestQuery` to query params.
- For JSON post, use `requestBody` or `requestForm` as body.
- For multipart post, map `requestFile` to `files` and `requestForm` to `formParams`.

### `config/configuration.ts`

Required behavior:

- Export `Configuration`, `NewConfiguration()`, and `DefaultConfiguration`.
- Preserve Go defaults for `host`, `scheme`, and `userAgent`.
- `getBasePath()` returns `${scheme}://${host}`.
- Support `defaultHeaders`, `debug`, `logEnable`, and `useLogMw` options even if they are no-ops in the runtime.

### `middleware/*.ts`

Translate middleware only when it provides behavior needed by the TypeScript runtime. If the TypeScript runtime intentionally absorbs this behavior into `ApiClient`, leave a `TODO(port): runtime parity` note instead of duplicating unused middleware.

### root `client.ts`

The root Go `client.go` is a facade over `api.APIClient`.

Rules:

- Preserve the facade intent.
- Expose an initialization helper equivalent to Go `Init(cfg)`.
- Do not generate thousands of handwritten service accessors if TypeScript users can import API classes directly and package exports already cover them. Add `TODO(port): facade service accessors omitted` if omitted.

## Imports

API module imports:

```ts
import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { SomeModel, SomeEnum } from "../models/index";
```

Model module imports:

```ts
import type { OtherModel } from "../models/index";
```

Rules:

- Sort imported model names alphabetically.
- Import only model types referenced by the file.
- Do not import primitive types.
- Do not import the model currently being declared.
- Use type-only imports for models.

Primitive normalized types that must not be imported:

`String`, `Integer`, `Long`, `LongString`, `Float`, `Double`, `BigDecimal`, `Boolean`, `Object`, `File`, `byte[]`.

## Output Style

- Use two-space indentation.
- Use semicolons.
- Use double quotes.
- Keep request interfaces before API classes.
- Keep model interfaces/enums as the only exported item in model files unless imports are needed.
- No runtime logging.
- No comments except necessary `TODO(port)` notes.
- End every file with a port status trailer:

```ts
// --------------------------------------------------------------------------
// PORT STATUS
// source: api/example.go (NNN lines)
// confidence: high | medium | low
// todos: N
// notes: one short sentence
// --------------------------------------------------------------------------
```

## Parity Checks

Before finishing a file, verify:

- Output path matches the source path map.
- API class, request interface, method, and `WithHttpInfo` names match the rules.
- Required checks and range/length checks match Go `ReportError` messages exactly.
- Query/form/file/body params match the Go source names exactly.
- Response type matches the Go execute return type.
- ID-shaped `int64` fields and params are `number | string`.
- Models use JSON tag names, not Go field names.
- `omitempty` optionality is correct.
- Runtime files export the stable runtime surface required by API files.
- Non-2xx and JSON big integer behavior remains in runtime, not copied into each API file.

## TODO Policy

Use:

```ts
// TODO(port): explain the missing source pattern or runtime gap
```

Use `TODO(port)` for:

- Go source patterns not covered by this guide.
- Auth behavior beyond `Access-Token` / `ApiKeyAuth`.
- Collection formats not evident from the source.
- Runtime behavior needed by a ported file but absent from `ApiClient`.

Do not use `TODO(port)` for ordinary type mapping, optional fields, query params, or known request checks.
