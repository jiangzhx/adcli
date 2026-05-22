// Generated from tencentad/marketing-api-go-sdk pkg/api/v3/api_leads.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { LeadsAddRequest, LeadsAddResponseData, LeadsUpdateRequest, LeadsUpdateResponseData } from "../../model/v3/index";
import { DefaultConfiguration as TencentAdsV30Configuration } from "../../config/v3/configuration";

export interface LeadsApiAddRequest {
  data: LeadsAddRequest;
}

export interface LeadsApiUpdateRequest {
  data: LeadsUpdateRequest;
}


export class LeadsApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async add(request: LeadsApiAddRequest): Promise<LeadsAddResponseData> {
    const response = await this.addWithHttpInfo(request);
    return response.data;
  }

  async addWithHttpInfo(request: LeadsApiAddRequest): Promise<ApiResponse<LeadsAddResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling add");
    }
    return this.apiClient.requestWithHttpInfo<LeadsAddResponseData>({
      method: "POST",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/leads/add",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async update(request: LeadsApiUpdateRequest): Promise<LeadsUpdateResponseData> {
    const response = await this.updateWithHttpInfo(request);
    return response.data;
  }

  async updateWithHttpInfo(request: LeadsApiUpdateRequest): Promise<ApiResponse<LeadsUpdateResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling update");
    }
    return this.apiClient.requestWithHttpInfo<LeadsUpdateResponseData>({
      method: "POST",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/leads/update",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


