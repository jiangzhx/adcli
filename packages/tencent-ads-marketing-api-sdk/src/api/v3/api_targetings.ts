// Generated from tencentad/marketing-api-go-sdk pkg/api/v3/api_targetings.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { TargetingsGetRequest, TargetingsGetResponseData } from "../../model/v3/index";
import { DefaultConfiguration as TencentAdsV30Configuration } from "../../config/v3/configuration";

export interface TargetingsApiGetRequest {
  data: TargetingsGetRequest;
}


export class TargetingsApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: TargetingsApiGetRequest): Promise<TargetingsGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: TargetingsApiGetRequest): Promise<ApiResponse<TargetingsGetResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<TargetingsGetResponseData>({
      method: "POST",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/targetings/get",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


