// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { StarChallengeAddBudgetV2Request, StarChallengeAddBudgetV2Response } from "../models";


export class StarChallengeAddBudgetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarChallengeAddBudgetPost(starChallengeAddBudgetV2Request: StarChallengeAddBudgetV2Request): Promise<StarChallengeAddBudgetV2Response> {
    const response = await this.openApi2StarChallengeAddBudgetPostWithHttpInfo(starChallengeAddBudgetV2Request);
    return response.data;
  }

  async openApi2StarChallengeAddBudgetPostWithHttpInfo(starChallengeAddBudgetV2Request: StarChallengeAddBudgetV2Request): Promise<ApiResponse<StarChallengeAddBudgetV2Response>> {

    return this.apiClient.requestWithHttpInfo<StarChallengeAddBudgetV2Response>({
      method: "POST",
      path: "/open_api/2/star/challenge/add_budget/",
      queryParams: [

      ],
      body: starChallengeAddBudgetV2Request
    });
  }
}


