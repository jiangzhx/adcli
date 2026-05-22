// Generated from oceanengine/ad_open_sdk_go api/api_tools_ebp_wechat_game_create_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsEbpWechatGameCreateV30Request, ToolsEbpWechatGameCreateV30Response } from "../models/index";


export interface ToolsEbpWechatGameCreateV30ApiOpenApiV30ToolsEbpWechatGameCreatePostRequest {
  toolsEbpWechatGameCreateV30Request?: ToolsEbpWechatGameCreateV30Request;
}

export class ToolsEbpWechatGameCreateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsEbpWechatGameCreatePost(request: ToolsEbpWechatGameCreateV30ApiOpenApiV30ToolsEbpWechatGameCreatePostRequest): Promise<ToolsEbpWechatGameCreateV30Response> {
    const response = await this.openApiV30ToolsEbpWechatGameCreatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ToolsEbpWechatGameCreatePostWithHttpInfo(request: ToolsEbpWechatGameCreateV30ApiOpenApiV30ToolsEbpWechatGameCreatePostRequest): Promise<ApiResponse<ToolsEbpWechatGameCreateV30Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsEbpWechatGameCreateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/tools/ebp/wechat_game/create/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.toolsEbpWechatGameCreateV30Request
    });
  }
}


