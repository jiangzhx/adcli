// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { StarChallengeItemsDataV2Response } from "../models";


export class StarChallengeItemsDataV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarChallengeItemsDataGet(starId: number, challengeTaskId: number, page: number, limit: number): Promise<StarChallengeItemsDataV2Response> {
    const response = await this.openApi2StarChallengeItemsDataGetWithHttpInfo(starId, challengeTaskId, page, limit);
    return response.data;
  }

  async openApi2StarChallengeItemsDataGetWithHttpInfo(starId: number, challengeTaskId: number, page: number, limit: number): Promise<ApiResponse<StarChallengeItemsDataV2Response>> {
    if (starId == null) {
      throw new ApiException("Missing the required parameter 'starId' when calling openApi2StarChallengeItemsDataGet");
    }

    if (challengeTaskId == null) {
      throw new ApiException("Missing the required parameter 'challengeTaskId' when calling openApi2StarChallengeItemsDataGet");
    }
    return this.apiClient.requestWithHttpInfo<StarChallengeItemsDataV2Response>({
      method: "GET",
      path: "/open_api/2/star/challenge/items_data/",
      queryParams: [
        { name: "star_id", value: starId },
        { name: "challenge_task_id", value: challengeTaskId },
        { name: "page", value: page },
        { name: "limit", value: limit }
      ]
    });
  }
}


