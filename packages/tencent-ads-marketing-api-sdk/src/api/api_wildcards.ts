// Generated from tencentad/marketing-api-go-sdk pkg/api/api_wildcards.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { WildcardsGetRequest, WildcardsGetResponseData } from "../model/index";
import { DefaultConfiguration as TencentAdsV13Configuration } from "../config/configuration";

export interface WildcardsApiGetRequest {
  data: WildcardsGetRequest;
}


export class WildcardsApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: WildcardsApiGetRequest): Promise<WildcardsGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: WildcardsApiGetRequest): Promise<ApiResponse<WildcardsGetResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<WildcardsGetResponseData>({
      method: "POST",
      basePath: TencentAdsV13Configuration.basePath,
      path: "/wildcards/get",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


