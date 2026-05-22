// Generated from tencentad/marketing-api-go-sdk pkg/api/api_leads_call_record.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { LeadsCallRecordGetRequest, LeadsCallRecordGetResponseData } from "../model/index";
import { DefaultConfiguration as TencentAdsV13Configuration } from "../config/configuration";

export interface LeadsCallRecordApiGetRequest {
  data: LeadsCallRecordGetRequest;
}


export class LeadsCallRecordApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: LeadsCallRecordApiGetRequest): Promise<LeadsCallRecordGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: LeadsCallRecordApiGetRequest): Promise<ApiResponse<LeadsCallRecordGetResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<LeadsCallRecordGetResponseData>({
      method: "POST",
      basePath: TencentAdsV13Configuration.basePath,
      path: "/leads_call_record/get",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


