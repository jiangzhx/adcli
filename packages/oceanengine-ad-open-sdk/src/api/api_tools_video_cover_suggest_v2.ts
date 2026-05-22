// Generated from oceanengine/ad_open_sdk_go api/api_tools_video_cover_suggest_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsVideoCoverSuggestV2Response } from "../models/index";


export interface ToolsVideoCoverSuggestV2ApiOpenApi2ToolsVideoCoverSuggestGetRequest {
  advertiserId: number | string;
  videoId: string;
}

export class ToolsVideoCoverSuggestV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsVideoCoverSuggestGet(request: ToolsVideoCoverSuggestV2ApiOpenApi2ToolsVideoCoverSuggestGetRequest): Promise<ToolsVideoCoverSuggestV2Response> {
    const response = await this.openApi2ToolsVideoCoverSuggestGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsVideoCoverSuggestGetWithHttpInfo(request: ToolsVideoCoverSuggestV2ApiOpenApi2ToolsVideoCoverSuggestGetRequest): Promise<ApiResponse<ToolsVideoCoverSuggestV2Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("advertiserId is required and must be specified");
    }

    if (request.videoId == null) {
      throw new ApiException("videoId is required and must be specified");
    }
    return this.apiClient.requestWithHttpInfo<ToolsVideoCoverSuggestV2Response>({
      method: "GET",
      path: "/open_api/2/tools/video_cover/suggest/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "video_id", value: request.videoId }
      ]
    });
  }
}


