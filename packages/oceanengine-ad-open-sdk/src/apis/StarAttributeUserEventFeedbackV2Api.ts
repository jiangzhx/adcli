// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { StarAttributeUserEventFeedbackV2Request, StarAttributeUserEventFeedbackV2Response } from "../models";


export interface OpenApi2StarAttributeUserEventFeedbackPostRequest {
  starAttributeUserEventFeedbackV2Request?: StarAttributeUserEventFeedbackV2Request;
}

export class StarAttributeUserEventFeedbackV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarAttributeUserEventFeedbackPost(request: OpenApi2StarAttributeUserEventFeedbackPostRequest): Promise<StarAttributeUserEventFeedbackV2Response> {
    const response = await this.openApi2StarAttributeUserEventFeedbackPostWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarAttributeUserEventFeedbackPostWithHttpInfo(request: OpenApi2StarAttributeUserEventFeedbackPostRequest): Promise<ApiResponse<StarAttributeUserEventFeedbackV2Response>> {

    return this.apiClient.requestWithHttpInfo<StarAttributeUserEventFeedbackV2Response>({
      method: "POST",
      path: "/open_api/2/star/attribute/user_event_feedback/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.starAttributeUserEventFeedbackV2Request
    });
  }
}


