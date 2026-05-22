interface RuntimeConfigurationSpec {
  host: string;
  scheme: string;
  userAgent: string;
}

export interface RuntimeEmitOptions {
  sourceVersion: string;
  configuration: RuntimeConfigurationSpec;
}

export function emitRuntimeFiles(options: RuntimeEmitOptions): Record<string, string> {
  return {
    "api/client.ts": emitApiClient(options.sourceVersion),
    "api/api_common.ts": emitCommonApi(),
    "config/configuration.ts": emitConfiguration(options.configuration),
  };
}

export function emitIndexFile() {
  return `${generatedHeader("package entrypoint")}export * from "./api/index";
export * from "./models/index";
export * from "./config/configuration";
`;
}

function emitApiClient(sourceVersion: string) {
  return `${generatedHeader("api/client.go")}import JSONbig from "json-bigint";
import { DefaultConfiguration } from "../config/configuration";

const JSONBigStringParser = JSONbig({ storeAsString: true });
export const SDK_VERSION = ${JSON.stringify(sourceVersion)};

export class ApiClient {
  private basePath = DefaultConfiguration.getBasePath();
  private readonly fetchImpl: FetchLike;
  readonly defaultHeaders = new Headers();

  constructor(options: { fetch?: FetchLike; basePath?: string } = {}) {
    this.fetchImpl = options.fetch ?? fetch;
    if (options.basePath) {
      this.basePath = options.basePath;
    }
    this.setUserAgent(DefaultConfiguration.userAgent);
    this.addDefaultHeader("X-Sdk-Language", "node");
    this.addDefaultHeader("X-Sdk-Version", SDK_VERSION);
    for (const [name, value] of DefaultConfiguration.defaultHeaders) {
      this.addDefaultHeader(name, value);
    }
  }

  getBasePath() {
    return this.basePath;
  }

  setBasePath(basePath: string) {
    this.basePath = basePath;
    return this;
  }

  setUserAgent(userAgent: string) {
    this.addDefaultHeader("User-Agent", userAgent);
    return this;
  }

  addDefaultHeader(name: string, value: string) {
    this.defaultHeaders.set(name, value);
    return this;
  }

  setAccessToken(token: string) {
    this.addDefaultHeader("Access-Token", token);
    return this;
  }

  buildUrl(path: string, queryParams: QueryParam[] = []) {
    const basePath = this.basePath.endsWith("/") ? this.basePath : \`\${this.basePath}/\`;
    const relativePath = path.startsWith("/") ? path.slice(1) : path;
    const url = new URL(relativePath, basePath);
    for (const param of queryParams) {
      if (param.value == null) {
        continue;
      }
      if (Array.isArray(param.value)) {
        if (param.collectionFormat === "multi") {
          for (const value of param.value) {
            url.searchParams.append(param.name, this.parameterToString(value));
          }
          continue;
        }
        if (param.collectionFormat !== "csv") {
          throw new ApiException(\`Unsupported collection format for query parameter '\${param.name}'\`);
        }
        url.searchParams.append(param.name, param.value.map((value) => this.parameterToString(value)).join(","));
        continue;
      }
      url.searchParams.append(param.name, this.parameterToString(param.value));
    }
    return url;
  }

  async request<T = unknown>(options: RequestOptions): Promise<T> {
    const response = await this.requestWithHttpInfo<T>(options);
    return response.data;
  }

  async requestWithHttpInfo<T = unknown>(options: RequestOptions): Promise<ApiResponse<T>> {
    const request = this.buildRequest(options);
    const response = await this.fetchImpl(request);
    const data = await this.readResponseBody(response, options.responseType);

    if (!response.ok) {
      throw new ApiException(\`HTTP \${response.status}\`, {
        statusCode: response.status,
        responseBody: data,
        headers: response.headers,
      });
    }

    return {
      data: data as T,
      statusCode: response.status,
      headers: response.headers,
    };
  }

  private buildRequest(options: RequestOptions) {
    const headers = new Headers(this.defaultHeaders);
    for (const [name, value] of Object.entries(options.headers ?? {})) {
      headers.set(name, value);
    }

    let body: BodyInit | undefined;
    if (options.method !== "GET" && (options.formParams || options.files)) {
      const contentType = options.contentType ?? "application/x-www-form-urlencoded";
      if (contentType === "multipart/form-data") {
        body = this.buildMultipartFormBody(options.formParams, options.files);
      } else if (contentType === "application/x-www-form-urlencoded") {
        headers.set("Content-Type", contentType);
        const formBody = new URLSearchParams();
        for (const [name, value] of Object.entries(options.formParams ?? {})) {
          if (value != null) {
            formBody.append(name, this.parameterToString(value));
          }
        }
        body = formBody;
      } else {
        throw new ApiException(\`Unsupported form content type '\${contentType}'\`);
      }
    } else if (options.method !== "GET" && options.body != null) {
      const contentType = options.contentType ?? "application/json";
      headers.set("Content-Type", contentType);
      body = contentType === "application/json" ? JSON.stringify(options.body) : String(options.body);
    }

    return new Request(this.buildUrl(options.path, options.queryParams), {
      method: options.method,
      headers,
      body,
    });
  }

  private buildMultipartFormBody(formParams: Record<string, unknown> = {}, files: Record<string, Blob | undefined | null> = {}) {
    const formBody = new FormData();
    for (const [name, value] of Object.entries(formParams)) {
      if (value != null) {
        formBody.append(name, this.parameterToString(value));
      }
    }
    for (const [name, value] of Object.entries(files)) {
      if (value != null) {
        formBody.append(name, value);
      }
    }
    return formBody;
  }

  private async readResponseBody(response: Response, responseType: RequestOptions["responseType"] = "json") {
    if (responseType === "arrayBuffer") {
      return response.arrayBuffer();
    }
    const text = await response.text();
    if (!text) {
      return undefined;
    }
    if (responseType === "text") {
      return text;
    }
    const contentType = response.headers.get("Content-Type") ?? "";
    if (contentType.includes("application/json")) {
      return parseJsonPreservingLargeIntegers(text);
    }
    return text;
  }

  private parameterToString(value: unknown) {
    if (value instanceof Date) {
      return value.toISOString();
    }
    if (typeof value === "object" && value !== null) {
      return JSON.stringify(value);
    }
    return String(value);
  }
}

export class ApiException extends Error {
  readonly statusCode?: number;
  readonly responseBody?: unknown;
  readonly headers?: Headers;

  constructor(message: string, options: { statusCode?: number; responseBody?: unknown; headers?: Headers } = {}) {
    super(message);
    this.name = "ApiException";
    this.statusCode = options.statusCode;
    this.responseBody = options.responseBody;
    this.headers = options.headers;
  }
}

export interface ApiResponse<T> {
  data: T;
  statusCode: number;
  headers: Headers;
}

export type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export interface QueryParam {
  name: string;
  value: unknown;
  collectionFormat?: "csv" | "multi";
}

export interface RequestOptions {
  method: HttpMethod;
  path: string;
  queryParams?: QueryParam[];
  headers?: Record<string, string>;
  body?: unknown;
  formParams?: Record<string, unknown>;
  files?: Record<string, Blob | undefined | null>;
  contentType?: string;
  responseType?: "json" | "text" | "arrayBuffer";
}

export type FetchLike = (input: Request, init?: RequestInit) => Promise<Response>;

export function parseJsonPreservingLargeIntegers(text: string): unknown {
  return JSONBigStringParser.parse(text);
}
`;
}

