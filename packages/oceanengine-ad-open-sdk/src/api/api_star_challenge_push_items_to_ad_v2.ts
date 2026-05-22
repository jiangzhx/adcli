// Generated from oceanengine/ad_open_sdk_go api/api_star_challenge_push_items_to_ad_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { StarChallengePushItemsToAdV2Request, StarChallengePushItemsToAdV2Response } from "../models/index";


export interface StarChallengePushItemsToAdV2ApiOpenApi2StarChallengePushItemsToAdPostRequest {
  starChallengePushItemsToAdV2Request?: StarChallengePushItemsToAdV2Request;
}

export class StarChallengePushItemsToAdV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarChallengePushItemsToAdPost(request: StarChallengePushItemsToAdV2ApiOpenApi2StarChallengePushItemsToAdPostRequest): Promise<StarChallengePushItemsToAdV2Response> {
    const response = await this.openApi2StarChallengePushItemsToAdPostWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarChallengePushItemsToAdPostWithHttpInfo(request: StarChallengePushItemsToAdV2ApiOpenApi2StarChallengePushItemsToAdPostRequest): Promise<ApiResponse<StarChallengePushItemsToAdV2Response>> {

    return this.apiClient.requestWithHttpInfo<StarChallengePushItemsToAdV2Response>({
      method: "POST",
      path: "/open_api/2/star/challenge/push_items_to_ad/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.starChallengePushItemsToAdV2Request
    });
  }
}


