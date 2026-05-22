// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsClueInfoUpdateV2Request, ToolsClueInfoUpdateV2Response } from "../models";


export interface OpenApi2ToolsClueInfoUpdatePostRequest {
  toolsClueInfoUpdateV2Request?: ToolsClueInfoUpdateV2Request;
}

export class ToolsClueInfoUpdateV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsClueInfoUpdatePost(request: OpenApi2ToolsClueInfoUpdatePostRequest): Promise<ToolsClueInfoUpdateV2Response> {
    const response = await this.openApi2ToolsClueInfoUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsClueInfoUpdatePostWithHttpInfo(request: OpenApi2ToolsClueInfoUpdatePostRequest): Promise<ApiResponse<ToolsClueInfoUpdateV2Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsClueInfoUpdateV2Response>({
      method: "POST",
      path: "/open_api/2/tools/clue/info/update/",
      queryParams: [

      ],
      body: request.toolsClueInfoUpdateV2Request
    });
  }
}


