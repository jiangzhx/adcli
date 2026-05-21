// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { StarDemandCreateChallengeV2Request, StarDemandCreateChallengeV2Response } from "../models";


export class StarDemandCreateChallengeV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarDemandCreateChallengePost(starDemandCreateChallengeV2Request: StarDemandCreateChallengeV2Request): Promise<StarDemandCreateChallengeV2Response> {
    const response = await this.openApi2StarDemandCreateChallengePostWithHttpInfo(starDemandCreateChallengeV2Request);
    return response.data;
  }

  async openApi2StarDemandCreateChallengePostWithHttpInfo(starDemandCreateChallengeV2Request: StarDemandCreateChallengeV2Request): Promise<ApiResponse<StarDemandCreateChallengeV2Response>> {

    return this.apiClient.requestWithHttpInfo<StarDemandCreateChallengeV2Response>({
      method: "POST",
      path: "/open_api/2/star/demand/create_challenge/",
      queryParams: [

      ],
      body: starDemandCreateChallengeV2Request
    });
  }
}


