// Generated from tencentad/marketing-api-go-sdk pkg/api/v3/api_xijing_page_by_components.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { XijingPageByComponentsAddRequest, XijingPageByComponentsAddResponseData } from "../../model/v3/index";
import { DefaultConfiguration as TencentAdsV30Configuration } from "../../config/v3/configuration";

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

  async add(request: XijingPageByComponentsApiAddRequest): Promise<XijingPageByComponentsAddResponseData> {
    const response = await this.addWithHttpInfo(request);
    return response.data;
  }

  async addWithHttpInfo(request: XijingPageByComponentsApiAddRequest): Promise<ApiResponse<XijingPageByComponentsAddResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling add");
    }
    return this.apiClient.requestWithHttpInfo<XijingPageByComponentsAddResponseData>({
      method: "POST",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/xijing_page_by_components/add",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