function emitCommonApi() {
  return `${generatedHeader("api/api_common.go")}import { ApiClient, type ApiResponse, type QueryParam } from "./client";
import type { CommonResponse } from "../models/index";

export interface CommonApiGetRequest {
  path: string;
  requestQuery?: Record<string, unknown>;
}

export interface CommonApiPostRequest {
  path: string;
  requestBody?: unknown;
  requestQuery?: Record<string, unknown>;
  requestForm?: Record<string, unknown>;
}

export interface CommonApiPostMultipartRequest {
  path: string;
  requestQuery?: Record<string, unknown>;
  requestFile?: Record<string, Blob | undefined | null>;
  requestForm?: Record<string, unknown>;
}

export class CommonApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: CommonApiGetRequest): Promise<CommonResponse> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: CommonApiGetRequest): Promise<ApiResponse<CommonResponse>> {
    return this.execute("GET", request.path, {
      requestQuery: request.requestQuery,
    });
  }

  async post(request: CommonApiPostRequest): Promise<CommonResponse> {
    const response = await this.postWithHttpInfo(request);
    return response.data;
  }

  async postWithHttpInfo(request: CommonApiPostRequest): Promise<ApiResponse<CommonResponse>> {
    return this.execute("POST", request.path, {
      contentType: "application/json",
      requestBody: request.requestBody,
      requestQuery: request.requestQuery,
      requestForm: request.requestForm,
    });
  }

  async postMultipart(request: CommonApiPostMultipartRequest): Promise<CommonResponse> {
    const response = await this.postMultipartWithHttpInfo(request);
    return response.data;
  }

  async postMultipartWithHttpInfo(request: CommonApiPostMultipartRequest): Promise<ApiResponse<CommonResponse>> {
    return this.execute("POST", request.path, {
      contentType: "multipart/form-data",
      requestQuery: request.requestQuery,
      requestForm: request.requestForm,
      requestFile: request.requestFile,
    });
  }

  private execute(
    method: "GET" | "POST",
    path: string,
    options: {
      contentType?: string;
      requestBody?: unknown;
      requestQuery?: Record<string, unknown>;
      requestForm?: Record<string, unknown>;
      requestFile?: Record<string, Blob | undefined | null>;
    },
  ) {
    return this.apiClient.requestWithHttpInfo<CommonResponse>({
      method,
      path,
      contentType: options.contentType,
      queryParams: toQueryParams(options.requestQuery),
      formParams: options.contentType === "application/json" ? undefined : options.requestForm,
      body: options.requestBody ?? (options.contentType === "application/json" ? options.requestForm : undefined),
      files: options.requestFile,
    });
  }
}

function toQueryParams(values: Record<string, unknown> | undefined): QueryParam[] {
  return Object.entries(values ?? {}).map(([name, value]) => ({ name, value }));
}
`;
}

