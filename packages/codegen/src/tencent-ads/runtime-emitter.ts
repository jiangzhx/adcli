interface RuntimeConfigurationSpec {
  basePath: string;
  userAgent: string;
}

export interface RuntimeEmitOptions {
  sourceVersion: string;
  configurations: {
    v1: RuntimeConfigurationSpec;
    v3: RuntimeConfigurationSpec;
  };
}

export function emitRuntimeFiles(options: RuntimeEmitOptions): Record<string, string> {
  return {
    "api/client.ts": emitApiClient({
      configurationModule: "../config/configuration",
      defaultConfigurationName: "DefaultConfiguration",
      includeUserToken: false,
      sourceFile: "pkg/api/client.go",
      sourceVersion: options.sourceVersion,
    }),
    "api/v3/client.ts": emitApiClient({
      configurationModule: "../../config/v3/configuration",
      defaultConfigurationName: "DefaultConfiguration",
      includeUserToken: true,
      sourceFile: "pkg/api/v3/client.go",
      sourceVersion: options.sourceVersion,
    }),
    "config/configuration.ts": emitConfiguration(options.configurations.v1, "pkg/config/configuration.go"),
    "config/v3/configuration.ts": emitConfiguration(options.configurations.v3, "pkg/config/v3/configuration.go"),
  };
}

export function emitIndexFile() {
  return `${generatedHeader("package entrypoint")}export * from "./api/index";
export * from "./model/index";
export * as v3Api from "./api/v3/index";
export * as v3Model from "./model/v3/index";
export * from "./config/configuration";
export * as v3Config from "./config/v3/configuration";
`;
}

function emitApiClient(options: {
  configurationModule: string;
  defaultConfigurationName: string;
  includeUserToken: boolean;
  sourceFile: string;
  sourceVersion: string;
}) {
  const userTokenField = options.includeUserToken ? "  private userToken?: string;\n" : "";
  const setUserToken = options.includeUserToken
    ? `
  setUserToken(token: string) {
    this.userToken = token;
    return this;
  }
`
    : "";
  const userTokenQuery = options.includeUserToken
    ? `    if (this.userToken) {
      url.searchParams.set("user_token", this.userToken);
    }
`
    : "";

  return `${generatedHeader(options.sourceFile)}import JSONbig from "json-bigint";
import { ${options.defaultConfigurationName} } from "${options.configurationModule}";

const JSONBigStringParser = JSONbig({ storeAsString: true });
export const SDK_VERSION = ${JSON.stringify(options.sourceVersion)};

export class ApiClient {
  private basePath = ${options.defaultConfigurationName}.basePath;
  private readonly fetchImpl: FetchLike;
  private accessToken?: string;
${userTokenField}  readonly defaultHeaders = new Headers();

  constructor(options: { fetch?: FetchLike; basePath?: string } = {}) {
    this.fetchImpl = options.fetch ?? fetch;
    if (options.basePath) {
      this.basePath = options.basePath;
    }
    this.setUserAgent("Tencent Ads Marketing API SDK");
    this.addDefaultHeader("X-Sdk-Language", "node");
    this.addDefaultHeader("X-Sdk-Version", SDK_VERSION);
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
    this.accessToken = token;
    this.addDefaultHeader("Access-Token", token);
    return this;
  }
${setUserToken}

  buildUrl(path: string, queryParams: QueryParam[] = [], basePathOverride?: string) {
    const requestBasePath = basePathOverride ?? this.basePath;
    const basePath = requestBasePath.endsWith("/") ? requestBasePath : \`\${requestBasePath}/\`;
    const relativePath = path.startsWith("/") ? path.slice(1) : path;
    const url = new URL(relativePath, basePath);
    for (const param of queryParams) {
      if (param.value == null) {
        continue;
      }
      if (Array.isArray(param.value)) {
        if (param.collectionFormat === "multi") {
          url.searchParams.append(param.name, JSON.stringify(param.value));
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
    this.applyAuthQueryParams(url);
    return url;
  }

  async request<T = unknown>(options: RequestOptions): Promise<T> {
    const response = await this.requestWithHttpInfo<T>(options);
    return response.data;
  }

  async requestWithHttpInfo<T = unknown>(options: RequestOptions): Promise<ApiResponse<T>> {
    const request = this.buildRequest(options);
    const response = await this.fetchImpl(request);
    const responseBody = await this.readResponseBody(response, options.responseType);

    if (!response.ok) {
      throw new ApiException(\`HTTP \${response.status}\`, {
        statusCode: response.status,
        responseBody,
        headers: response.headers,
      });
    }

    return {
      data: this.unwrapResponseData<T>(responseBody, options.responseType),
      statusCode: response.status,
      headers: response.headers,
    };
  }

  private buildRequest(options: RequestOptions) {
    const headers = new Headers(this.defaultHeaders);
    for (const [name, value] of Object.entries(options.headers ?? {})) {
      headers.set(name, value);
    }
    if (!headers.has("Accept")) {
      headers.set("Accept", "application/json");
    }
    if (options.contentType && options.contentType !== "multipart/form-data") {
      headers.set("Content-Type", options.contentType);
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

    return new Request(this.buildUrl(options.path, options.queryParams, options.basePath), {
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

  private unwrapResponseData<T>(responseBody: unknown, responseType: RequestOptions["responseType"] = "json"): T {
    if (responseType !== "json" || !isRecord(responseBody) || typeof responseBody.code !== "number") {
      return responseBody as T;
    }
    if (responseBody.code !== 0) {
      throw new ApiException(getApiErrorMessage(responseBody), {
        responseBody,
      });
    }
    return responseBody.data as T;
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

  private applyAuthQueryParams(url: URL) {
    if (!this.accessToken) {
      return;
    }
    url.searchParams.set("access_token", this.accessToken);
    url.searchParams.set("timestamp", Math.floor(Date.now() / 1000).toString());
    url.searchParams.set("nonce", createNonce());
${userTokenQuery}  }
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
  basePath?: string;
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

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function getApiErrorMessage(responseBody: Record<string, unknown>) {
  if (typeof responseBody.message === "string" && responseBody.message) {
    return responseBody.message;
  }
  if (typeof responseBody.message_cn === "string" && responseBody.message_cn) {
    return responseBody.message_cn;
  }
  return \`Tencent Ads API error: \${responseBody.code}\`;
}

function createNonce() {
  return crypto.randomUUID().replaceAll("-", "").slice(0, 20);
}
`;
}

function emitConfiguration(spec: RuntimeConfigurationSpec, sourceFile: string) {
  return `${generatedHeader(sourceFile)}export class Configuration {
  basePath = ${JSON.stringify(spec.basePath)};
  defaultHeaders = new Map<string, string>();
  userAgent = ${JSON.stringify(spec.userAgent)};

  constructor(options: { basePath?: string; defaultHeaders?: Record<string, string>; userAgent?: string } = {}) {
    if (options.basePath) {
      this.basePath = options.basePath;
    }
    if (options.userAgent) {
      this.userAgent = options.userAgent;
    }
    for (const [name, value] of Object.entries(options.defaultHeaders ?? {})) {
      this.defaultHeaders.set(name, value);
    }
  }

  addDefaultHeader(name: string, value: string) {
    this.defaultHeaders.set(name, value);
  }
}

export function NewConfiguration() {
  return new Configuration();
}

export const DefaultConfiguration = NewConfiguration();
`;
}

function generatedHeader(sourceFile: string) {
  return `// Generated from tencentad/marketing-api-go-sdk ${sourceFile}
// Do not edit manually.

`;
}
