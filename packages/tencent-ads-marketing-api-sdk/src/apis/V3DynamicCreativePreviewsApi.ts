// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { DynamicCreativePreviewsAddRequest, DynamicCreativePreviewsAddResponseData } from "../models";

export interface V3DynamicCreativePreviewsApiAddRequest {
  data: DynamicCreativePreviewsAddRequest;
}


export class V3DynamicCreativePreviewsApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async add(request: V3DynamicCreativePreviewsApiAddRequest): Promise<DynamicCreativePreviewsAddResponseData> {
    const response = await this.addWithHttpInfo(request);
    return response.data;
  }

  async addWithHttpInfo(request: V3DynamicCreativePreviewsApiAddRequest): Promise<ApiResponse<DynamicCreativePreviewsAddResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling add");
    }
    return this.apiClient.requestWithHttpInfo<DynamicCreativePreviewsAddResponseData>({
      method: "POST",
      path: "/dynamic_creative_previews/add",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


