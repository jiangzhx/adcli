// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { StarDemandOmExpandChallengeV2Request, StarDemandOmExpandChallengeV2Response } from "../models";


export class StarDemandOmExpandChallengeV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarDemandOmExpandChallengePost(starDemandOmExpandChallengeV2Request: StarDemandOmExpandChallengeV2Request): Promise<StarDemandOmExpandChallengeV2Response> {
    const response = await this.openApi2StarDemandOmExpandChallengePostWithHttpInfo(starDemandOmExpandChallengeV2Request);
    return response.data;
  }

  async openApi2StarDemandOmExpandChallengePostWithHttpInfo(starDemandOmExpandChallengeV2Request: StarDemandOmExpandChallengeV2Request): Promise<ApiResponse<StarDemandOmExpandChallengeV2Response>> {

    return this.apiClient.requestWithHttpInfo<StarDemandOmExpandChallengeV2Response>({
      method: "POST",
      path: "/open_api/2/star/demand/om_expand_challenge/",
      queryParams: [

      ],
      body: starDemandOmExpandChallengeV2Request
    });
  }
}


