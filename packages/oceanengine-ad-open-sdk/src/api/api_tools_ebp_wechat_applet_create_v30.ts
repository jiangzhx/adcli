// Generated from oceanengine/ad_open_sdk_go api/api_tools_ebp_wechat_applet_create_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsEbpWechatAppletCreateV30Request, ToolsEbpWechatAppletCreateV30Response } from "../models/index";


export interface ToolsEbpWechatAppletCreateV30ApiOpenApiV30ToolsEbpWechatAppletCreatePostRequest {
  toolsEbpWechatAppletCreateV30Request?: ToolsEbpWechatAppletCreateV30Request;
}

export class ToolsEbpWechatAppletCreateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsEbpWechatAppletCreatePost(request: ToolsEbpWechatAppletCreateV30ApiOpenApiV30ToolsEbpWechatAppletCreatePostRequest): Promise<ToolsEbpWechatAppletCreateV30Response> {
    const response = await this.openApiV30ToolsEbpWechatAppletCreatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ToolsEbpWechatAppletCreatePostWithHttpInfo(request: ToolsEbpWechatAppletCreateV30ApiOpenApiV30ToolsEbpWechatAppletCreatePostRequest): Promise<ApiResponse<ToolsEbpWechatAppletCreateV30Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsEbpWechatAppletCreateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/tools/ebp/wechat_applet/create/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.toolsEbpWechatAppletCreateV30Request
    });
  }
}


