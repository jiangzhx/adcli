// Generated from tencentad/marketing-api-go-sdk pkg/api/api_batch_operation.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { BatchOperationAddRequest } from "../model/index";
import { DefaultConfiguration as TencentAdsV13Configuration } from "../config/configuration";

export interface BatchOperationApiAddRequest {
  data: BatchOperationAddRequest;
}


export class BatchOperationApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async add(request: BatchOperationApiAddRequest): Promise<unknown> {
    const response = await this.addWithHttpInfo(request);
    return response.data;
  }

  async addWithHttpInfo(request: BatchOperationApiAddRequest): Promise<ApiResponse<unknown>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling add");
    }
    return this.apiClient.requestWithHttpInfo<unknown>({
      method: "POST",
      basePath: TencentAdsV13Configuration.basePath,
      path: "/batch_operation/add",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


