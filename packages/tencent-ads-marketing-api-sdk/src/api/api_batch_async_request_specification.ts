// Generated from tencentad/marketing-api-go-sdk pkg/api/api_batch_async_request_specification.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { BatchAsyncRequestSpecificationGetResponseData } from "../model/index";
import { DefaultConfiguration as TencentAdsV13Configuration } from "../config/configuration";

export interface BatchAsyncRequestSpecificationApiGetRequest {
  accountId: number | string;
  taskId: number | string;
  page?: number;
  pageSize?: number;
  fields?: unknown;
}


export class BatchAsyncRequestSpecificationApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: BatchAsyncRequestSpecificationApiGetRequest): Promise<BatchAsyncRequestSpecificationGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: BatchAsyncRequestSpecificationApiGetRequest): Promise<ApiResponse<BatchAsyncRequestSpecificationGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }

    if (request.taskId == null) {
      throw new ApiException("Missing the required parameter 'taskId' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<BatchAsyncRequestSpecificationGetResponseData>({
      method: "GET",
      basePath: TencentAdsV13Configuration.basePath,
      path: "/batch_async_request_specification/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "task_id", value: request.taskId },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

}


