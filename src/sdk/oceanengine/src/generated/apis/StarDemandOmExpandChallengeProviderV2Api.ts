// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { StarDemandOmExpandChallengeProviderV2Request, StarDemandOmExpandChallengeProviderV2Response } from "../models";


export class StarDemandOmExpandChallengeProviderV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarDemandOmExpandChallengeProviderPost(starDemandOmExpandChallengeProviderV2Request: StarDemandOmExpandChallengeProviderV2Request): Promise<StarDemandOmExpandChallengeProviderV2Response> {
    const response = await this.openApi2StarDemandOmExpandChallengeProviderPostWithHttpInfo(starDemandOmExpandChallengeProviderV2Request);
    return response.data;
  }

  async openApi2StarDemandOmExpandChallengeProviderPostWithHttpInfo(starDemandOmExpandChallengeProviderV2Request: StarDemandOmExpandChallengeProviderV2Request): Promise<ApiResponse<StarDemandOmExpandChallengeProviderV2Response>> {

    return this.apiClient.requestWithHttpInfo<StarDemandOmExpandChallengeProviderV2Response>({
      method: "POST",
      path: "/open_api/2/star/demand/om_expand_challenge_provider/",
      queryParams: [

      ],
      body: starDemandOmExpandChallengeProviderV2Request
    });
  }
}


