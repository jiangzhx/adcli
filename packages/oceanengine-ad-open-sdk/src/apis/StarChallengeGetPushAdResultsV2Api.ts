// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { StarChallengeGetPushAdResultsV2Response } from "../models";


export interface OpenApi2StarChallengeGetPushAdResultsGetRequest {
  starId: number | string;
  challengeTaskId: number | string;
  itemIds: number | string[];
}

export class StarChallengeGetPushAdResultsV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarChallengeGetPushAdResultsGet(request: OpenApi2StarChallengeGetPushAdResultsGetRequest): Promise<StarChallengeGetPushAdResultsV2Response> {
    const response = await this.openApi2StarChallengeGetPushAdResultsGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarChallengeGetPushAdResultsGetWithHttpInfo(request: OpenApi2StarChallengeGetPushAdResultsGetRequest): Promise<ApiResponse<StarChallengeGetPushAdResultsV2Response>> {
    if (request.starId == null) {
      throw new ApiException("Missing the required parameter 'starId' when calling openApi2StarChallengeGetPushAdResultsGet");
    }

    if (request.challengeTaskId == null) {
      throw new ApiException("Missing the required parameter 'challengeTaskId' when calling openApi2StarChallengeGetPushAdResultsGet");
    }

    if (request.itemIds == null) {
      throw new ApiException("Missing the required parameter 'itemIds' when calling openApi2StarChallengeGetPushAdResultsGet");
    }
    return this.apiClient.requestWithHttpInfo<StarChallengeGetPushAdResultsV2Response>({
      method: "GET",
      path: "/open_api/2/star/challenge/get_push_ad_results/",
      queryParams: [
        { name: "star_id", value: request.starId },
        { name: "challenge_task_id", value: request.challengeTaskId },
        { name: "item_ids", value: request.itemIds, collectionFormat: "csv" }
      ]
    });
  }
}


