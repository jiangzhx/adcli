// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { ToolsSiteCopyV2Request, ToolsSiteCopyV2Response } from "../models";


export class ToolsSiteCopyV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsSiteCopyPost(xOrangeCaller: string, toolsSiteCopyV2Request: ToolsSiteCopyV2Request): Promise<ToolsSiteCopyV2Response> {
    const response = await this.openApi2ToolsSiteCopyPostWithHttpInfo(xOrangeCaller, toolsSiteCopyV2Request);
    return response.data;
  }

  async openApi2ToolsSiteCopyPostWithHttpInfo(xOrangeCaller: string, toolsSiteCopyV2Request: ToolsSiteCopyV2Request): Promise<ApiResponse<ToolsSiteCopyV2Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsSiteCopyV2Response>({
      method: "POST",
      path: "/open_api/2/tools/site/copy/",
      queryParams: [

      ],
      body: toolsSiteCopyV2Request
    });
  }
}


