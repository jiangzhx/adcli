// Generated from oceanengine/ad_open_sdk_go api/api_star_challenge_get_custom_task_data_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { StarChallengeGetCustomTaskDataV2Response } from "../models/index";


export interface StarChallengeGetCustomTaskDataV2ApiOpenApi2StarChallengeGetCustomTaskDataGetRequest {
  starId: number | string;
  challengeTaskId: number | string;
  page: number;
  pageSize: number;
}

export class StarChallengeGetCustomTaskDataV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarChallengeGetCustomTaskDataGet(request: StarChallengeGetCustomTaskDataV2ApiOpenApi2StarChallengeGetCustomTaskDataGetRequest): Promise<StarChallengeGetCustomTaskDataV2Response> {
    const response = await this.openApi2StarChallengeGetCustomTaskDataGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarChallengeGetCustomTaskDataGetWithHttpInfo(request: StarChallengeGetCustomTaskDataV2ApiOpenApi2StarChallengeGetCustomTaskDataGetRequest): Promise<ApiResponse<StarChallengeGetCustomTaskDataV2Response>> {
    if (request.starId == null) {
      throw new ApiException("Missing the required parameter 'starId' when calling openApi2StarChallengeGetCustomTaskDataGet");
    }

    if (request.challengeTaskId == null) {
      throw new ApiException("Missing the required parameter 'challengeTaskId' when calling openApi2StarChallengeGetCustomTaskDataGet");
    }

    if (request.page == null) {
      throw new ApiException("Missing the required parameter 'page' when calling openApi2StarChallengeGetCustomTaskDataGet");
    }

    if (request.pageSize == null) {
      throw new ApiException("Missing the required parameter 'pageSize' when calling openApi2StarChallengeGetCustomTaskDataGet");
    }
    return this.apiClient.requestWithHttpInfo<StarChallengeGetCustomTaskDataV2Response>({
      method: "GET",
      path: "/open_api/2/star/challenge/get_custom_task_data/",
      queryParams: [
        { name: "star_id", value: request.starId },
        { name: "challenge_task_id", value: request.challengeTaskId },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


