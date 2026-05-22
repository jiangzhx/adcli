// Generated from oceanengine/ad_open_sdk_go api/api_star_challenge_author_list_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { StarChallengeAuthorListV2Response } from "../models/index";


export interface StarChallengeAuthorListV2ApiOpenApi2StarChallengeAuthorListGetRequest {
  starId: number | string;
  challengeTaskId: number | string;
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

  async openApi2StarChallengeAuthorListGet(request: StarChallengeAuthorListV2ApiOpenApi2StarChallengeAuthorListGetRequest): Promise<StarChallengeAuthorListV2Response> {
    const response = await this.openApi2StarChallengeAuthorListGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarChallengeAuthorListGetWithHttpInfo(request: StarChallengeAuthorListV2ApiOpenApi2StarChallengeAuthorListGetRequest): Promise<ApiResponse<StarChallengeAuthorListV2Response>> {
    if (request.starId == null) {
      throw new ApiException("starId is required and must be specified");
    }

    if (request.challengeTaskId == null) {
      throw new ApiException("challengeTaskId is required and must be specified");
    }

    if (request.page == null) {
      throw new ApiException("page is required and must be specified");
    }

    if (request.limit == null) {
      throw new ApiException("limit is required and must be specified");
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


