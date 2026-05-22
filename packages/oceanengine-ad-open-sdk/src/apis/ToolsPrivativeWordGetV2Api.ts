// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsPrivativeWordGetV2Filtering, ToolsPrivativeWordGetV2Response } from "../models";


export interface OpenApi2ToolsPrivativeWordGetGetRequest {
  advertiserId?: number | string;
  filtering?: ToolsPrivativeWordGetV2Filtering;
}

export class ToolsPrivativeWordGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsPrivativeWordGetGet(request: OpenApi2ToolsPrivativeWordGetGetRequest): Promise<ToolsPrivativeWordGetV2Response> {
    const response = await this.openApi2ToolsPrivativeWordGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsPrivativeWordGetGetWithHttpInfo(request: OpenApi2ToolsPrivativeWordGetGetRequest): Promise<ApiResponse<ToolsPrivativeWordGetV2Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsPrivativeWordGetV2Response>({
      method: "GET",
      path: "/open_api/2/tools/privative_word/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "filtering", value: request.filtering }
      ]
    });
  }
}


