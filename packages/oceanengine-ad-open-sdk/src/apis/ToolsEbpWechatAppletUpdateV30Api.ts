// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsEbpWechatAppletUpdateV30Request, ToolsEbpWechatAppletUpdateV30Response } from "../models";


export class ToolsEbpWechatAppletUpdateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsEbpWechatAppletUpdatePost(toolsEbpWechatAppletUpdateV30Request: ToolsEbpWechatAppletUpdateV30Request): Promise<ToolsEbpWechatAppletUpdateV30Response> {
    const response = await this.openApiV30ToolsEbpWechatAppletUpdatePostWithHttpInfo(toolsEbpWechatAppletUpdateV30Request);
    return response.data;
  }

  async openApiV30ToolsEbpWechatAppletUpdatePostWithHttpInfo(toolsEbpWechatAppletUpdateV30Request: ToolsEbpWechatAppletUpdateV30Request): Promise<ApiResponse<ToolsEbpWechatAppletUpdateV30Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsEbpWechatAppletUpdateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/tools/ebp/wechat_applet/update/",
      queryParams: [

      ],
      body: toolsEbpWechatAppletUpdateV30Request
    });
  }
}


