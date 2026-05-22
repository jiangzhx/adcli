// Generated from oceanengine/ad_open_sdk_go api/api_tools_ad_raise_status_get_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsAdRaiseStatusGetV2Response } from "../models/index";


export interface ToolsAdRaiseStatusGetV2ApiOpenApi2ToolsAdRaiseStatusGetGetRequest {
  adIds?: (number | string)[];
  advertiserId?: number | string;
}

export class ToolsAdRaiseStatusGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsAdRaiseStatusGetGet(request: ToolsAdRaiseStatusGetV2ApiOpenApi2ToolsAdRaiseStatusGetGetRequest): Promise<ToolsAdRaiseStatusGetV2Response> {
    const response = await this.openApi2ToolsAdRaiseStatusGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsAdRaiseStatusGetGetWithHttpInfo(request: ToolsAdRaiseStatusGetV2ApiOpenApi2ToolsAdRaiseStatusGetGetRequest): Promise<ApiResponse<ToolsAdRaiseStatusGetV2Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsAdRaiseStatusGetV2Response>({
      method: "GET",
      path: "/open_api/2/tools/ad_raise_status/get/",
      queryParams: [
        { name: "ad_ids", value: request.adIds },
        { name: "advertiser_id", value: request.advertiserId }
      ]
    });
  }
}


