// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { AdcreativeTemplatePreviewGetRequest, AdcreativeTemplatePreviewGetResponseData } from "../models";

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
      path: "/adcreative_template_preview/get",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