function emitConfiguration(spec: RuntimeConfigurationSpec) {
  return `${generatedHeader("config/configuration.go")}export class Configuration {
  host = ${JSON.stringify(spec.host)};
  scheme = ${JSON.stringify(spec.scheme)};
  defaultHeaders = new Map<string, string>();
  userAgent = ${JSON.stringify(spec.userAgent)};
  debug = false;
  logEnable = false;
  useLogMw = true;

  constructor(
    options: {
      host?: string;
      scheme?: string;
      defaultHeaders?: Record<string, string>;
      userAgent?: string;
      debug?: boolean;
      logEnable?: boolean;
      useLogMw?: boolean;
    } = {},
  ) {
    if (options.host) {
      this.host = options.host;
    }
    if (options.scheme) {
      this.scheme = options.scheme;
    }
    if (options.userAgent) {
      this.userAgent = options.userAgent;
    }
    if (options.debug != null) {
      this.debug = options.debug;
    }
    if (options.logEnable != null) {
      this.logEnable = options.logEnable;
    }
    if (options.useLogMw != null) {
      this.useLogMw = options.useLogMw;
    }
    for (const [name, value] of Object.entries(options.defaultHeaders ?? {})) {
      this.defaultHeaders.set(name, value);
    }
  }

  addDefaultHeader(name: string, value: string) {
    this.defaultHeaders.set(name, value);
  }

  getBasePath() {
    return \`\${this.scheme}://\${this.host}\`;
  }
}

export function NewConfiguration() {
  return new Configuration();
}

export const DefaultConfiguration = NewConfiguration();
`;
}

function generatedHeader(sourceFile: string) {
  return `// Generated from oceanengine/ad_open_sdk_go ${sourceFile}
// Do not edit manually.

`;
}
