// Generated from oceanengine/ad_open_sdk_go api/api_tools_download_package_get_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsDownloadPackageGetV2Response } from "../models/index";


export interface ToolsDownloadPackageGetV2ApiOpenApi2ToolsDownloadPackageGetGetRequest {
  advertiserId?: number | string;
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

  async openApi2ToolsDownloadPackageGetGet(request: ToolsDownloadPackageGetV2ApiOpenApi2ToolsDownloadPackageGetGetRequest): Promise<ToolsDownloadPackageGetV2Response> {
    const response = await this.openApi2ToolsDownloadPackageGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsDownloadPackageGetGetWithHttpInfo(request: ToolsDownloadPackageGetV2ApiOpenApi2ToolsDownloadPackageGetGetRequest): Promise<ApiResponse<ToolsDownloadPackageGetV2Response>> {

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


