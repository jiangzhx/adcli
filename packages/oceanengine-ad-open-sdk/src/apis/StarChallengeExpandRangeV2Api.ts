// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { StarChallengeExpandRangeV2Request, StarChallengeExpandRangeV2Response } from "../models";


export interface OpenApi2StarChallengeExpandRangePostRequest {
  starChallengeExpandRangeV2Request?: StarChallengeExpandRangeV2Request;
}

export class StarChallengeExpandRangeV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarChallengeExpandRangePost(request: OpenApi2StarChallengeExpandRangePostRequest): Promise<StarChallengeExpandRangeV2Response> {
    const response = await this.openApi2StarChallengeExpandRangePostWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarChallengeExpandRangePostWithHttpInfo(request: OpenApi2StarChallengeExpandRangePostRequest): Promise<ApiResponse<StarChallengeExpandRangeV2Response>> {

    return this.apiClient.requestWithHttpInfo<StarChallengeExpandRangeV2Response>({
      method: "POST",
      path: "/open_api/2/star/challenge/expand_range/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.starChallengeExpandRangeV2Request
    });
  }
}


