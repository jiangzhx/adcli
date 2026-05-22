// Generated from oceanengine/ad_open_sdk_go api/api_tools_star_task_title_topic_get_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsStarTaskTitleTopicGetV2Response } from "../models/index";


export interface ToolsStarTaskTitleTopicGetV2ApiOpenApi2ToolsStarTaskTitleTopicGetGetRequest {
  advertiserId: number | string;
  titleSpecifiesTopicItem: string;
}

export class ToolsStarTaskTitleTopicGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsStarTaskTitleTopicGetGet(request: ToolsStarTaskTitleTopicGetV2ApiOpenApi2ToolsStarTaskTitleTopicGetGetRequest): Promise<ToolsStarTaskTitleTopicGetV2Response> {
    const response = await this.openApi2ToolsStarTaskTitleTopicGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsStarTaskTitleTopicGetGetWithHttpInfo(request: ToolsStarTaskTitleTopicGetV2ApiOpenApi2ToolsStarTaskTitleTopicGetGetRequest): Promise<ApiResponse<ToolsStarTaskTitleTopicGetV2Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2ToolsStarTaskTitleTopicGetGet");
    }

    if (request.titleSpecifiesTopicItem == null) {
      throw new ApiException("Missing the required parameter 'titleSpecifiesTopicItem' when calling openApi2ToolsStarTaskTitleTopicGetGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsStarTaskTitleTopicGetV2Response>({
      method: "GET",
      path: "/open_api/2/tools/star_task/title_topic/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "title_specifies_topic_item", value: request.titleSpecifiesTopicItem }
      ]
    });
  }
}


