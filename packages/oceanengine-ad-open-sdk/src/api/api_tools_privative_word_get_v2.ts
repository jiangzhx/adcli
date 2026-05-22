// Generated from oceanengine/ad_open_sdk_go api/api_tools_privative_word_get_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsPrivativeWordGetV2Filtering, ToolsPrivativeWordGetV2Response } from "../models/index";


export interface ToolsPrivativeWordGetV2ApiOpenApi2ToolsPrivativeWordGetGetRequest {
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

  async openApi2ToolsPrivativeWordGetGet(request: ToolsPrivativeWordGetV2ApiOpenApi2ToolsPrivativeWordGetGetRequest): Promise<ToolsPrivativeWordGetV2Response> {
    const response = await this.openApi2ToolsPrivativeWordGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsPrivativeWordGetGetWithHttpInfo(request: ToolsPrivativeWordGetV2ApiOpenApi2ToolsPrivativeWordGetGetRequest): Promise<ApiResponse<ToolsPrivativeWordGetV2Response>> {

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


