// Generated from oceanengine/ad_open_sdk_go api/api_star_demand_create_challenge_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { StarDemandCreateChallengeV2Request, StarDemandCreateChallengeV2Response } from "../models/index";


export interface StarDemandCreateChallengeV2ApiOpenApi2StarDemandCreateChallengePostRequest {
  starDemandCreateChallengeV2Request?: StarDemandCreateChallengeV2Request;
}

export class StarDemandCreateChallengeV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarDemandCreateChallengePost(request: StarDemandCreateChallengeV2ApiOpenApi2StarDemandCreateChallengePostRequest): Promise<StarDemandCreateChallengeV2Response> {
    const response = await this.openApi2StarDemandCreateChallengePostWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarDemandCreateChallengePostWithHttpInfo(request: StarDemandCreateChallengeV2ApiOpenApi2StarDemandCreateChallengePostRequest): Promise<ApiResponse<StarDemandCreateChallengeV2Response>> {

    return this.apiClient.requestWithHttpInfo<StarDemandCreateChallengeV2Response>({
      method: "POST",
      path: "/open_api/2/star/demand/create_challenge/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.starDemandCreateChallengeV2Request
    });
  }
}


