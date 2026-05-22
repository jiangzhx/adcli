// Generated from oceanengine/ad_open_sdk_go api/api_tools_site_copy_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsSiteCopyV2Request, ToolsSiteCopyV2Response } from "../models/index";


export interface ToolsSiteCopyV2ApiOpenApi2ToolsSiteCopyPostRequest {
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

  async openApi2ToolsSiteCopyPost(request: ToolsSiteCopyV2ApiOpenApi2ToolsSiteCopyPostRequest): Promise<ToolsSiteCopyV2Response> {
    const response = await this.openApi2ToolsSiteCopyPostWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsSiteCopyPostWithHttpInfo(request: ToolsSiteCopyV2ApiOpenApi2ToolsSiteCopyPostRequest): Promise<ApiResponse<ToolsSiteCopyV2Response>> {

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


