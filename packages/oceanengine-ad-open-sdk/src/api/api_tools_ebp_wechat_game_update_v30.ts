// Generated from oceanengine/ad_open_sdk_go api/api_tools_ebp_wechat_game_update_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsEbpWechatGameUpdateV30Request, ToolsEbpWechatGameUpdateV30Response } from "../models/index";


export interface ToolsEbpWechatGameUpdateV30ApiOpenApiV30ToolsEbpWechatGameUpdatePostRequest {
  toolsEbpWechatGameUpdateV30Request?: ToolsEbpWechatGameUpdateV30Request;
}

export class ToolsEbpWechatGameUpdateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsEbpWechatGameUpdatePost(request: ToolsEbpWechatGameUpdateV30ApiOpenApiV30ToolsEbpWechatGameUpdatePostRequest): Promise<ToolsEbpWechatGameUpdateV30Response> {
    const response = await this.openApiV30ToolsEbpWechatGameUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ToolsEbpWechatGameUpdatePostWithHttpInfo(request: ToolsEbpWechatGameUpdateV30ApiOpenApiV30ToolsEbpWechatGameUpdatePostRequest): Promise<ApiResponse<ToolsEbpWechatGameUpdateV30Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsEbpWechatGameUpdateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/tools/ebp/wechat_game/update/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.toolsEbpWechatGameUpdateV30Request
    });
  }
}


