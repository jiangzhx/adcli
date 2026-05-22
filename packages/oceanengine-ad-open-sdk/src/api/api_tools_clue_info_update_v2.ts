// Generated from oceanengine/ad_open_sdk_go api/api_tools_clue_info_update_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsClueInfoUpdateV2Request, ToolsClueInfoUpdateV2Response } from "../models/index";


export interface ToolsClueInfoUpdateV2ApiOpenApi2ToolsClueInfoUpdatePostRequest {
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

  async openApi2ToolsClueInfoUpdatePost(request: ToolsClueInfoUpdateV2ApiOpenApi2ToolsClueInfoUpdatePostRequest): Promise<ToolsClueInfoUpdateV2Response> {
    const response = await this.openApi2ToolsClueInfoUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsClueInfoUpdatePostWithHttpInfo(request: ToolsClueInfoUpdateV2ApiOpenApi2ToolsClueInfoUpdatePostRequest): Promise<ApiResponse<ToolsClueInfoUpdateV2Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsClueInfoUpdateV2Response>({
      method: "POST",
      path: "/open_api/2/tools/clue/info/update/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.toolsClueInfoUpdateV2Request
    });
  }
}


