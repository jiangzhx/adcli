// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { StarDemandOmGetChallengeV2Response } from "../models";


export interface OpenApi2StarDemandOmGetChallengeGetRequest {
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

  async openApi2StarDemandOmGetChallengeGet(request: OpenApi2StarDemandOmGetChallengeGetRequest): Promise<StarDemandOmGetChallengeV2Response> {
    const response = await this.openApi2StarDemandOmGetChallengeGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarDemandOmGetChallengeGetWithHttpInfo(request: OpenApi2StarDemandOmGetChallengeGetRequest): Promise<ApiResponse<StarDemandOmGetChallengeV2Response>> {
    if (request.starId == null) {
      throw new ApiException("Missing the required parameter 'starId' when calling openApi2StarDemandOmGetChallengeGet");
    }

    if (request.challengeTaskId == null) {
      throw new ApiException("Missing the required parameter 'challengeTaskId' when calling openApi2StarDemandOmGetChallengeGet");
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


