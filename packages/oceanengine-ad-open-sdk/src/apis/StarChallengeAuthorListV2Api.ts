// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { StarChallengeAuthorListV2Response } from "../models";


export class StarChallengeAuthorListV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarChallengeAuthorListGet(starId: number, challengeTaskId: number, page: number, limit: number): Promise<StarChallengeAuthorListV2Response> {
    const response = await this.openApi2StarChallengeAuthorListGetWithHttpInfo(starId, challengeTaskId, page, limit);
    return response.data;
  }

  async openApi2StarChallengeAuthorListGetWithHttpInfo(starId: number, challengeTaskId: number, page: number, limit: number): Promise<ApiResponse<StarChallengeAuthorListV2Response>> {
    if (starId == null) {
      throw new ApiException("Missing the required parameter 'starId' when calling openApi2StarChallengeAuthorListGet");
    }

    if (challengeTaskId == null) {
      throw new ApiException("Missing the required parameter 'challengeTaskId' when calling openApi2StarChallengeAuthorListGet");
    }

    if (page == null) {
      throw new ApiException("Missing the required parameter 'page' when calling openApi2StarChallengeAuthorListGet");
    }

    if (limit == null) {
      throw new ApiException("Missing the required parameter 'limit' when calling openApi2StarChallengeAuthorListGet");
    }
    return this.apiClient.requestWithHttpInfo<StarChallengeAuthorListV2Response>({
      method: "GET",
      path: "/open_api/2/star/challenge/author_list/",
      queryParams: [
        { name: "star_id", value: starId },
        { name: "challenge_task_id", value: challengeTaskId },
        { name: "page", value: page },
        { name: "limit", value: limit }
      ]
    });
  }
}


