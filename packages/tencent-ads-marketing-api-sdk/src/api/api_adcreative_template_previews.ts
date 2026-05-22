// Generated from tencentad/marketing-api-go-sdk pkg/api/api_adcreative_template_previews.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { AdcreativeTemplatePreviewsGetRequest, AdcreativeTemplatePreviewsGetResponseData } from "../model/index";
import { DefaultConfiguration as TencentAdsV13Configuration } from "../config/configuration";

export interface AdcreativeTemplatePreviewsApiGetRequest {
  data: AdcreativeTemplatePreviewsGetRequest;
}


export class AdcreativeTemplatePreviewsApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: AdcreativeTemplatePreviewsApiGetRequest): Promise<AdcreativeTemplatePreviewsGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: AdcreativeTemplatePreviewsApiGetRequest): Promise<ApiResponse<AdcreativeTemplatePreviewsGetResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<AdcreativeTemplatePreviewsGetResponseData>({
      method: "POST",
      basePath: TencentAdsV13Configuration.basePath,
      path: "/adcreative_template_previews/get",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


