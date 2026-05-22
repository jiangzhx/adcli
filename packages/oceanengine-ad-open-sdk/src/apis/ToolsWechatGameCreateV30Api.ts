// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsWechatGameCreateV30Request, ToolsWechatGameCreateV30Response } from "../models";


export class ToolsWechatGameCreateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsWechatGameCreatePost(toolsWechatGameCreateV30Request: ToolsWechatGameCreateV30Request): Promise<ToolsWechatGameCreateV30Response> {
    const response = await this.openApiV30ToolsWechatGameCreatePostWithHttpInfo(toolsWechatGameCreateV30Request);
    return response.data;
  }

  async openApiV30ToolsWechatGameCreatePostWithHttpInfo(toolsWechatGameCreateV30Request: ToolsWechatGameCreateV30Request): Promise<ApiResponse<ToolsWechatGameCreateV30Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsWechatGameCreateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/tools/wechat_game/create/",
      queryParams: [

      ],
      body: toolsWechatGameCreateV30Request
    });
  }
}


