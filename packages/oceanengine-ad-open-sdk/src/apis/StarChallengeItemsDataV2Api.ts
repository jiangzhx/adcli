// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { StarChallengeItemsDataV2Response } from "../models";


export interface OpenApi2StarChallengeItemsDataGetRequest {
  starId: number;
  challengeTaskId: number;
  page?: number;
  limit?: number;
}

export class StarChallengeItemsDataV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarChallengeItemsDataGet(request: OpenApi2StarChallengeItemsDataGetRequest): Promise<StarChallengeItemsDataV2Response> {
    const response = await this.openApi2StarChallengeItemsDataGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarChallengeItemsDataGetWithHttpInfo(request: OpenApi2StarChallengeItemsDataGetRequest): Promise<ApiResponse<StarChallengeItemsDataV2Response>> {
    if (request.starId == null) {
      throw new ApiException("Missing the required parameter 'starId' when calling openApi2StarChallengeItemsDataGet");
    }

    if (request.challengeTaskId == null) {
      throw new ApiException("Missing the required parameter 'challengeTaskId' when calling openApi2StarChallengeItemsDataGet");
    }
    return this.apiClient.requestWithHttpInfo<StarChallengeItemsDataV2Response>({
      method: "GET",
      path: "/open_api/2/star/challenge/items_data/",
      queryParams: [
        { name: "star_id", value: request.starId },
        { name: "challenge_task_id", value: request.challengeTaskId },
        { name: "page", value: request.page },
        { name: "limit", value: request.limit }
      ]
    });
  }
}


