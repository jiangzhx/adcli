// Generated from oceanengine/ad_open_sdk_go api/api_star_challenge_choose_task_item_with_reward_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { StarChallengeChooseTaskItemWithRewardV2Request, StarChallengeChooseTaskItemWithRewardV2Response } from "../models/index";


export interface StarChallengeChooseTaskItemWithRewardV2ApiOpenApi2StarChallengeChooseTaskItemWithRewardPostRequest {
  starChallengeChooseTaskItemWithRewardV2Request?: StarChallengeChooseTaskItemWithRewardV2Request;
}

export class StarChallengeChooseTaskItemWithRewardV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarChallengeChooseTaskItemWithRewardPost(request: StarChallengeChooseTaskItemWithRewardV2ApiOpenApi2StarChallengeChooseTaskItemWithRewardPostRequest): Promise<StarChallengeChooseTaskItemWithRewardV2Response> {
    const response = await this.openApi2StarChallengeChooseTaskItemWithRewardPostWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarChallengeChooseTaskItemWithRewardPostWithHttpInfo(request: StarChallengeChooseTaskItemWithRewardV2ApiOpenApi2StarChallengeChooseTaskItemWithRewardPostRequest): Promise<ApiResponse<StarChallengeChooseTaskItemWithRewardV2Response>> {

    return this.apiClient.requestWithHttpInfo<StarChallengeChooseTaskItemWithRewardV2Response>({
      method: "POST",
      path: "/open_api/2/star/challenge/choose_task_item_with_reward/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.starChallengeChooseTaskItemWithRewardV2Request
    });
  }
}


