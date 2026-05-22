// Generated from oceanengine/ad_open_sdk_go api/api_tools_site_update_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsSiteUpdateV2Request, ToolsSiteUpdateV2Response } from "../models/index";


export interface ToolsSiteUpdateV2ApiOpenApi2ToolsSiteUpdatePostRequest {
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

  async openApi2ToolsSiteUpdatePost(request: ToolsSiteUpdateV2ApiOpenApi2ToolsSiteUpdatePostRequest): Promise<ToolsSiteUpdateV2Response> {
    const response = await this.openApi2ToolsSiteUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsSiteUpdatePostWithHttpInfo(request: ToolsSiteUpdateV2ApiOpenApi2ToolsSiteUpdatePostRequest): Promise<ApiResponse<ToolsSiteUpdateV2Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsSiteUpdateV2Response>({
      method: "POST",
      path: "/open_api/2/tools/site/update/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.toolsSiteUpdateV2Request
    });
  }
}


