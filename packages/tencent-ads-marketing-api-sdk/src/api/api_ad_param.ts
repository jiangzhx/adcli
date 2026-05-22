// Generated from tencentad/marketing-api-go-sdk pkg/api/api_ad_param.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { AdParamGetRequest, AdParamGetResponseData } from "../model/index";
import { DefaultConfiguration as TencentAdsV13Configuration } from "../config/configuration";

export interface AdParamApiGetRequest {
  data: AdParamGetRequest;
}


export class AdParamApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: AdParamApiGetRequest): Promise<AdParamGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: AdParamApiGetRequest): Promise<ApiResponse<AdParamGetResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<AdParamGetResponseData>({
      method: "POST",
      basePath: TencentAdsV13Configuration.basePath,
      path: "/ad_param/get",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


