// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsStarTaskTitleTopicGetV2Response } from "../models";


export class ToolsStarTaskTitleTopicGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsStarTaskTitleTopicGetGet(advertiserId: number, titleSpecifiesTopicItem: string): Promise<ToolsStarTaskTitleTopicGetV2Response> {
    const response = await this.openApi2ToolsStarTaskTitleTopicGetGetWithHttpInfo(advertiserId, titleSpecifiesTopicItem);
    return response.data;
  }

  async openApi2ToolsStarTaskTitleTopicGetGetWithHttpInfo(advertiserId: number, titleSpecifiesTopicItem: string): Promise<ApiResponse<ToolsStarTaskTitleTopicGetV2Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2ToolsStarTaskTitleTopicGetGet");
    }

    if (titleSpecifiesTopicItem == null) {
      throw new ApiException("Missing the required parameter 'titleSpecifiesTopicItem' when calling openApi2ToolsStarTaskTitleTopicGetGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsStarTaskTitleTopicGetV2Response>({
      method: "GET",
      path: "/open_api/2/tools/star_task/title_topic/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "title_specifies_topic_item", value: titleSpecifiesTopicItem }
      ]
    });
  }
}


