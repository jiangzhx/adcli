// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsRubeexPlayableAdListV2Response } from "../models";


export class ToolsRubeexPlayableAdListV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsRubeexPlayableAdListGet(playableId: number, advertiserId: number, page: number, pageSize: number): Promise<ToolsRubeexPlayableAdListV2Response> {
    const response = await this.openApi2ToolsRubeexPlayableAdListGetWithHttpInfo(playableId, advertiserId, page, pageSize);
    return response.data;
  }

  async openApi2ToolsRubeexPlayableAdListGetWithHttpInfo(playableId: number, advertiserId: number, page: number, pageSize: number): Promise<ApiResponse<ToolsRubeexPlayableAdListV2Response>> {
    if (playableId == null) {
      throw new ApiException("Missing the required parameter 'playableId' when calling openApi2ToolsRubeexPlayableAdListGet");
    }

    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2ToolsRubeexPlayableAdListGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsRubeexPlayableAdListV2Response>({
      method: "GET",
      path: "/open_api/2/tools/rubeex_playable/ad_list/",
      queryParams: [
        { name: "playable_id", value: playableId },
        { name: "advertiser_id", value: advertiserId },
        { name: "page", value: page },
        { name: "page_size", value: pageSize }
      ]
    });
  }
}


