// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { StarChallengeInfoV2Response } from "../models";


export class StarChallengeInfoV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarChallengeInfoGet(starId: number, challengeTaskIds: number[]): Promise<StarChallengeInfoV2Response> {
    const response = await this.openApi2StarChallengeInfoGetWithHttpInfo(starId, challengeTaskIds);
    return response.data;
  }

  async openApi2StarChallengeInfoGetWithHttpInfo(starId: number, challengeTaskIds: number[]): Promise<ApiResponse<StarChallengeInfoV2Response>> {
    if (starId == null) {
      throw new ApiException("Missing the required parameter 'starId' when calling openApi2StarChallengeInfoGet");
    }

    if (challengeTaskIds == null) {
      throw new ApiException("Missing the required parameter 'challengeTaskIds' when calling openApi2StarChallengeInfoGet");
    }
    return this.apiClient.requestWithHttpInfo<StarChallengeInfoV2Response>({
      method: "GET",
      path: "/open_api/2/star/challenge/info/",
      queryParams: [
        { name: "star_id", value: starId },
        { name: "challenge_task_ids", value: challengeTaskIds, collectionFormat: "csv" }
      ]
    });
  }
}


