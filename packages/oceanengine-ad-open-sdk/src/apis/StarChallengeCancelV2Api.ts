// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { StarChallengeCancelV2Request, StarChallengeCancelV2Response } from "../models";


export class StarChallengeCancelV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarChallengeCancelPost(starChallengeCancelV2Request: StarChallengeCancelV2Request): Promise<StarChallengeCancelV2Response> {
    const response = await this.openApi2StarChallengeCancelPostWithHttpInfo(starChallengeCancelV2Request);
    return response.data;
  }

  async openApi2StarChallengeCancelPostWithHttpInfo(starChallengeCancelV2Request: StarChallengeCancelV2Request): Promise<ApiResponse<StarChallengeCancelV2Response>> {

    return this.apiClient.requestWithHttpInfo<StarChallengeCancelV2Response>({
      method: "POST",
      path: "/open_api/2/star/challenge/cancel/",
      queryParams: [

      ],
      body: starChallengeCancelV2Request
    });
  }
}


