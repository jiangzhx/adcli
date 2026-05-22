// Generated from tencentad/marketing-api-go-sdk pkg/api/api_ad_appeal_quota.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { AdAppealQuotaGetRequest, AdAppealQuotaGetResponseData } from "../model/index";
import { DefaultConfiguration as TencentAdsV13Configuration } from "../config/configuration";

export interface AdAppealQuotaApiGetRequest {
  data: AdAppealQuotaGetRequest;
}


export class AdAppealQuotaApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: AdAppealQuotaApiGetRequest): Promise<AdAppealQuotaGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: AdAppealQuotaApiGetRequest): Promise<ApiResponse<AdAppealQuotaGetResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<AdAppealQuotaGetResponseData>({
      method: "POST",
      basePath: TencentAdsV13Configuration.basePath,
      path: "/ad_appeal_quota/get",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


