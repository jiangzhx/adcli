// Generated from oceanengine/ad_open_sdk_go api/api_tools_rubeex_playable_ad_list_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsRubeexPlayableAdListV2Response } from "../models/index";


export interface ToolsRubeexPlayableAdListV2ApiOpenApi2ToolsRubeexPlayableAdListGetRequest {
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

  async openApi2ToolsRubeexPlayableAdListGet(request: ToolsRubeexPlayableAdListV2ApiOpenApi2ToolsRubeexPlayableAdListGetRequest): Promise<ToolsRubeexPlayableAdListV2Response> {
    const response = await this.openApi2ToolsRubeexPlayableAdListGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsRubeexPlayableAdListGetWithHttpInfo(request: ToolsRubeexPlayableAdListV2ApiOpenApi2ToolsRubeexPlayableAdListGetRequest): Promise<ApiResponse<ToolsRubeexPlayableAdListV2Response>> {
    if (request.playableId == null) {
      throw new ApiException("playableId is required and must be specified");
    }

    if (request.advertiserId == null) {
      throw new ApiException("advertiserId is required and must be specified");
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


