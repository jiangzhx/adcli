// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { StarDemandOmCreateChallengeV2Request, StarDemandOmCreateChallengeV2Response } from "../models";


export class StarDemandOmCreateChallengeV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarDemandOmCreateChallengePost(starDemandOmCreateChallengeV2Request: StarDemandOmCreateChallengeV2Request): Promise<StarDemandOmCreateChallengeV2Response> {
    const response = await this.openApi2StarDemandOmCreateChallengePostWithHttpInfo(starDemandOmCreateChallengeV2Request);
    return response.data;
  }

  async openApi2StarDemandOmCreateChallengePostWithHttpInfo(starDemandOmCreateChallengeV2Request: StarDemandOmCreateChallengeV2Request): Promise<ApiResponse<StarDemandOmCreateChallengeV2Response>> {

    return this.apiClient.requestWithHttpInfo<StarDemandOmCreateChallengeV2Response>({
      method: "POST",
      path: "/open_api/2/star/demand/om_create_challenge/",
      queryParams: [

      ],
      body: starDemandOmCreateChallengeV2Request
    });
  }
}


