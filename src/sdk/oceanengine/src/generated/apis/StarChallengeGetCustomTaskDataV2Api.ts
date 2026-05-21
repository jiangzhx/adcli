// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { StarChallengeGetCustomTaskDataV2Response } from "../models";


export class StarChallengeGetCustomTaskDataV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarChallengeGetCustomTaskDataGet(starId: number, challengeTaskId: number, page: number, pageSize: number): Promise<StarChallengeGetCustomTaskDataV2Response> {
    const response = await this.openApi2StarChallengeGetCustomTaskDataGetWithHttpInfo(starId, challengeTaskId, page, pageSize);
    return response.data;
  }

  async openApi2StarChallengeGetCustomTaskDataGetWithHttpInfo(starId: number, challengeTaskId: number, page: number, pageSize: number): Promise<ApiResponse<StarChallengeGetCustomTaskDataV2Response>> {
    if (starId == null) {
      throw new ApiException("Missing the required parameter 'starId' when calling openApi2StarChallengeGetCustomTaskDataGet");
    }

    if (challengeTaskId == null) {
      throw new ApiException("Missing the required parameter 'challengeTaskId' when calling openApi2StarChallengeGetCustomTaskDataGet");
    }

    if (page == null) {
      throw new ApiException("Missing the required parameter 'page' when calling openApi2StarChallengeGetCustomTaskDataGet");
    }

    if (pageSize == null) {
      throw new ApiException("Missing the required parameter 'pageSize' when calling openApi2StarChallengeGetCustomTaskDataGet");
    }
    return this.apiClient.requestWithHttpInfo<StarChallengeGetCustomTaskDataV2Response>({
      method: "GET",
      path: "/open_api/2/star/challenge/get_custom_task_data/",
      queryParams: [
        { name: "star_id", value: starId },
        { name: "challenge_task_id", value: challengeTaskId },
        { name: "page", value: page },
        { name: "page_size", value: pageSize }
      ]
    });
  }
}


