// Generated from tencentad/marketing-api-go-sdk pkg/api/api_leads_call_token.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { LeadsCallTokenGetRequest, LeadsCallTokenGetResponseData } from "../model/index";
import { DefaultConfiguration as TencentAdsV13Configuration } from "../config/configuration";

export interface LeadsCallTokenApiGetRequest {
  data: LeadsCallTokenGetRequest;
}


export class LeadsCallTokenApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: LeadsCallTokenApiGetRequest): Promise<LeadsCallTokenGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: LeadsCallTokenApiGetRequest): Promise<ApiResponse<LeadsCallTokenGetResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<LeadsCallTokenGetResponseData>({
      method: "POST",
      basePath: TencentAdsV13Configuration.basePath,
      path: "/leads_call_token/get",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


