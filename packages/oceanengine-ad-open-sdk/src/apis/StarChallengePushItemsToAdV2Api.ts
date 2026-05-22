// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { StarChallengePushItemsToAdV2Request, StarChallengePushItemsToAdV2Response } from "../models";


export interface OpenApi2StarChallengePushItemsToAdPostRequest {
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

  async openApi2StarChallengePushItemsToAdPost(request: OpenApi2StarChallengePushItemsToAdPostRequest): Promise<StarChallengePushItemsToAdV2Response> {
    const response = await this.openApi2StarChallengePushItemsToAdPostWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarChallengePushItemsToAdPostWithHttpInfo(request: OpenApi2StarChallengePushItemsToAdPostRequest): Promise<ApiResponse<StarChallengePushItemsToAdV2Response>> {

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


