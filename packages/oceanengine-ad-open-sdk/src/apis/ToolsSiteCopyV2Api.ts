// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsSiteCopyV2Request, ToolsSiteCopyV2Response } from "../models";


export interface OpenApi2ToolsSiteCopyPostRequest {
  xOrangeCaller?: string;
  toolsSiteCopyV2Request?: ToolsSiteCopyV2Request;
}

export class ToolsSiteCopyV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsSiteCopyPost(request: OpenApi2ToolsSiteCopyPostRequest): Promise<ToolsSiteCopyV2Response> {
    const response = await this.openApi2ToolsSiteCopyPostWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsSiteCopyPostWithHttpInfo(request: OpenApi2ToolsSiteCopyPostRequest): Promise<ApiResponse<ToolsSiteCopyV2Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsSiteCopyV2Response>({
      method: "POST",
      path: "/open_api/2/tools/site/copy/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.toolsSiteCopyV2Request
    });
  }
}


