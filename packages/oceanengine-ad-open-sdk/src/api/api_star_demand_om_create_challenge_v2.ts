// Generated from oceanengine/ad_open_sdk_go api/api_star_demand_om_create_challenge_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { StarDemandOmCreateChallengeV2Request, StarDemandOmCreateChallengeV2Response } from "../models/index";


export interface StarDemandOmCreateChallengeV2ApiOpenApi2StarDemandOmCreateChallengePostRequest {
  starDemandOmCreateChallengeV2Request?: StarDemandOmCreateChallengeV2Request;
}

export class StarDemandOmCreateChallengeV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarDemandOmCreateChallengePost(request: StarDemandOmCreateChallengeV2ApiOpenApi2StarDemandOmCreateChallengePostRequest): Promise<StarDemandOmCreateChallengeV2Response> {
    const response = await this.openApi2StarDemandOmCreateChallengePostWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarDemandOmCreateChallengePostWithHttpInfo(request: StarDemandOmCreateChallengeV2ApiOpenApi2StarDemandOmCreateChallengePostRequest): Promise<ApiResponse<StarDemandOmCreateChallengeV2Response>> {

    return this.apiClient.requestWithHttpInfo<StarDemandOmCreateChallengeV2Response>({
      method: "POST",
      path: "/open_api/2/star/demand/om_create_challenge/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.starDemandOmCreateChallengeV2Request
    });
  }
}


