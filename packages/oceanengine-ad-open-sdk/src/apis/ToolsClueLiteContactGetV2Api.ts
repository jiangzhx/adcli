// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsClueLiteContactGetV2Request, ToolsClueLiteContactGetV2Response } from "../models";


export class ToolsClueLiteContactGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsClueLiteContactGetPost(request: ToolsClueLiteContactGetV2Request): Promise<ToolsClueLiteContactGetV2Response> {
    const response = await this.openApi2ToolsClueLiteContactGetPostWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsClueLiteContactGetPostWithHttpInfo(request: ToolsClueLiteContactGetV2Request): Promise<ApiResponse<ToolsClueLiteContactGetV2Response>> {
    return this.apiClient.requestWithHttpInfo<ToolsClueLiteContactGetV2Response>({
      method: "POST",
      path: "/open_api/2/tools/clue/lite/contact/get/",
      queryParams: [

      ],
      body: request
    });
  }
}


