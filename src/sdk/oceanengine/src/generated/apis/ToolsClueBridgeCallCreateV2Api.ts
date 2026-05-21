// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { ToolsClueBridgeCallCreateV2Request, ToolsClueBridgeCallCreateV2Response } from "../models";


export class ToolsClueBridgeCallCreateV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsClueBridgeCallCreatePost(toolsClueBridgeCallCreateV2Request: ToolsClueBridgeCallCreateV2Request): Promise<ToolsClueBridgeCallCreateV2Response> {
    const response = await this.openApi2ToolsClueBridgeCallCreatePostWithHttpInfo(toolsClueBridgeCallCreateV2Request);
    return response.data;
  }

  async openApi2ToolsClueBridgeCallCreatePostWithHttpInfo(toolsClueBridgeCallCreateV2Request: ToolsClueBridgeCallCreateV2Request): Promise<ApiResponse<ToolsClueBridgeCallCreateV2Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsClueBridgeCallCreateV2Response>({
      method: "POST",
      path: "/open_api/2/tools/clue/bridge_call/create/",
      queryParams: [

      ],
      body: toolsClueBridgeCallCreateV2Request
    });
  }
}


