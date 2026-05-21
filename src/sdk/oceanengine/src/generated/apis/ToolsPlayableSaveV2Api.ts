// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { ToolsPlayableSaveV2Request, ToolsPlayableSaveV2Response } from "../models";


export class ToolsPlayableSaveV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsPlayableSavePost(toolsPlayableSaveV2Request: ToolsPlayableSaveV2Request): Promise<ToolsPlayableSaveV2Response> {
    const response = await this.openApi2ToolsPlayableSavePostWithHttpInfo(toolsPlayableSaveV2Request);
    return response.data;
  }

  async openApi2ToolsPlayableSavePostWithHttpInfo(toolsPlayableSaveV2Request: ToolsPlayableSaveV2Request): Promise<ApiResponse<ToolsPlayableSaveV2Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsPlayableSaveV2Response>({
      method: "POST",
      path: "/open_api/2/tools/playable/save/",
      queryParams: [

      ],
      body: toolsPlayableSaveV2Request
    });
  }
}


