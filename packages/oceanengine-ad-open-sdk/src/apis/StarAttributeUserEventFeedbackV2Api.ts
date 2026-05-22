// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { StarAttributeUserEventFeedbackV2Request, StarAttributeUserEventFeedbackV2Response } from "../models";


export class StarAttributeUserEventFeedbackV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarAttributeUserEventFeedbackPost(starAttributeUserEventFeedbackV2Request: StarAttributeUserEventFeedbackV2Request): Promise<StarAttributeUserEventFeedbackV2Response> {
    const response = await this.openApi2StarAttributeUserEventFeedbackPostWithHttpInfo(starAttributeUserEventFeedbackV2Request);
    return response.data;
  }

  async openApi2StarAttributeUserEventFeedbackPostWithHttpInfo(starAttributeUserEventFeedbackV2Request: StarAttributeUserEventFeedbackV2Request): Promise<ApiResponse<StarAttributeUserEventFeedbackV2Response>> {

    return this.apiClient.requestWithHttpInfo<StarAttributeUserEventFeedbackV2Response>({
      method: "POST",
      path: "/open_api/2/star/attribute/user_event_feedback/",
      queryParams: [

      ],
      body: starAttributeUserEventFeedbackV2Request
    });
  }
}


