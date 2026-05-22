// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsSiteCreateV2Request, ToolsSiteCreateV2Response } from "../models";


export interface OpenApi2ToolsSiteCreatePostRequest {
  xOrangeCaller?: string;
  toolsSiteCreateV2Request?: ToolsSiteCreateV2Request;
}

export class ToolsSiteCreateV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsSiteCreatePost(request: OpenApi2ToolsSiteCreatePostRequest): Promise<ToolsSiteCreateV2Response> {
    const response = await this.openApi2ToolsSiteCreatePostWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsSiteCreatePostWithHttpInfo(request: OpenApi2ToolsSiteCreatePostRequest): Promise<ApiResponse<ToolsSiteCreateV2Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsSiteCreateV2Response>({
      method: "POST",
      path: "/open_api/2/tools/site/create/",
      queryParams: [

      ],
      body: request.toolsSiteCreateV2Request
    });
  }
}


