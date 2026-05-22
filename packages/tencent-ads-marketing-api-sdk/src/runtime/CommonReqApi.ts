import { ApiClient } from "./ApiClient";
import type { ApiResponse } from "./ApiResponse";
import type { HttpMethod } from "./types";

export class CommonReqApi {
  constructor(private apiClient = new ApiClient()) {}

  async commonReq<T = unknown>(
    path: string,
    method: HttpMethod,
    options: {
      queryParams?: Record<string, unknown>;
      body?: unknown;
      formParams?: Record<string, unknown>;
      files?: Record<string, Blob | undefined | null>;
      contentType?: string;
    } = {},
  ): Promise<T> {
    const response = await this.commonReqWithHttpInfo<T>(path, method, options);
    return response.data;
  }

  async commonReqWithHttpInfo<T = unknown>(
    path: string,
    method: HttpMethod,
    options: {
      queryParams?: Record<string, unknown>;
      body?: unknown;
      formParams?: Record<string, unknown>;
      files?: Record<string, Blob | undefined | null>;
      contentType?: string;
    } = {},
  ): Promise<ApiResponse<T>> {
    return this.apiClient.requestWithHttpInfo<T>({
      path,
      method,
      queryParams: Object.entries(options.queryParams ?? {}).map(([name, value]) => ({ name, value })),
      body: options.body,
      formParams: options.formParams,
      files: options.files,
      contentType: options.contentType,
    });
  }
}
