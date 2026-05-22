// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { StarChallengeGetPushAdResultsV2Response } from "../models";


export class StarChallengeGetPushAdResultsV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarChallengeGetPushAdResultsGet(starId: number, challengeTaskId: number, itemIds: number[]): Promise<StarChallengeGetPushAdResultsV2Response> {
    const response = await this.openApi2StarChallengeGetPushAdResultsGetWithHttpInfo(starId, challengeTaskId, itemIds);
    return response.data;
  }

  async openApi2StarChallengeGetPushAdResultsGetWithHttpInfo(starId: number, challengeTaskId: number, itemIds: number[]): Promise<ApiResponse<StarChallengeGetPushAdResultsV2Response>> {
    if (starId == null) {
      throw new ApiException("Missing the required parameter 'starId' when calling openApi2StarChallengeGetPushAdResultsGet");
    }

    if (challengeTaskId == null) {
      throw new ApiException("Missing the required parameter 'challengeTaskId' when calling openApi2StarChallengeGetPushAdResultsGet");
    }

    if (itemIds == null) {
      throw new ApiException("Missing the required parameter 'itemIds' when calling openApi2StarChallengeGetPushAdResultsGet");
    }
    return this.apiClient.requestWithHttpInfo<StarChallengeGetPushAdResultsV2Response>({
      method: "GET",
      path: "/open_api/2/star/challenge/get_push_ad_results/",
      queryParams: [
        { name: "star_id", value: starId },
        { name: "challenge_task_id", value: challengeTaskId },
        { name: "item_ids", value: itemIds, collectionFormat: "csv" }
      ]
    });
  }
}


