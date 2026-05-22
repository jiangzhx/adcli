// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsWechatGameCreateV30Request, ToolsWechatGameCreateV30Response } from "../models";


export interface OpenApiV30ToolsWechatGameCreatePostRequest {
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

  async openApiV30ToolsWechatGameCreatePost(request: OpenApiV30ToolsWechatGameCreatePostRequest): Promise<ToolsWechatGameCreateV30Response> {
    const response = await this.openApiV30ToolsWechatGameCreatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ToolsWechatGameCreatePostWithHttpInfo(request: OpenApiV30ToolsWechatGameCreatePostRequest): Promise<ApiResponse<ToolsWechatGameCreateV30Response>> {

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


