// Generated from oceanengine/ad_open_sdk_go api/api_tools_clue_lite_contact_get_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsClueLiteContactGetV2Request, ToolsClueLiteContactGetV2Response } from "../models/index";


export interface ToolsClueLiteContactGetV2ApiOpenApi2ToolsClueLiteContactGetPostRequest {
  toolsClueLiteContactGetV2Request?: ToolsClueLiteContactGetV2Request;
}

export class ToolsClueLiteContactGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsClueLiteContactGetPost(request: ToolsClueLiteContactGetV2ApiOpenApi2ToolsClueLiteContactGetPostRequest): Promise<ToolsClueLiteContactGetV2Response> {
    const response = await this.openApi2ToolsClueLiteContactGetPostWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsClueLiteContactGetPostWithHttpInfo(request: ToolsClueLiteContactGetV2ApiOpenApi2ToolsClueLiteContactGetPostRequest): Promise<ApiResponse<ToolsClueLiteContactGetV2Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsClueLiteContactGetV2Response>({
      method: "POST",
      path: "/open_api/2/tools/clue/lite/contact/get/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.toolsClueLiteContactGetV2Request
    });
  }
}


