import { ApiClient } from "./ApiClient";
import type { ApiResponse } from "./ApiResponse";
import type { HttpMethod, QueryParam } from "./types";

export type CommonResponse = Record<string, unknown>;

export class CommonReqApi {
  private apiClient: ApiClient;

  constructor(apiClient = new ApiClient()) {
    this.apiClient = apiClient;
  }

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async commonReq(
    method: HttpMethod,
    path: string,
    contentType?: string,
    queryParams?: QueryParam[],
    formParams?: Record<string, unknown>,
    requestBody?: unknown,
  ): Promise<CommonResponse> {
    const response = await this.commonReqWithHttpInfo(method, path, contentType, queryParams, formParams, requestBody);
    return response.data;
  }

  async commonReqWithHttpInfo(
    method: HttpMethod,
    path: string,
    contentType?: string,
    queryParams?: QueryParam[],
    formParams?: Record<string, unknown>,
    requestBody?: unknown,
  ): Promise<ApiResponse<CommonResponse>> {
    return this.apiClient.requestWithHttpInfo<CommonResponse>({
      method,
      path,
      contentType,
      queryParams,
      formParams,
      body: requestBody,
    });
  }
}
