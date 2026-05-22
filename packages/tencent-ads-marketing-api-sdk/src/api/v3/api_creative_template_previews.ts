// Generated from tencentad/marketing-api-go-sdk pkg/api/v3/api_creative_template_previews.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { CreativeTemplatePreviewsGetRequest, CreativeTemplatePreviewsGetResponseData } from "../../model/v3/index";
import { DefaultConfiguration as TencentAdsV30Configuration } from "../../config/v3/configuration";

export interface CreativeTemplatePreviewsApiGetRequest {
  data: CreativeTemplatePreviewsGetRequest;
}


export class CreativeTemplatePreviewsApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: CreativeTemplatePreviewsApiGetRequest): Promise<CreativeTemplatePreviewsGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: CreativeTemplatePreviewsApiGetRequest): Promise<ApiResponse<CreativeTemplatePreviewsGetResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<CreativeTemplatePreviewsGetResponseData>({
      method: "POST",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/creative_template_previews/get",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


