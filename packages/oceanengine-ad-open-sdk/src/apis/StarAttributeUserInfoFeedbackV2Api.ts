// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { StarAttributeUserInfoFeedbackV2Request, StarAttributeUserInfoFeedbackV2Response } from "../models";


export class StarAttributeUserInfoFeedbackV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarAttributeUserInfoFeedbackPost(request: StarAttributeUserInfoFeedbackV2Request): Promise<StarAttributeUserInfoFeedbackV2Response> {
    const response = await this.openApi2StarAttributeUserInfoFeedbackPostWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarAttributeUserInfoFeedbackPostWithHttpInfo(request: StarAttributeUserInfoFeedbackV2Request): Promise<ApiResponse<StarAttributeUserInfoFeedbackV2Response>> {
    return this.apiClient.requestWithHttpInfo<StarAttributeUserInfoFeedbackV2Response>({
      method: "POST",
      path: "/open_api/2/star/attribute/user_info_feedback/",
      queryParams: [

      ],
      body: request
    });
  }
}


