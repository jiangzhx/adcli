// Generated from tencentad/marketing-api-go-sdk pkg/api/v3/api_estimation.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { EstimationGetRequest, EstimationGetResponseData } from "../../model/v3/index";
import { DefaultConfiguration as TencentAdsV30Configuration } from "../../config/v3/configuration";

export interface EstimationApiGetRequest {
  data: EstimationGetRequest;
}


export class EstimationApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: EstimationApiGetRequest): Promise<EstimationGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: EstimationApiGetRequest): Promise<ApiResponse<EstimationGetResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<EstimationGetResponseData>({
      method: "POST",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/estimation/get",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


