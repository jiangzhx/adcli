// Generated from oceanengine/ad_open_sdk_go api/api_tools_site_create_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsSiteCreateV2Request, ToolsSiteCreateV2Response } from "../models/index";


export interface ToolsSiteCreateV2ApiOpenApi2ToolsSiteCreatePostRequest {
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

  async openApi2ToolsSiteCreatePost(request: ToolsSiteCreateV2ApiOpenApi2ToolsSiteCreatePostRequest): Promise<ToolsSiteCreateV2Response> {
    const response = await this.openApi2ToolsSiteCreatePostWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsSiteCreatePostWithHttpInfo(request: ToolsSiteCreateV2ApiOpenApi2ToolsSiteCreatePostRequest): Promise<ApiResponse<ToolsSiteCreateV2Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsSiteCreateV2Response>({
      method: "POST",
      path: "/open_api/2/tools/site/create/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.toolsSiteCreateV2Request
    });
  }
}


