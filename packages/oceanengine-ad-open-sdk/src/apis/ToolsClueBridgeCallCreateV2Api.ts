// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsClueBridgeCallCreateV2Request, ToolsClueBridgeCallCreateV2Response } from "../models";


export interface OpenApi2ToolsClueBridgeCallCreatePostRequest {
  toolsClueBridgeCallCreateV2Request?: ToolsClueBridgeCallCreateV2Request;
}

export class ToolsClueBridgeCallCreateV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsClueBridgeCallCreatePost(request: OpenApi2ToolsClueBridgeCallCreatePostRequest): Promise<ToolsClueBridgeCallCreateV2Response> {
    const response = await this.openApi2ToolsClueBridgeCallCreatePostWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsClueBridgeCallCreatePostWithHttpInfo(request: OpenApi2ToolsClueBridgeCallCreatePostRequest): Promise<ApiResponse<ToolsClueBridgeCallCreateV2Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsClueBridgeCallCreateV2Response>({
      method: "POST",
      path: "/open_api/2/tools/clue/bridge_call/create/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.toolsClueBridgeCallCreateV2Request
    });
  }
}


