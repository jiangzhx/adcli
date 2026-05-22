// Generated from oceanengine/ad_open_sdk_go api/api_tools_ebp_wechat_applet_update_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsEbpWechatAppletUpdateV30Request, ToolsEbpWechatAppletUpdateV30Response } from "../models/index";


export interface ToolsEbpWechatAppletUpdateV30ApiOpenApiV30ToolsEbpWechatAppletUpdatePostRequest {
  toolsEbpWechatAppletUpdateV30Request?: ToolsEbpWechatAppletUpdateV30Request;
}

export class ToolsEbpWechatAppletUpdateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsEbpWechatAppletUpdatePost(request: ToolsEbpWechatAppletUpdateV30ApiOpenApiV30ToolsEbpWechatAppletUpdatePostRequest): Promise<ToolsEbpWechatAppletUpdateV30Response> {
    const response = await this.openApiV30ToolsEbpWechatAppletUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ToolsEbpWechatAppletUpdatePostWithHttpInfo(request: ToolsEbpWechatAppletUpdateV30ApiOpenApiV30ToolsEbpWechatAppletUpdatePostRequest): Promise<ApiResponse<ToolsEbpWechatAppletUpdateV30Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsEbpWechatAppletUpdateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/tools/ebp/wechat_applet/update/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.toolsEbpWechatAppletUpdateV30Request
    });
  }
}


