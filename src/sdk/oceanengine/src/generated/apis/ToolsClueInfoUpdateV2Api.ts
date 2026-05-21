// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { ToolsClueInfoUpdateV2Request, ToolsClueInfoUpdateV2Response } from "../models";


export class ToolsClueInfoUpdateV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsClueInfoUpdatePost(toolsClueInfoUpdateV2Request: ToolsClueInfoUpdateV2Request): Promise<ToolsClueInfoUpdateV2Response> {
    const response = await this.openApi2ToolsClueInfoUpdatePostWithHttpInfo(toolsClueInfoUpdateV2Request);
    return response.data;
  }

  async openApi2ToolsClueInfoUpdatePostWithHttpInfo(toolsClueInfoUpdateV2Request: ToolsClueInfoUpdateV2Request): Promise<ApiResponse<ToolsClueInfoUpdateV2Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsClueInfoUpdateV2Response>({
      method: "POST",
      path: "/open_api/2/tools/clue/info/update/",
      queryParams: [

      ],
      body: toolsClueInfoUpdateV2Request
    });
  }
}


