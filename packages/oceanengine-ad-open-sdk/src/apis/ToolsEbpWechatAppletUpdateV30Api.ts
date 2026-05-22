// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsEbpWechatAppletUpdateV30Request, ToolsEbpWechatAppletUpdateV30Response } from "../models";


export interface OpenApiV30ToolsEbpWechatAppletUpdatePostRequest {
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

  async openApiV30ToolsEbpWechatAppletUpdatePost(request: OpenApiV30ToolsEbpWechatAppletUpdatePostRequest): Promise<ToolsEbpWechatAppletUpdateV30Response> {
    const response = await this.openApiV30ToolsEbpWechatAppletUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ToolsEbpWechatAppletUpdatePostWithHttpInfo(request: OpenApiV30ToolsEbpWechatAppletUpdatePostRequest): Promise<ApiResponse<ToolsEbpWechatAppletUpdateV30Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsEbpWechatAppletUpdateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/tools/ebp/wechat_applet/update/",
      queryParams: [

      ],
      body: request.toolsEbpWechatAppletUpdateV30Request
    });
  }
}


