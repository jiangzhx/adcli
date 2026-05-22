// Generated from tencentad/marketing-api-go-sdk pkg/api/v3/api_dynamic_creative_previews.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { DynamicCreativePreviewsAddRequest, DynamicCreativePreviewsAddResponseData } from "../../model/v3/index";
import { DefaultConfiguration as TencentAdsV30Configuration } from "../../config/v3/configuration";

export interface DynamicCreativePreviewsApiAddRequest {
  data: DynamicCreativePreviewsAddRequest;
}


export class DynamicCreativePreviewsApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async add(request: DynamicCreativePreviewsApiAddRequest): Promise<DynamicCreativePreviewsAddResponseData> {
    const response = await this.addWithHttpInfo(request);
    return response.data;
  }

  async addWithHttpInfo(request: DynamicCreativePreviewsApiAddRequest): Promise<ApiResponse<DynamicCreativePreviewsAddResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling add");
    }
    return this.apiClient.requestWithHttpInfo<DynamicCreativePreviewsAddResponseData>({
      method: "POST",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/dynamic_creative_previews/add",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


