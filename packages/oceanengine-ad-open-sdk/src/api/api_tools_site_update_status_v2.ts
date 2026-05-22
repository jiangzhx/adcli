// Generated from oceanengine/ad_open_sdk_go api/api_tools_site_update_status_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsSiteUpdateStatusV2Request, ToolsSiteUpdateStatusV2Response } from "../models/index";


export interface ToolsSiteUpdateStatusV2ApiOpenApi2ToolsSiteUpdateStatusPostRequest {
  xOrangeCaller?: string;
  toolsSiteUpdateStatusV2Request?: ToolsSiteUpdateStatusV2Request;
}

export class ToolsSiteUpdateStatusV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsSiteUpdateStatusPost(request: ToolsSiteUpdateStatusV2ApiOpenApi2ToolsSiteUpdateStatusPostRequest): Promise<ToolsSiteUpdateStatusV2Response> {
    const response = await this.openApi2ToolsSiteUpdateStatusPostWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsSiteUpdateStatusPostWithHttpInfo(request: ToolsSiteUpdateStatusV2ApiOpenApi2ToolsSiteUpdateStatusPostRequest): Promise<ApiResponse<ToolsSiteUpdateStatusV2Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsSiteUpdateStatusV2Response>({
      method: "POST",
      path: "/open_api/2/tools/site/update_status/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.toolsSiteUpdateStatusV2Request
    });
  }
}


