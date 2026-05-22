// Generated from oceanengine/ad_open_sdk_go api/api_star_demand_om_get_challenge_items_data_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { StarDemandOmGetChallengeItemsDataV2Response } from "../models/index";


export interface StarDemandOmGetChallengeItemsDataV2ApiOpenApi2StarDemandOmGetChallengeItemsDataGetRequest {
  starId: number | string;
  challengeTaskId: number | string;
  page: number;
  limit: number;
  developerId?: number | string;
}

export class StarDemandOmGetChallengeItemsDataV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarDemandOmGetChallengeItemsDataGet(request: StarDemandOmGetChallengeItemsDataV2ApiOpenApi2StarDemandOmGetChallengeItemsDataGetRequest): Promise<StarDemandOmGetChallengeItemsDataV2Response> {
    const response = await this.openApi2StarDemandOmGetChallengeItemsDataGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarDemandOmGetChallengeItemsDataGetWithHttpInfo(request: StarDemandOmGetChallengeItemsDataV2ApiOpenApi2StarDemandOmGetChallengeItemsDataGetRequest): Promise<ApiResponse<StarDemandOmGetChallengeItemsDataV2Response>> {
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

    if (request.limit != null && Number(request.limit) < 0) {
      throw new ApiException("limit must be greater than 0");
    }

    if (request.limit != null && Number(request.limit) > 30) {
      throw new ApiException("limit must be less than 30");
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


