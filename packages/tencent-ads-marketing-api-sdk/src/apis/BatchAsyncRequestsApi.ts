// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { BatchAsyncRequestsAddRequest, BatchAsyncRequestsAddResponseData, BatchAsyncRequestsGetResponseData } from "../models";

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


