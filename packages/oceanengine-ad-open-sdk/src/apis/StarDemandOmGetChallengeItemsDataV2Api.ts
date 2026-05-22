// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { StarDemandOmGetChallengeItemsDataV2Response } from "../models";


export interface OpenApi2StarDemandOmGetChallengeItemsDataGetRequest {
  starId: number;
  challengeTaskId: number;
  page: number;
  limit: number;
  developerId?: number;
}

export class StarDemandOmGetChallengeItemsDataV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarDemandOmGetChallengeItemsDataGet(request: OpenApi2StarDemandOmGetChallengeItemsDataGetRequest): Promise<StarDemandOmGetChallengeItemsDataV2Response> {
    const response = await this.openApi2StarDemandOmGetChallengeItemsDataGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarDemandOmGetChallengeItemsDataGetWithHttpInfo(request: OpenApi2StarDemandOmGetChallengeItemsDataGetRequest): Promise<ApiResponse<StarDemandOmGetChallengeItemsDataV2Response>> {
    if (request.starId == null) {
      throw new ApiException("Missing the required parameter 'starId' when calling openApi2StarDemandOmGetChallengeItemsDataGet");
    }

    if (request.challengeTaskId == null) {
      throw new ApiException("Missing the required parameter 'challengeTaskId' when calling openApi2StarDemandOmGetChallengeItemsDataGet");
    }

    if (request.page == null) {
      throw new ApiException("Missing the required parameter 'page' when calling openApi2StarDemandOmGetChallengeItemsDataGet");
    }

    if (request.limit == null) {
      throw new ApiException("Missing the required parameter 'limit' when calling openApi2StarDemandOmGetChallengeItemsDataGet");
    }
    return this.apiClient.requestWithHttpInfo<StarDemandOmGetChallengeItemsDataV2Response>({
      method: "GET",
      path: "/open_api/2/star/demand/om_get_challenge_items_data/",
      queryParams: [
        { name: "star_id", value: request.starId },
        { name: "challenge_task_id", value: request.challengeTaskId },
        { name: "page", value: request.page },
        { name: "limit", value: request.limit },
        { name: "developer_id", value: request.developerId }
      ]
    });
  }
}


