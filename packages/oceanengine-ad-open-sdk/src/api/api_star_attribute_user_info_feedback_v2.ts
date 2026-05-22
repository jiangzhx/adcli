// Generated from oceanengine/ad_open_sdk_go api/api_star_attribute_user_info_feedback_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { StarAttributeUserInfoFeedbackV2Request, StarAttributeUserInfoFeedbackV2Response } from "../models/index";


export interface StarAttributeUserInfoFeedbackV2ApiOpenApi2StarAttributeUserInfoFeedbackPostRequest {
  starAttributeUserInfoFeedbackV2Request?: StarAttributeUserInfoFeedbackV2Request;
}

export class StarAttributeUserInfoFeedbackV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarAttributeUserInfoFeedbackPost(request: StarAttributeUserInfoFeedbackV2ApiOpenApi2StarAttributeUserInfoFeedbackPostRequest): Promise<StarAttributeUserInfoFeedbackV2Response> {
    const response = await this.openApi2StarAttributeUserInfoFeedbackPostWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarAttributeUserInfoFeedbackPostWithHttpInfo(request: StarAttributeUserInfoFeedbackV2ApiOpenApi2StarAttributeUserInfoFeedbackPostRequest): Promise<ApiResponse<StarAttributeUserInfoFeedbackV2Response>> {

    return this.apiClient.requestWithHttpInfo<StarAttributeUserInfoFeedbackV2Response>({
      method: "POST",
      path: "/open_api/2/star/attribute/user_info_feedback/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.starAttributeUserInfoFeedbackV2Request
    });
  }
}


