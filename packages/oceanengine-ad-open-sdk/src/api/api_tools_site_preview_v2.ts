// Generated from oceanengine/ad_open_sdk_go api/api_tools_site_preview_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsSitePreviewV2Response } from "../models/index";


export interface ToolsSitePreviewV2ApiOpenApi2ToolsSitePreviewGetRequest {
  advertiserId: number | string;
  siteId: string;
  xOrangeCaller?: string;
}

export class ToolsSitePreviewV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsSitePreviewGet(request: ToolsSitePreviewV2ApiOpenApi2ToolsSitePreviewGetRequest): Promise<ToolsSitePreviewV2Response> {
    const response = await this.openApi2ToolsSitePreviewGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsSitePreviewGetWithHttpInfo(request: ToolsSitePreviewV2ApiOpenApi2ToolsSitePreviewGetRequest): Promise<ApiResponse<ToolsSitePreviewV2Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2ToolsSitePreviewGet");
    }

    if (request.siteId == null) {
      throw new ApiException("Missing the required parameter 'siteId' when calling openApi2ToolsSitePreviewGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsSitePreviewV2Response>({
      method: "GET",
      path: "/open_api/2/tools/site/preview/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "site_id", value: request.siteId }
      ]
    });
  }
}


