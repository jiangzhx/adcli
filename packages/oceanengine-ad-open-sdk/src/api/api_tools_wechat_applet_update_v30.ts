// Generated from oceanengine/ad_open_sdk_go api/api_tools_wechat_applet_update_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsWechatAppletUpdateV30Request, ToolsWechatAppletUpdateV30Response } from "../models/index";


export interface ToolsWechatAppletUpdateV30ApiOpenApiV30ToolsWechatAppletUpdatePostRequest {
  toolsWechatAppletUpdateV30Request?: ToolsWechatAppletUpdateV30Request;
}

export class ToolsWechatAppletUpdateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsWechatAppletUpdatePost(request: ToolsWechatAppletUpdateV30ApiOpenApiV30ToolsWechatAppletUpdatePostRequest): Promise<ToolsWechatAppletUpdateV30Response> {
    const response = await this.openApiV30ToolsWechatAppletUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ToolsWechatAppletUpdatePostWithHttpInfo(request: ToolsWechatAppletUpdateV30ApiOpenApiV30ToolsWechatAppletUpdatePostRequest): Promise<ApiResponse<ToolsWechatAppletUpdateV30Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsWechatAppletUpdateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/tools/wechat_applet/update/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.toolsWechatAppletUpdateV30Request
    });
  }
}


