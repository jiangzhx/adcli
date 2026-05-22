// Generated from tencentad/marketing-api-go-sdk pkg/api/v3/api_leads_status.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { LeadsStatusUpdateRequest, LeadsStatusUpdateResponseData } from "../../model/v3/index";
import { DefaultConfiguration as TencentAdsV30Configuration } from "../../config/v3/configuration";

export interface LeadsStatusApiUpdateRequest {
  data: LeadsStatusUpdateRequest;
}


export class LeadsStatusApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async update(request: LeadsStatusApiUpdateRequest): Promise<LeadsStatusUpdateResponseData> {
    const response = await this.updateWithHttpInfo(request);
    return response.data;
  }

  async updateWithHttpInfo(request: LeadsStatusApiUpdateRequest): Promise<ApiResponse<LeadsStatusUpdateResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling update");
    }
    return this.apiClient.requestWithHttpInfo<LeadsStatusUpdateResponseData>({
      method: "POST",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/leads_status/update",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


