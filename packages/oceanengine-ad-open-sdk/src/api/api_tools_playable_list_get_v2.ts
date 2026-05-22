// Generated from oceanengine/ad_open_sdk_go api/api_tools_playable_list_get_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsPlayableListGetV2PlayableSource, ToolsPlayableListGetV2Response, ToolsPlayableListGetV2Status } from "../models/index";


export interface ToolsPlayableListGetV2ApiOpenApi2ToolsPlayableListGetGetRequest {
  advertiserId?: number | string;
  page?: number;
  pageSize?: number;
  playableSource?: ToolsPlayableListGetV2PlayableSource;
  playableUrl?: string;
  status?: ToolsPlayableListGetV2Status;
}

export class ToolsPlayableListGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsPlayableListGetGet(request: ToolsPlayableListGetV2ApiOpenApi2ToolsPlayableListGetGetRequest): Promise<ToolsPlayableListGetV2Response> {
    const response = await this.openApi2ToolsPlayableListGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsPlayableListGetGetWithHttpInfo(request: ToolsPlayableListGetV2ApiOpenApi2ToolsPlayableListGetGetRequest): Promise<ApiResponse<ToolsPlayableListGetV2Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsPlayableListGetV2Response>({
      method: "GET",
      path: "/open_api/2/tools/playable_list/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize },
        { name: "playable_source", value: request.playableSource },
        { name: "playable_url", value: request.playableUrl },
        { name: "status", value: request.status }
      ]
    });
  }
}


