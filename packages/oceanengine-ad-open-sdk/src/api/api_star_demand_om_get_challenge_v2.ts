// Generated from oceanengine/ad_open_sdk_go api/api_star_demand_om_get_challenge_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { StarDemandOmGetChallengeV2Response } from "../models/index";


export interface StarDemandOmGetChallengeV2ApiOpenApi2StarDemandOmGetChallengeGetRequest {
  starId: number | string;
  challengeTaskId: number | string;
}

export class StarDemandOmGetChallengeV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarDemandOmGetChallengeGet(request: StarDemandOmGetChallengeV2ApiOpenApi2StarDemandOmGetChallengeGetRequest): Promise<StarDemandOmGetChallengeV2Response> {
    const response = await this.openApi2StarDemandOmGetChallengeGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarDemandOmGetChallengeGetWithHttpInfo(request: StarDemandOmGetChallengeV2ApiOpenApi2StarDemandOmGetChallengeGetRequest): Promise<ApiResponse<StarDemandOmGetChallengeV2Response>> {
    if (request.starId == null) {
      throw new ApiException("starId is required and must be specified");
    }

    if (request.challengeTaskId == null) {
      throw new ApiException("challengeTaskId is required and must be specified");
    }
    return this.apiClient.requestWithHttpInfo<StarDemandOmGetChallengeV2Response>({
      method: "GET",
      path: "/open_api/2/star/demand/om_get_challenge/",
      queryParams: [
        { name: "star_id", value: request.starId },
        { name: "challenge_task_id", value: request.challengeTaskId }
      ]
    });
  }
}


