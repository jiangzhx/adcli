// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { ToolsWechatAppletUpdateV30Request, ToolsWechatAppletUpdateV30Response } from "../models";


export class ToolsWechatAppletUpdateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsWechatAppletUpdatePost(toolsWechatAppletUpdateV30Request: ToolsWechatAppletUpdateV30Request): Promise<ToolsWechatAppletUpdateV30Response> {
    const response = await this.openApiV30ToolsWechatAppletUpdatePostWithHttpInfo(toolsWechatAppletUpdateV30Request);
    return response.data;
  }

  async openApiV30ToolsWechatAppletUpdatePostWithHttpInfo(toolsWechatAppletUpdateV30Request: ToolsWechatAppletUpdateV30Request): Promise<ApiResponse<ToolsWechatAppletUpdateV30Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsWechatAppletUpdateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/tools/wechat_applet/update/",
      queryParams: [

      ],
      body: toolsWechatAppletUpdateV30Request
    });
  }
}


