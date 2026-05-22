// Generated from oceanengine/ad_open_sdk_go api/api_star_challenge_sync_item_to_ad_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { StarChallengeSyncItemToAdV2Request, StarChallengeSyncItemToAdV2Response } from "../models/index";


export interface StarChallengeSyncItemToAdV2ApiOpenApi2StarChallengeSyncItemToAdPostRequest {
  starChallengeSyncItemToAdV2Request?: StarChallengeSyncItemToAdV2Request;
}

export class StarChallengeSyncItemToAdV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarChallengeSyncItemToAdPost(request: StarChallengeSyncItemToAdV2ApiOpenApi2StarChallengeSyncItemToAdPostRequest): Promise<StarChallengeSyncItemToAdV2Response> {
    const response = await this.openApi2StarChallengeSyncItemToAdPostWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarChallengeSyncItemToAdPostWithHttpInfo(request: StarChallengeSyncItemToAdV2ApiOpenApi2StarChallengeSyncItemToAdPostRequest): Promise<ApiResponse<StarChallengeSyncItemToAdV2Response>> {

    return this.apiClient.requestWithHttpInfo<StarChallengeSyncItemToAdV2Response>({
      method: "POST",
      path: "/open_api/2/star/challenge/sync_item_to_ad/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.starChallengeSyncItemToAdV2Request
    });
  }
}


