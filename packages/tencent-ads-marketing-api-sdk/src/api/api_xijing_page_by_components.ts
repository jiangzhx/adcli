// Generated from tencentad/marketing-api-go-sdk pkg/api/api_xijing_page_by_components.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { XijingPageByComponentsAddRequest } from "../model/index";
import { DefaultConfiguration as TencentAdsV13Configuration } from "../config/configuration";

export interface XijingPageByComponentsApiAddRequest {
  data: XijingPageByComponentsAddRequest;
}


export class XijingPageByComponentsApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async add(request: XijingPageByComponentsApiAddRequest): Promise<unknown> {
    const response = await this.addWithHttpInfo(request);
    return response.data;
  }

  async addWithHttpInfo(request: XijingPageByComponentsApiAddRequest): Promise<ApiResponse<unknown>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling add");
    }
    return this.apiClient.requestWithHttpInfo<unknown>({
      method: "POST",
      basePath: TencentAdsV13Configuration.basePath,
      path: "/xijing_page_by_components/add",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


