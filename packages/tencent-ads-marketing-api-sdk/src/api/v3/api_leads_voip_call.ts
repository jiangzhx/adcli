// Generated from tencentad/marketing-api-go-sdk pkg/api/v3/api_leads_voip_call.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { LeadsVoipCallAddRequest, LeadsVoipCallAddResponseData } from "../../model/v3/index";
import { DefaultConfiguration as TencentAdsV30Configuration } from "../../config/v3/configuration";

export interface LeadsVoipCallApiAddRequest {
  data: LeadsVoipCallAddRequest;
}


export class LeadsVoipCallApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async add(request: LeadsVoipCallApiAddRequest): Promise<LeadsVoipCallAddResponseData> {
    const response = await this.addWithHttpInfo(request);
    return response.data;
  }

  async addWithHttpInfo(request: LeadsVoipCallApiAddRequest): Promise<ApiResponse<LeadsVoipCallAddResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling add");
    }
    return this.apiClient.requestWithHttpInfo<LeadsVoipCallAddResponseData>({
      method: "POST",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/leads_voip_call/add",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


