// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsSitePreviewV2Response } from "../models";


export interface OpenApi2ToolsSitePreviewGetRequest {
  advertiserId: number;
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

  async openApi2ToolsSitePreviewGet(request: OpenApi2ToolsSitePreviewGetRequest): Promise<ToolsSitePreviewV2Response> {
    const response = await this.openApi2ToolsSitePreviewGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsSitePreviewGetWithHttpInfo(request: OpenApi2ToolsSitePreviewGetRequest): Promise<ApiResponse<ToolsSitePreviewV2Response>> {
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


