// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { BatchRequestsAddRequest, BatchRequestsAddResponseData } from "../models";

export interface V3BatchRequestsApiAddRequest {
  data: BatchRequestsAddRequest;
}


export class V3BatchRequestsApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async add(request: V3BatchRequestsApiAddRequest): Promise<BatchRequestsAddResponseData> {
    const response = await this.addWithHttpInfo(request);
    return response.data;
  }

  async addWithHttpInfo(request: V3BatchRequestsApiAddRequest): Promise<ApiResponse<BatchRequestsAddResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling add");
    }
    return this.apiClient.requestWithHttpInfo<BatchRequestsAddResponseData>({
      method: "POST",
      path: "/batch_requests/add",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


