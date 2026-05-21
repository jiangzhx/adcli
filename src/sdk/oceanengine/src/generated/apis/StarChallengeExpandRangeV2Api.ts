// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { StarChallengeExpandRangeV2Request, StarChallengeExpandRangeV2Response } from "../models";


export class StarChallengeExpandRangeV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarChallengeExpandRangePost(starChallengeExpandRangeV2Request: StarChallengeExpandRangeV2Request): Promise<StarChallengeExpandRangeV2Response> {
    const response = await this.openApi2StarChallengeExpandRangePostWithHttpInfo(starChallengeExpandRangeV2Request);
    return response.data;
  }

  async openApi2StarChallengeExpandRangePostWithHttpInfo(starChallengeExpandRangeV2Request: StarChallengeExpandRangeV2Request): Promise<ApiResponse<StarChallengeExpandRangeV2Response>> {

    return this.apiClient.requestWithHttpInfo<StarChallengeExpandRangeV2Response>({
      method: "POST",
      path: "/open_api/2/star/challenge/expand_range/",
      queryParams: [

      ],
      body: starChallengeExpandRangeV2Request
    });
  }
}


