// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { XijingPageByComponentsAddRequest, XijingPageByComponentsAddResponseData } from "../models";

export interface V3XijingPageByComponentsApiAddRequest {
  data: XijingPageByComponentsAddRequest;
}


export class V3XijingPageByComponentsApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async add(request: V3XijingPageByComponentsApiAddRequest): Promise<XijingPageByComponentsAddResponseData> {
    const response = await this.addWithHttpInfo(request);
    return response.data;
  }

  async addWithHttpInfo(request: V3XijingPageByComponentsApiAddRequest): Promise<ApiResponse<XijingPageByComponentsAddResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling add");
    }
    return this.apiClient.requestWithHttpInfo<XijingPageByComponentsAddResponseData>({
      method: "POST",
      path: "/xijing_page_by_components/add",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


