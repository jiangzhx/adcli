// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsWechatAppletCreateV30Request, ToolsWechatAppletCreateV30Response } from "../models";


export class ToolsWechatAppletCreateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsWechatAppletCreatePost(request: ToolsWechatAppletCreateV30Request): Promise<ToolsWechatAppletCreateV30Response> {
    const response = await this.openApiV30ToolsWechatAppletCreatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ToolsWechatAppletCreatePostWithHttpInfo(request: ToolsWechatAppletCreateV30Request): Promise<ApiResponse<ToolsWechatAppletCreateV30Response>> {
    return this.apiClient.requestWithHttpInfo<ToolsWechatAppletCreateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/tools/wechat_applet/create/",
      queryParams: [

      ],
      body: request
    });
  }
}


