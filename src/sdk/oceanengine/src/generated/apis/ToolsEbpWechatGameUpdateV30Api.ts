// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { ToolsEbpWechatGameUpdateV30Request, ToolsEbpWechatGameUpdateV30Response } from "../models";


export class ToolsEbpWechatGameUpdateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsEbpWechatGameUpdatePost(toolsEbpWechatGameUpdateV30Request: ToolsEbpWechatGameUpdateV30Request): Promise<ToolsEbpWechatGameUpdateV30Response> {
    const response = await this.openApiV30ToolsEbpWechatGameUpdatePostWithHttpInfo(toolsEbpWechatGameUpdateV30Request);
    return response.data;
  }

  async openApiV30ToolsEbpWechatGameUpdatePostWithHttpInfo(toolsEbpWechatGameUpdateV30Request: ToolsEbpWechatGameUpdateV30Request): Promise<ApiResponse<ToolsEbpWechatGameUpdateV30Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsEbpWechatGameUpdateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/tools/ebp/wechat_game/update/",
      queryParams: [

      ],
      body: toolsEbpWechatGameUpdateV30Request
    });
  }
}


