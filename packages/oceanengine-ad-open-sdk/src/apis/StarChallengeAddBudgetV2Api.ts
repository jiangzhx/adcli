// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { StarChallengeAddBudgetV2Request, StarChallengeAddBudgetV2Response } from "../models";


export interface OpenApi2StarChallengeAddBudgetPostRequest {
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

  async openApi2StarChallengeAddBudgetPost(request: OpenApi2StarChallengeAddBudgetPostRequest): Promise<StarChallengeAddBudgetV2Response> {
    const response = await this.openApi2StarChallengeAddBudgetPostWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarChallengeAddBudgetPostWithHttpInfo(request: OpenApi2StarChallengeAddBudgetPostRequest): Promise<ApiResponse<StarChallengeAddBudgetV2Response>> {

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


