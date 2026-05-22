// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { CreativeRecommendGetRequest, CreativeRecommendGetResponseData } from "../models";

export interface V3CreativeRecommendApiGetRequest {
  data: CreativeRecommendGetRequest;
}


export class V3CreativeRecommendApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: V3CreativeRecommendApiGetRequest): Promise<CreativeRecommendGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: V3CreativeRecommendApiGetRequest): Promise<ApiResponse<CreativeRecommendGetResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<CreativeRecommendGetResponseData>({
      method: "POST",
      path: "/creative_recommend/get",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


