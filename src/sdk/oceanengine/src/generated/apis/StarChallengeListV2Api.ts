// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { StarChallengeListV2Response } from "../models";


export class StarChallengeListV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarChallengeListGet(starId: number, page: number, limit: number): Promise<StarChallengeListV2Response> {
    const response = await this.openApi2StarChallengeListGetWithHttpInfo(starId, page, limit);
    return response.data;
  }

  async openApi2StarChallengeListGetWithHttpInfo(starId: number, page: number, limit: number): Promise<ApiResponse<StarChallengeListV2Response>> {
    if (starId == null) {
      throw new ApiException("Missing the required parameter 'starId' when calling openApi2StarChallengeListGet");
    }
    return this.apiClient.requestWithHttpInfo<StarChallengeListV2Response>({
      method: "GET",
      path: "/open_api/2/star/challenge/list/",
      queryParams: [
        { name: "star_id", value: starId },
        { name: "page", value: page },
        { name: "limit", value: limit }
      ]
    });
  }
}


