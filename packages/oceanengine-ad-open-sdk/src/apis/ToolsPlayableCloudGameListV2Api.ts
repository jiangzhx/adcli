// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsPlayableCloudGameListV2Filtering, ToolsPlayableCloudGameListV2Response } from "../models";


export interface OpenApi2ToolsPlayableCloudGameListGetRequest {
  advertiserId?: number | string;
  filtering?: ToolsPlayableCloudGameListV2Filtering;
  page?: number;
  pageSize?: number;
}

export class ToolsPlayableCloudGameListV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsPlayableCloudGameListGet(request: OpenApi2ToolsPlayableCloudGameListGetRequest): Promise<ToolsPlayableCloudGameListV2Response> {
    const response = await this.openApi2ToolsPlayableCloudGameListGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsPlayableCloudGameListGetWithHttpInfo(request: OpenApi2ToolsPlayableCloudGameListGetRequest): Promise<ApiResponse<ToolsPlayableCloudGameListV2Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsPlayableCloudGameListV2Response>({
      method: "GET",
      path: "/open_api/2/tools/playable/cloud_game/list/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "filtering", value: request.filtering },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


