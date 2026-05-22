// Generated from oceanengine/ad_open_sdk_go api/api_star_demand_om_expand_challenge_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { StarDemandOmExpandChallengeV2Request, StarDemandOmExpandChallengeV2Response } from "../models/index";


export interface StarDemandOmExpandChallengeV2ApiOpenApi2StarDemandOmExpandChallengePostRequest {
  starDemandOmExpandChallengeV2Request?: StarDemandOmExpandChallengeV2Request;
}

export class StarDemandOmExpandChallengeV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarDemandOmExpandChallengePost(request: StarDemandOmExpandChallengeV2ApiOpenApi2StarDemandOmExpandChallengePostRequest): Promise<StarDemandOmExpandChallengeV2Response> {
    const response = await this.openApi2StarDemandOmExpandChallengePostWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarDemandOmExpandChallengePostWithHttpInfo(request: StarDemandOmExpandChallengeV2ApiOpenApi2StarDemandOmExpandChallengePostRequest): Promise<ApiResponse<StarDemandOmExpandChallengeV2Response>> {

    return this.apiClient.requestWithHttpInfo<StarDemandOmExpandChallengeV2Response>({
      method: "POST",
      path: "/open_api/2/star/demand/om_expand_challenge/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.starDemandOmExpandChallengeV2Request
    });
  }
}


