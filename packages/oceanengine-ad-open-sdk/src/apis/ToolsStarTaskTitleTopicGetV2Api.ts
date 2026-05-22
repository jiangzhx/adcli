// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsStarTaskTitleTopicGetV2Response } from "../models";


export interface OpenApi2ToolsStarTaskTitleTopicGetGetRequest {
  advertiserId: number;
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

  async openApi2ToolsStarTaskTitleTopicGetGet(request: OpenApi2ToolsStarTaskTitleTopicGetGetRequest): Promise<ToolsStarTaskTitleTopicGetV2Response> {
    const response = await this.openApi2ToolsStarTaskTitleTopicGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsStarTaskTitleTopicGetGetWithHttpInfo(request: OpenApi2ToolsStarTaskTitleTopicGetGetRequest): Promise<ApiResponse<ToolsStarTaskTitleTopicGetV2Response>> {
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


