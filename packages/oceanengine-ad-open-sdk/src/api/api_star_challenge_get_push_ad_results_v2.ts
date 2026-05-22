// Generated from oceanengine/ad_open_sdk_go api/api_star_challenge_get_push_ad_results_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { StarChallengeGetPushAdResultsV2Response } from "../models/index";


export interface StarChallengeGetPushAdResultsV2ApiOpenApi2StarChallengeGetPushAdResultsGetRequest {
  starId: number | string;
  challengeTaskId: number | string;
  itemIds: (number | string)[];
}

export class StarChallengeGetPushAdResultsV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarChallengeGetPushAdResultsGet(request: StarChallengeGetPushAdResultsV2ApiOpenApi2StarChallengeGetPushAdResultsGetRequest): Promise<StarChallengeGetPushAdResultsV2Response> {
    const response = await this.openApi2StarChallengeGetPushAdResultsGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarChallengeGetPushAdResultsGetWithHttpInfo(request: StarChallengeGetPushAdResultsV2ApiOpenApi2StarChallengeGetPushAdResultsGetRequest): Promise<ApiResponse<StarChallengeGetPushAdResultsV2Response>> {
    if (request.starId == null) {
      throw new ApiException("starId is required and must be specified");
    }

    if (request.challengeTaskId == null) {
      throw new ApiException("challengeTaskId is required and must be specified");
    }

    if (request.itemIds == null) {
      throw new ApiException("itemIds is required and must be specified");
    }
    return this.apiClient.requestWithHttpInfo<StarChallengeGetPushAdResultsV2Response>({
      method: "GET",
      path: "/open_api/2/star/challenge/get_push_ad_results/",
      queryParams: [
        { name: "star_id", value: request.starId },
        { name: "challenge_task_id", value: request.challengeTaskId },
        { name: "item_ids", value: request.itemIds }
      ]
    });
  }
}


