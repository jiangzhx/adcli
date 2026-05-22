import { ApiException } from "./ApiException";
import { parseJsonPreservingLargeIntegers } from "./json";
import { SDK_VERSION } from "./sdk-version";
import type { ApiResponse } from "./ApiResponse";
import type { FetchLike, QueryParam, RequestOptions } from "./types";

export { SDK_VERSION };

export class ApiClient {
  private basePath = "https://api.e.qq.com/v1.3";
  private readonly fetchImpl: FetchLike;
  readonly defaultHeaders = new Headers();

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
    this.addDefaultHeader("Access-Token", token);
    return this;
  }

  buildUrl(path: string, queryParams: QueryParam[] = []) {
    const url = new URL(path, this.basePath);
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
          throw new ApiException(`Unsupported collection format for query parameter '${param.name}'`);
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
      throw new ApiException(`HTTP ${response.status}`, {
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
        throw new ApiException(`Unsupported form content type '${contentType}'`);
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
