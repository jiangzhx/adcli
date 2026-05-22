// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { StarDemandOmGetChallengeItemsDataV2Response } from "../models";


export class StarDemandOmGetChallengeItemsDataV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarDemandOmGetChallengeItemsDataGet(starId: number, challengeTaskId: number, page: number, limit: number, developerId: number): Promise<StarDemandOmGetChallengeItemsDataV2Response> {
    const response = await this.openApi2StarDemandOmGetChallengeItemsDataGetWithHttpInfo(starId, challengeTaskId, page, limit, developerId);
    return response.data;
  }

  async openApi2StarDemandOmGetChallengeItemsDataGetWithHttpInfo(starId: number, challengeTaskId: number, page: number, limit: number, developerId: number): Promise<ApiResponse<StarDemandOmGetChallengeItemsDataV2Response>> {
    if (starId == null) {
      throw new ApiException("Missing the required parameter 'starId' when calling openApi2StarDemandOmGetChallengeItemsDataGet");
    }

    if (challengeTaskId == null) {
      throw new ApiException("Missing the required parameter 'challengeTaskId' when calling openApi2StarDemandOmGetChallengeItemsDataGet");
    }

    if (page == null) {
      throw new ApiException("Missing the required parameter 'page' when calling openApi2StarDemandOmGetChallengeItemsDataGet");
    }

    if (limit == null) {
      throw new ApiException("Missing the required parameter 'limit' when calling openApi2StarDemandOmGetChallengeItemsDataGet");
    }
    return this.apiClient.requestWithHttpInfo<StarDemandOmGetChallengeItemsDataV2Response>({
      method: "GET",
      path: "/open_api/2/star/demand/om_get_challenge_items_data/",
      queryParams: [
        { name: "star_id", value: starId },
        { name: "challenge_task_id", value: challengeTaskId },
        { name: "page", value: page },
        { name: "limit", value: limit },
        { name: "developer_id", value: developerId }
      ]
    });
  }
}


