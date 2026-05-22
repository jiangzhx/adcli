// Generated from tencentad/marketing-api-go-sdk pkg/api/api_leads_call.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { LeadsCallCreateRequest, LeadsCallCreateResponseData } from "../model/index";
import { DefaultConfiguration as TencentAdsV13Configuration } from "../config/configuration";

export interface LeadsCallApiCreateRequest {
  data: LeadsCallCreateRequest;
}


export class LeadsCallApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async create(request: LeadsCallApiCreateRequest): Promise<LeadsCallCreateResponseData> {
    const response = await this.createWithHttpInfo(request);
    return response.data;
  }

  async createWithHttpInfo(request: LeadsCallApiCreateRequest): Promise<ApiResponse<LeadsCallCreateResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling create");
    }
    return this.apiClient.requestWithHttpInfo<LeadsCallCreateResponseData>({
      method: "POST",
      basePath: TencentAdsV13Configuration.basePath,
      path: "/leads_call/create",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


