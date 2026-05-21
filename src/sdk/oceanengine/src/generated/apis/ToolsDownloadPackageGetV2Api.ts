// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { ToolsDownloadPackageGetV2Response } from "../models";


export class ToolsDownloadPackageGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsDownloadPackageGetGet(advertiserId: number, eventId: string): Promise<ToolsDownloadPackageGetV2Response> {
    const response = await this.openApi2ToolsDownloadPackageGetGetWithHttpInfo(advertiserId, eventId);
    return response.data;
  }

  async openApi2ToolsDownloadPackageGetGetWithHttpInfo(advertiserId: number, eventId: string): Promise<ApiResponse<ToolsDownloadPackageGetV2Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsDownloadPackageGetV2Response>({
      method: "GET",
      path: "/open_api/2/tools/download/package/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "event_id", value: eventId }
      ]
    });
  }
}


