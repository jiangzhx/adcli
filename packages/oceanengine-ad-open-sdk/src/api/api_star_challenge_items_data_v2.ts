// Generated from oceanengine/ad_open_sdk_go api/api_star_challenge_items_data_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { StarChallengeItemsDataV2Response } from "../models/index";


export interface StarChallengeItemsDataV2ApiOpenApi2StarChallengeItemsDataGetRequest {
  starId: number | string;
  challengeTaskId: number | string;
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

  async openApi2StarChallengeItemsDataGet(request: StarChallengeItemsDataV2ApiOpenApi2StarChallengeItemsDataGetRequest): Promise<StarChallengeItemsDataV2Response> {
    const response = await this.openApi2StarChallengeItemsDataGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarChallengeItemsDataGetWithHttpInfo(request: StarChallengeItemsDataV2ApiOpenApi2StarChallengeItemsDataGetRequest): Promise<ApiResponse<StarChallengeItemsDataV2Response>> {
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


