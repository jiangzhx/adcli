// Generated from tencentad/marketing-api-go-sdk pkg/api/api_keyword_recommend.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { KeywordRecommendGetRequest, KeywordRecommendGetResponseData } from "../model/index";
import { DefaultConfiguration as TencentAdsV13Configuration } from "../config/configuration";

export interface KeywordRecommendApiGetRequest {
  data: KeywordRecommendGetRequest;
}


export class KeywordRecommendApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: KeywordRecommendApiGetRequest): Promise<KeywordRecommendGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: KeywordRecommendApiGetRequest): Promise<ApiResponse<KeywordRecommendGetResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<KeywordRecommendGetResponseData>({
      method: "POST",
      basePath: TencentAdsV13Configuration.basePath,
      path: "/keyword_recommend/get",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


