// Generated from tencentad/marketing-api-go-sdk pkg/api/api_batch_requests.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { BatchRequestsAddRequest, BatchRequestsAddResponseData } from "../model/index";
import { DefaultConfiguration as TencentAdsV13Configuration } from "../config/configuration";

export interface BatchRequestsApiAddRequest {
  data: BatchRequestsAddRequest;
}


export class BatchRequestsApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async add(request: BatchRequestsApiAddRequest): Promise<BatchRequestsAddResponseData> {
    const response = await this.addWithHttpInfo(request);
    return response.data;
  }

  async addWithHttpInfo(request: BatchRequestsApiAddRequest): Promise<ApiResponse<BatchRequestsAddResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling add");
    }
    return this.apiClient.requestWithHttpInfo<BatchRequestsAddResponseData>({
      method: "POST",
      basePath: TencentAdsV13Configuration.basePath,
      path: "/batch_requests/add",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


