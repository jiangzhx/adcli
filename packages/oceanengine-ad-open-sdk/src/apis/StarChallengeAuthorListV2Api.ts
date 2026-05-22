// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { StarChallengeAuthorListV2Response } from "../models";


export interface OpenApi2StarChallengeAuthorListGetRequest {
  starId: number;
  challengeTaskId: number;
  page: number;
  limit: number;
}

export class StarChallengeAuthorListV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarChallengeAuthorListGet(request: OpenApi2StarChallengeAuthorListGetRequest): Promise<StarChallengeAuthorListV2Response> {
    const response = await this.openApi2StarChallengeAuthorListGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarChallengeAuthorListGetWithHttpInfo(request: OpenApi2StarChallengeAuthorListGetRequest): Promise<ApiResponse<StarChallengeAuthorListV2Response>> {
    if (request.starId == null) {
      throw new ApiException("Missing the required parameter 'starId' when calling openApi2StarChallengeAuthorListGet");
    }

    if (request.challengeTaskId == null) {
      throw new ApiException("Missing the required parameter 'challengeTaskId' when calling openApi2StarChallengeAuthorListGet");
    }

    if (request.page == null) {
      throw new ApiException("Missing the required parameter 'page' when calling openApi2StarChallengeAuthorListGet");
    }

    if (request.limit == null) {
      throw new ApiException("Missing the required parameter 'limit' when calling openApi2StarChallengeAuthorListGet");
    }
    return this.apiClient.requestWithHttpInfo<StarChallengeAuthorListV2Response>({
      method: "GET",
      path: "/open_api/2/star/challenge/author_list/",
      queryParams: [
        { name: "star_id", value: request.starId },
        { name: "challenge_task_id", value: request.challengeTaskId },
        { name: "page", value: request.page },
        { name: "limit", value: request.limit }
      ]
    });
  }
}


