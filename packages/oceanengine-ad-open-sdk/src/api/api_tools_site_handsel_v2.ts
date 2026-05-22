// Generated from oceanengine/ad_open_sdk_go api/api_tools_site_handsel_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsSiteHandselV2Request, ToolsSiteHandselV2Response } from "../models/index";


export interface ToolsSiteHandselV2ApiOpenApi2ToolsSiteHandselPostRequest {
  xOrangeCaller?: string;
  toolsSiteHandselV2Request?: ToolsSiteHandselV2Request;
}

export class ToolsSiteHandselV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsSiteHandselPost(request: ToolsSiteHandselV2ApiOpenApi2ToolsSiteHandselPostRequest): Promise<ToolsSiteHandselV2Response> {
    const response = await this.openApi2ToolsSiteHandselPostWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsSiteHandselPostWithHttpInfo(request: ToolsSiteHandselV2ApiOpenApi2ToolsSiteHandselPostRequest): Promise<ApiResponse<ToolsSiteHandselV2Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsSiteHandselV2Response>({
      method: "POST",
      path: "/open_api/2/tools/site/handsel/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.toolsSiteHandselV2Request
    });
  }
}


