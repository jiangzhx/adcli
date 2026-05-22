// Generated from tencentad/marketing-api-go-sdk pkg/api/v3/api_creative_recommend.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { CreativeRecommendGetRequest, CreativeRecommendGetResponseData } from "../../model/v3/index";
import { DefaultConfiguration as TencentAdsV30Configuration } from "../../config/v3/configuration";

export interface CreativeRecommendApiGetRequest {
  data: CreativeRecommendGetRequest;
}


export class CreativeRecommendApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: CreativeRecommendApiGetRequest): Promise<CreativeRecommendGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: CreativeRecommendApiGetRequest): Promise<ApiResponse<CreativeRecommendGetResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<CreativeRecommendGetResponseData>({
      method: "POST",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/creative_recommend/get",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


