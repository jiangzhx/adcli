// Generated from tencentad/marketing-api-go-sdk pkg/api/v3/api_batch_async_requests.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { BatchAsyncRequestsAddRequest, BatchAsyncRequestsAddResponseData, BatchAsyncRequestsGetResponseData } from "../../model/v3/index";
import { DefaultConfiguration as TencentAdsV30Configuration } from "../../config/v3/configuration";

export interface BatchAsyncRequestsApiAddRequest {
  data: BatchAsyncRequestsAddRequest;
}

export interface BatchAsyncRequestsApiGetRequest {
  accountId: number | string;
  filtering?: unknown;
  page?: number;
  pageSize?: number;
  fields?: unknown;
}


export class BatchAsyncRequestsApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async add(request: BatchAsyncRequestsApiAddRequest): Promise<BatchAsyncRequestsAddResponseData> {
    const response = await this.addWithHttpInfo(request);
    return response.data;
  }

  async addWithHttpInfo(request: BatchAsyncRequestsApiAddRequest): Promise<ApiResponse<BatchAsyncRequestsAddResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling add");
    }
    return this.apiClient.requestWithHttpInfo<BatchAsyncRequestsAddResponseData>({
      method: "POST",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/batch_async_requests/add",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async get(request: BatchAsyncRequestsApiGetRequest): Promise<BatchAsyncRequestsGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: BatchAsyncRequestsApiGetRequest): Promise<ApiResponse<BatchAsyncRequestsGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<BatchAsyncRequestsGetResponseData>({
      method: "GET",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/batch_async_requests/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "filtering", value: request.filtering, collectionFormat: "multi" },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

}


