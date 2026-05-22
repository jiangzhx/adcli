// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { CreativeTemplatePreviewsGetRequest, CreativeTemplatePreviewsGetResponseData } from "../models";

export interface V3CreativeTemplatePreviewsApiGetRequest {
  data: CreativeTemplatePreviewsGetRequest;
}


export class V3CreativeTemplatePreviewsApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: V3CreativeTemplatePreviewsApiGetRequest): Promise<CreativeTemplatePreviewsGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: V3CreativeTemplatePreviewsApiGetRequest): Promise<ApiResponse<CreativeTemplatePreviewsGetResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<CreativeTemplatePreviewsGetResponseData>({
      method: "POST",
      path: "/creative_template_previews/get",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


