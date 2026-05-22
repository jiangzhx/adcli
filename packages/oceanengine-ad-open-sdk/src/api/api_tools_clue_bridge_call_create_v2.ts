// Generated from oceanengine/ad_open_sdk_go api/api_tools_clue_bridge_call_create_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsClueBridgeCallCreateV2Request, ToolsClueBridgeCallCreateV2Response } from "../models/index";


export interface ToolsClueBridgeCallCreateV2ApiOpenApi2ToolsClueBridgeCallCreatePostRequest {
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

  async openApi2ToolsClueBridgeCallCreatePost(request: ToolsClueBridgeCallCreateV2ApiOpenApi2ToolsClueBridgeCallCreatePostRequest): Promise<ToolsClueBridgeCallCreateV2Response> {
    const response = await this.openApi2ToolsClueBridgeCallCreatePostWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsClueBridgeCallCreatePostWithHttpInfo(request: ToolsClueBridgeCallCreateV2ApiOpenApi2ToolsClueBridgeCallCreatePostRequest): Promise<ApiResponse<ToolsClueBridgeCallCreateV2Response>> {

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


