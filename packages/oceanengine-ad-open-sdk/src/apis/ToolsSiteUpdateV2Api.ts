// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsSiteUpdateV2Request, ToolsSiteUpdateV2Response } from "../models";


export interface OpenApi2ToolsSiteUpdatePostRequest {
  xOrangeCaller?: string;
  toolsSiteUpdateV2Request?: ToolsSiteUpdateV2Request;
}

export class ToolsSiteUpdateV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsSiteUpdatePost(request: OpenApi2ToolsSiteUpdatePostRequest): Promise<ToolsSiteUpdateV2Response> {
    const response = await this.openApi2ToolsSiteUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsSiteUpdatePostWithHttpInfo(request: OpenApi2ToolsSiteUpdatePostRequest): Promise<ApiResponse<ToolsSiteUpdateV2Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsSiteUpdateV2Response>({
      method: "POST",
      path: "/open_api/2/tools/site/update/",
      queryParams: [

      ],
      body: request.toolsSiteUpdateV2Request
    });
  }
}


