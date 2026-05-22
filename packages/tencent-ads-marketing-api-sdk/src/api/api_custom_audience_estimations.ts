// Generated from tencentad/marketing-api-go-sdk pkg/api/api_custom_audience_estimations.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { CustomAudienceEstimationsGetRequest, CustomAudienceEstimationsGetResponseData } from "../model/index";
import { DefaultConfiguration as TencentAdsV13Configuration } from "../config/configuration";

export interface CustomAudienceEstimationsApiGetRequest {
  data: CustomAudienceEstimationsGetRequest;
}


export class CustomAudienceEstimationsApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: CustomAudienceEstimationsApiGetRequest): Promise<CustomAudienceEstimationsGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: CustomAudienceEstimationsApiGetRequest): Promise<ApiResponse<CustomAudienceEstimationsGetResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<CustomAudienceEstimationsGetResponseData>({
      method: "POST",
      basePath: TencentAdsV13Configuration.basePath,
      path: "/custom_audience_estimations/get",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


