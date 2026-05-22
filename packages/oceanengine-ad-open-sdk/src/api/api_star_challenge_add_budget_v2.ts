// Generated from oceanengine/ad_open_sdk_go api/api_star_challenge_add_budget_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { StarChallengeAddBudgetV2Request, StarChallengeAddBudgetV2Response } from "../models/index";


export interface StarChallengeAddBudgetV2ApiOpenApi2StarChallengeAddBudgetPostRequest {
  starChallengeAddBudgetV2Request?: StarChallengeAddBudgetV2Request;
}

export class StarChallengeAddBudgetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarChallengeAddBudgetPost(request: StarChallengeAddBudgetV2ApiOpenApi2StarChallengeAddBudgetPostRequest): Promise<StarChallengeAddBudgetV2Response> {
    const response = await this.openApi2StarChallengeAddBudgetPostWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarChallengeAddBudgetPostWithHttpInfo(request: StarChallengeAddBudgetV2ApiOpenApi2StarChallengeAddBudgetPostRequest): Promise<ApiResponse<StarChallengeAddBudgetV2Response>> {

    return this.apiClient.requestWithHttpInfo<StarChallengeAddBudgetV2Response>({
      method: "POST",
      path: "/open_api/2/star/challenge/add_budget/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.starChallengeAddBudgetV2Request
    });
  }
}


