// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { StarChallengeCancelV2Request, StarChallengeCancelV2Response } from "../models";


export interface OpenApi2StarChallengeCancelPostRequest {
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

  async openApi2StarChallengeCancelPost(request: OpenApi2StarChallengeCancelPostRequest): Promise<StarChallengeCancelV2Response> {
    const response = await this.openApi2StarChallengeCancelPostWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarChallengeCancelPostWithHttpInfo(request: OpenApi2StarChallengeCancelPostRequest): Promise<ApiResponse<StarChallengeCancelV2Response>> {

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


