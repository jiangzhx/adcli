// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { ToolsVideoCoverSuggestV2Response } from "../models";


export class ToolsVideoCoverSuggestV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsVideoCoverSuggestGet(advertiserId: number, videoId: string): Promise<ToolsVideoCoverSuggestV2Response> {
    const response = await this.openApi2ToolsVideoCoverSuggestGetWithHttpInfo(advertiserId, videoId);
    return response.data;
  }

  async openApi2ToolsVideoCoverSuggestGetWithHttpInfo(advertiserId: number, videoId: string): Promise<ApiResponse<ToolsVideoCoverSuggestV2Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2ToolsVideoCoverSuggestGet");
    }

    if (videoId == null) {
      throw new ApiException("Missing the required parameter 'videoId' when calling openApi2ToolsVideoCoverSuggestGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsVideoCoverSuggestV2Response>({
      method: "GET",
      path: "/open_api/2/tools/video_cover/suggest/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "video_id", value: videoId }
      ]
    });
  }
}


