// Generated from oceanengine/ad_open_sdk_go api/api_star_challenge_list_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { StarChallengeListV2Response } from "../models/index";


export interface StarChallengeListV2ApiOpenApi2StarChallengeListGetRequest {
  starId: number | string;
  page?: number;
  limit?: number;
}

export class StarChallengeListV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarChallengeListGet(request: StarChallengeListV2ApiOpenApi2StarChallengeListGetRequest): Promise<StarChallengeListV2Response> {
    const response = await this.openApi2StarChallengeListGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarChallengeListGetWithHttpInfo(request: StarChallengeListV2ApiOpenApi2StarChallengeListGetRequest): Promise<ApiResponse<StarChallengeListV2Response>> {
    if (request.starId == null) {
      throw new ApiException("starId is required and must be specified");
    }
    return this.apiClient.requestWithHttpInfo<StarChallengeListV2Response>({
      method: "GET",
      path: "/open_api/2/star/challenge/list/",
      queryParams: [
        { name: "star_id", value: request.starId },
        { name: "page", value: request.page },
        { name: "limit", value: request.limit }
      ]
    });
  }
}


