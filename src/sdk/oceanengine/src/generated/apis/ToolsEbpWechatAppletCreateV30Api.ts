// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { ToolsEbpWechatAppletCreateV30Request, ToolsEbpWechatAppletCreateV30Response } from "../models";


export class ToolsEbpWechatAppletCreateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsEbpWechatAppletCreatePost(toolsEbpWechatAppletCreateV30Request: ToolsEbpWechatAppletCreateV30Request): Promise<ToolsEbpWechatAppletCreateV30Response> {
    const response = await this.openApiV30ToolsEbpWechatAppletCreatePostWithHttpInfo(toolsEbpWechatAppletCreateV30Request);
    return response.data;
  }

  async openApiV30ToolsEbpWechatAppletCreatePostWithHttpInfo(toolsEbpWechatAppletCreateV30Request: ToolsEbpWechatAppletCreateV30Request): Promise<ApiResponse<ToolsEbpWechatAppletCreateV30Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsEbpWechatAppletCreateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/tools/ebp/wechat_applet/create/",
      queryParams: [

      ],
      body: toolsEbpWechatAppletCreateV30Request
    });
  }
}


