// Generated from tencentad/marketing-api-go-sdk pkg/api/api_leads_call_records.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { LeadsCallRecordsGetRequest, LeadsCallRecordsGetResponseData } from "../model/index";
import { DefaultConfiguration as TencentAdsV13Configuration } from "../config/configuration";

export interface LeadsCallRecordsApiGetRequest {
  data: LeadsCallRecordsGetRequest;
}


export class LeadsCallRecordsApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: LeadsCallRecordsApiGetRequest): Promise<LeadsCallRecordsGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: LeadsCallRecordsApiGetRequest): Promise<ApiResponse<LeadsCallRecordsGetResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<LeadsCallRecordsGetResponseData>({
      method: "POST",
      basePath: TencentAdsV13Configuration.basePath,
      path: "/leads_call_records/get",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


