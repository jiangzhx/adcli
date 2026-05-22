// Generated from tencentad/marketing-api-go-sdk pkg/api/api_adcreative_template_preview.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { AdcreativeTemplatePreviewGetRequest, AdcreativeTemplatePreviewGetResponseData } from "../model/index";
import { DefaultConfiguration as TencentAdsV13Configuration } from "../config/configuration";

export interface AdcreativeTemplatePreviewApiGetRequest {
  data: AdcreativeTemplatePreviewGetRequest;
}


export class AdcreativeTemplatePreviewApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: AdcreativeTemplatePreviewApiGetRequest): Promise<AdcreativeTemplatePreviewGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: AdcreativeTemplatePreviewApiGetRequest): Promise<ApiResponse<AdcreativeTemplatePreviewGetResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<AdcreativeTemplatePreviewGetResponseData>({
      method: "POST",
      basePath: TencentAdsV13Configuration.basePath,
      path: "/adcreative_template_preview/get",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


