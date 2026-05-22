// Generated from oceanengine/ad_open_sdk_go api/api_star_attribute_item_event_feedback_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { StarAttributeItemEventFeedbackV2Request, StarAttributeItemEventFeedbackV2Response } from "../models/index";


export interface StarAttributeItemEventFeedbackV2ApiOpenApi2StarAttributeItemEventFeedbackPostRequest {
  starAttributeItemEventFeedbackV2Request?: StarAttributeItemEventFeedbackV2Request;
}

export class StarAttributeItemEventFeedbackV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarAttributeItemEventFeedbackPost(request: StarAttributeItemEventFeedbackV2ApiOpenApi2StarAttributeItemEventFeedbackPostRequest): Promise<StarAttributeItemEventFeedbackV2Response> {
    const response = await this.openApi2StarAttributeItemEventFeedbackPostWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarAttributeItemEventFeedbackPostWithHttpInfo(request: StarAttributeItemEventFeedbackV2ApiOpenApi2StarAttributeItemEventFeedbackPostRequest): Promise<ApiResponse<StarAttributeItemEventFeedbackV2Response>> {

    return this.apiClient.requestWithHttpInfo<StarAttributeItemEventFeedbackV2Response>({
      method: "POST",
      path: "/open_api/2/star/attribute/item_event_feedback/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.starAttributeItemEventFeedbackV2Request
    });
  }
}


