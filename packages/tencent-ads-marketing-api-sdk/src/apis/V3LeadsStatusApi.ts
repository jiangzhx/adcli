// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { LeadsStatusUpdateRequest, LeadsStatusUpdateResponseData } from "../models";

export interface V3LeadsStatusApiUpdateRequest {
  data: LeadsStatusUpdateRequest;
}


export class V3LeadsStatusApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async update(request: V3LeadsStatusApiUpdateRequest): Promise<LeadsStatusUpdateResponseData> {
    const response = await this.updateWithHttpInfo(request);
    return response.data;
  }

  async updateWithHttpInfo(request: V3LeadsStatusApiUpdateRequest): Promise<ApiResponse<LeadsStatusUpdateResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling update");
    }
    return this.apiClient.requestWithHttpInfo<LeadsStatusUpdateResponseData>({
      method: "POST",
      path: "/leads_status/update",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


