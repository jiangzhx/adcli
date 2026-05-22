// Generated from oceanengine/ad_open_sdk_go api/api_tools_wechat_applet_create_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsWechatAppletCreateV30Request, ToolsWechatAppletCreateV30Response } from "../models/index";


export interface ToolsWechatAppletCreateV30ApiOpenApiV30ToolsWechatAppletCreatePostRequest {
  toolsWechatAppletCreateV30Request?: ToolsWechatAppletCreateV30Request;
}

export class ToolsWechatAppletCreateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsWechatAppletCreatePost(request: ToolsWechatAppletCreateV30ApiOpenApiV30ToolsWechatAppletCreatePostRequest): Promise<ToolsWechatAppletCreateV30Response> {
    const response = await this.openApiV30ToolsWechatAppletCreatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ToolsWechatAppletCreatePostWithHttpInfo(request: ToolsWechatAppletCreateV30ApiOpenApiV30ToolsWechatAppletCreatePostRequest): Promise<ApiResponse<ToolsWechatAppletCreateV30Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsWechatAppletCreateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/tools/wechat_applet/create/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.toolsWechatAppletCreateV30Request
    });
  }
}


