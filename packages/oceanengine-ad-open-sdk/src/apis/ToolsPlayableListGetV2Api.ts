// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsPlayableListGetV2PlayableSource, ToolsPlayableListGetV2Response, ToolsPlayableListGetV2Status } from "../models";


export class ToolsPlayableListGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsPlayableListGetGet(advertiserId: number, page: number, pageSize: number, playableSource: ToolsPlayableListGetV2PlayableSource, playableUrl: string, status: ToolsPlayableListGetV2Status): Promise<ToolsPlayableListGetV2Response> {
    const response = await this.openApi2ToolsPlayableListGetGetWithHttpInfo(advertiserId, page, pageSize, playableSource, playableUrl, status);
    return response.data;
  }

  async openApi2ToolsPlayableListGetGetWithHttpInfo(advertiserId: number, page: number, pageSize: number, playableSource: ToolsPlayableListGetV2PlayableSource, playableUrl: string, status: ToolsPlayableListGetV2Status): Promise<ApiResponse<ToolsPlayableListGetV2Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsPlayableListGetV2Response>({
      method: "GET",
      path: "/open_api/2/tools/playable_list/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "page", value: page },
        { name: "page_size", value: pageSize },
        { name: "playable_source", value: playableSource },
        { name: "playable_url", value: playableUrl },
        { name: "status", value: status }
      ]
    });
  }
}


