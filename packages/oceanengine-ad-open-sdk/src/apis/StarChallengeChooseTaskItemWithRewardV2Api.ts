// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { StarChallengeChooseTaskItemWithRewardV2Request, StarChallengeChooseTaskItemWithRewardV2Response } from "../models";


export class StarChallengeChooseTaskItemWithRewardV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarChallengeChooseTaskItemWithRewardPost(request: StarChallengeChooseTaskItemWithRewardV2Request): Promise<StarChallengeChooseTaskItemWithRewardV2Response> {
    const response = await this.openApi2StarChallengeChooseTaskItemWithRewardPostWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarChallengeChooseTaskItemWithRewardPostWithHttpInfo(request: StarChallengeChooseTaskItemWithRewardV2Request): Promise<ApiResponse<StarChallengeChooseTaskItemWithRewardV2Response>> {
    return this.apiClient.requestWithHttpInfo<StarChallengeChooseTaskItemWithRewardV2Response>({
      method: "POST",
      path: "/open_api/2/star/challenge/choose_task_item_with_reward/",
      queryParams: [

      ],
      body: request
    });
  }
}


