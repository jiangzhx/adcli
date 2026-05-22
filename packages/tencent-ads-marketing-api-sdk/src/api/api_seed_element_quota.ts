// Generated from tencentad/marketing-api-go-sdk pkg/api/api_seed_element_quota.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { SeedElementQuotaGetRequest, SeedElementQuotaGetResponseData } from "../model/index";
import { DefaultConfiguration as TencentAdsV13Configuration } from "../config/configuration";

export interface SeedElementQuotaApiGetRequest {
  data: SeedElementQuotaGetRequest;
}


export class SeedElementQuotaApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: SeedElementQuotaApiGetRequest): Promise<SeedElementQuotaGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: SeedElementQuotaApiGetRequest): Promise<ApiResponse<SeedElementQuotaGetResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<SeedElementQuotaGetResponseData>({
      method: "POST",
      basePath: TencentAdsV13Configuration.basePath,
      path: "/seed_element_quota/get",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


