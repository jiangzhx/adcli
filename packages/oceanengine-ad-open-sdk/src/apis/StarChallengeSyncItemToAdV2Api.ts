// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { StarChallengeSyncItemToAdV2Request, StarChallengeSyncItemToAdV2Response } from "../models";


export class StarChallengeSyncItemToAdV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarChallengeSyncItemToAdPost(request: StarChallengeSyncItemToAdV2Request): Promise<StarChallengeSyncItemToAdV2Response> {
    const response = await this.openApi2StarChallengeSyncItemToAdPostWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarChallengeSyncItemToAdPostWithHttpInfo(request: StarChallengeSyncItemToAdV2Request): Promise<ApiResponse<StarChallengeSyncItemToAdV2Response>> {
    return this.apiClient.requestWithHttpInfo<StarChallengeSyncItemToAdV2Response>({
      method: "POST",
      path: "/open_api/2/star/challenge/sync_item_to_ad/",
      queryParams: [

      ],
      body: request
    });
  }
}


