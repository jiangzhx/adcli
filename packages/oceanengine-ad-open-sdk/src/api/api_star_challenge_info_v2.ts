// Generated from oceanengine/ad_open_sdk_go api/api_star_challenge_info_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { StarChallengeInfoV2Response } from "../models/index";


export interface StarChallengeInfoV2ApiOpenApi2StarChallengeInfoGetRequest {
  starId: number | string;
  challengeTaskIds: (number | string)[];
}

export class StarChallengeInfoV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarChallengeInfoGet(request: StarChallengeInfoV2ApiOpenApi2StarChallengeInfoGetRequest): Promise<StarChallengeInfoV2Response> {
    const response = await this.openApi2StarChallengeInfoGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarChallengeInfoGetWithHttpInfo(request: StarChallengeInfoV2ApiOpenApi2StarChallengeInfoGetRequest): Promise<ApiResponse<StarChallengeInfoV2Response>> {
    if (request.starId == null) {
      throw new ApiException("starId is required and must be specified");
    }

    if (request.challengeTaskIds == null) {
      throw new ApiException("challengeTaskIds is required and must be specified");
    }
    return this.apiClient.requestWithHttpInfo<StarChallengeInfoV2Response>({
      method: "GET",
      path: "/open_api/2/star/challenge/info/",
      queryParams: [
        { name: "star_id", value: request.starId },
        { name: "challenge_task_ids", value: request.challengeTaskIds }
      ]
    });
  }
}


