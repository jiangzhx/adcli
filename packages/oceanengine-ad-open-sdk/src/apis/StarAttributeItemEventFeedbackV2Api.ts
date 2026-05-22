// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { StarAttributeItemEventFeedbackV2Request, StarAttributeItemEventFeedbackV2Response } from "../models";


export class StarAttributeItemEventFeedbackV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarAttributeItemEventFeedbackPost(starAttributeItemEventFeedbackV2Request: StarAttributeItemEventFeedbackV2Request): Promise<StarAttributeItemEventFeedbackV2Response> {
    const response = await this.openApi2StarAttributeItemEventFeedbackPostWithHttpInfo(starAttributeItemEventFeedbackV2Request);
    return response.data;
  }

  async openApi2StarAttributeItemEventFeedbackPostWithHttpInfo(starAttributeItemEventFeedbackV2Request: StarAttributeItemEventFeedbackV2Request): Promise<ApiResponse<StarAttributeItemEventFeedbackV2Response>> {

    return this.apiClient.requestWithHttpInfo<StarAttributeItemEventFeedbackV2Response>({
      method: "POST",
      path: "/open_api/2/star/attribute/item_event_feedback/",
      queryParams: [

      ],
      body: starAttributeItemEventFeedbackV2Request
    });
  }
}


