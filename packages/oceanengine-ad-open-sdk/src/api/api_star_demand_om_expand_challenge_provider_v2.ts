// Generated from oceanengine/ad_open_sdk_go api/api_star_demand_om_expand_challenge_provider_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { StarDemandOmExpandChallengeProviderV2Request, StarDemandOmExpandChallengeProviderV2Response } from "../models/index";


export interface StarDemandOmExpandChallengeProviderV2ApiOpenApi2StarDemandOmExpandChallengeProviderPostRequest {
  starDemandOmExpandChallengeProviderV2Request?: StarDemandOmExpandChallengeProviderV2Request;
}

export class StarDemandOmExpandChallengeProviderV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarDemandOmExpandChallengeProviderPost(request: StarDemandOmExpandChallengeProviderV2ApiOpenApi2StarDemandOmExpandChallengeProviderPostRequest): Promise<StarDemandOmExpandChallengeProviderV2Response> {
    const response = await this.openApi2StarDemandOmExpandChallengeProviderPostWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarDemandOmExpandChallengeProviderPostWithHttpInfo(request: StarDemandOmExpandChallengeProviderV2ApiOpenApi2StarDemandOmExpandChallengeProviderPostRequest): Promise<ApiResponse<StarDemandOmExpandChallengeProviderV2Response>> {

    return this.apiClient.requestWithHttpInfo<StarDemandOmExpandChallengeProviderV2Response>({
      method: "POST",
      path: "/open_api/2/star/demand/om_expand_challenge_provider/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.starDemandOmExpandChallengeProviderV2Request
    });
  }
}


