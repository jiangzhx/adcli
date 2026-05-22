// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsDownloadPackageGetV2Response } from "../models";


export interface OpenApi2ToolsDownloadPackageGetGetRequest {
  advertiserId?: number;
  eventId?: string;
}

export class ToolsDownloadPackageGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsDownloadPackageGetGet(request: OpenApi2ToolsDownloadPackageGetGetRequest): Promise<ToolsDownloadPackageGetV2Response> {
    const response = await this.openApi2ToolsDownloadPackageGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsDownloadPackageGetGetWithHttpInfo(request: OpenApi2ToolsDownloadPackageGetGetRequest): Promise<ApiResponse<ToolsDownloadPackageGetV2Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsDownloadPackageGetV2Response>({
      method: "GET",
      path: "/open_api/2/tools/download/package/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "event_id", value: request.eventId }
      ]
    });
  }
}


