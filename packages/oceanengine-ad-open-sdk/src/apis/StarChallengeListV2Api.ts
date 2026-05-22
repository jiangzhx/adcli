// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { StarChallengeListV2Response } from "../models";


export interface OpenApi2StarChallengeListGetRequest {
  starId: number;
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

  async openApi2StarChallengeListGet(request: OpenApi2StarChallengeListGetRequest): Promise<StarChallengeListV2Response> {
    const response = await this.openApi2StarChallengeListGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarChallengeListGetWithHttpInfo(request: OpenApi2StarChallengeListGetRequest): Promise<ApiResponse<StarChallengeListV2Response>> {
    if (request.starId == null) {
      throw new ApiException("Missing the required parameter 'starId' when calling openApi2StarChallengeListGet");
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


