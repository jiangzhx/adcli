// Generated from oceanengine/ad_open_sdk_go api/api_star_challenge_cancel_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { StarChallengeCancelV2Request, StarChallengeCancelV2Response } from "../models/index";


export interface StarChallengeCancelV2ApiOpenApi2StarChallengeCancelPostRequest {
  starChallengeCancelV2Request?: StarChallengeCancelV2Request;
}

export class StarChallengeCancelV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarChallengeCancelPost(request: StarChallengeCancelV2ApiOpenApi2StarChallengeCancelPostRequest): Promise<StarChallengeCancelV2Response> {
    const response = await this.openApi2StarChallengeCancelPostWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarChallengeCancelPostWithHttpInfo(request: StarChallengeCancelV2ApiOpenApi2StarChallengeCancelPostRequest): Promise<ApiResponse<StarChallengeCancelV2Response>> {

    return this.apiClient.requestWithHttpInfo<StarChallengeCancelV2Response>({
      method: "POST",
      path: "/open_api/2/star/challenge/cancel/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.starChallengeCancelV2Request
    });
  }
}


