// Generated from oceanengine/ad_open_sdk_go api/api_star_demand_om_update_challenge_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { StarDemandOmUpdateChallengeV2Request, StarDemandOmUpdateChallengeV2Response } from "../models/index";


export interface StarDemandOmUpdateChallengeV2ApiOpenApi2StarDemandOmUpdateChallengePostRequest {
  starDemandOmUpdateChallengeV2Request?: StarDemandOmUpdateChallengeV2Request;
}

export class StarDemandOmUpdateChallengeV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarDemandOmUpdateChallengePost(request: StarDemandOmUpdateChallengeV2ApiOpenApi2StarDemandOmUpdateChallengePostRequest): Promise<StarDemandOmUpdateChallengeV2Response> {
    const response = await this.openApi2StarDemandOmUpdateChallengePostWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarDemandOmUpdateChallengePostWithHttpInfo(request: StarDemandOmUpdateChallengeV2ApiOpenApi2StarDemandOmUpdateChallengePostRequest): Promise<ApiResponse<StarDemandOmUpdateChallengeV2Response>> {

    return this.apiClient.requestWithHttpInfo<StarDemandOmUpdateChallengeV2Response>({
      method: "POST",
      path: "/open_api/2/star/demand/om_update_challenge/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.starDemandOmUpdateChallengeV2Request
    });
  }
}


