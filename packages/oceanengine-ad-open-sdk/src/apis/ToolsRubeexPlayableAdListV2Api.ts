// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsRubeexPlayableAdListV2Response } from "../models";


export interface OpenApi2ToolsRubeexPlayableAdListGetRequest {
  playableId: number;
  advertiserId: number | string;
  page?: number;
  pageSize?: number;
}

export class ToolsRubeexPlayableAdListV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsRubeexPlayableAdListGet(request: OpenApi2ToolsRubeexPlayableAdListGetRequest): Promise<ToolsRubeexPlayableAdListV2Response> {
    const response = await this.openApi2ToolsRubeexPlayableAdListGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsRubeexPlayableAdListGetWithHttpInfo(request: OpenApi2ToolsRubeexPlayableAdListGetRequest): Promise<ApiResponse<ToolsRubeexPlayableAdListV2Response>> {
    if (request.playableId == null) {
      throw new ApiException("Missing the required parameter 'playableId' when calling openApi2ToolsRubeexPlayableAdListGet");
    }

    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2ToolsRubeexPlayableAdListGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsRubeexPlayableAdListV2Response>({
      method: "GET",
      path: "/open_api/2/tools/rubeex_playable/ad_list/",
      queryParams: [
        { name: "playable_id", value: request.playableId },
        { name: "advertiser_id", value: request.advertiserId },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


