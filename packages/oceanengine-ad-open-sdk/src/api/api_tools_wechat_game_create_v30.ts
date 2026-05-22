// Generated from oceanengine/ad_open_sdk_go api/api_tools_wechat_game_create_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsWechatGameCreateV30Request, ToolsWechatGameCreateV30Response } from "../models/index";


export interface ToolsWechatGameCreateV30ApiOpenApiV30ToolsWechatGameCreatePostRequest {
  toolsWechatGameCreateV30Request?: ToolsWechatGameCreateV30Request;
}

export class ToolsWechatGameCreateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsWechatGameCreatePost(request: ToolsWechatGameCreateV30ApiOpenApiV30ToolsWechatGameCreatePostRequest): Promise<ToolsWechatGameCreateV30Response> {
    const response = await this.openApiV30ToolsWechatGameCreatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ToolsWechatGameCreatePostWithHttpInfo(request: ToolsWechatGameCreateV30ApiOpenApiV30ToolsWechatGameCreatePostRequest): Promise<ApiResponse<ToolsWechatGameCreateV30Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsWechatGameCreateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/tools/wechat_game/create/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.toolsWechatGameCreateV30Request
    });
  }
}


