// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { StarDemandOmUpdateChallengeV2Request, StarDemandOmUpdateChallengeV2Response } from "../models";


export class StarDemandOmUpdateChallengeV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarDemandOmUpdateChallengePost(request: StarDemandOmUpdateChallengeV2Request): Promise<StarDemandOmUpdateChallengeV2Response> {
    const response = await this.openApi2StarDemandOmUpdateChallengePostWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarDemandOmUpdateChallengePostWithHttpInfo(request: StarDemandOmUpdateChallengeV2Request): Promise<ApiResponse<StarDemandOmUpdateChallengeV2Response>> {
    return this.apiClient.requestWithHttpInfo<StarDemandOmUpdateChallengeV2Response>({
      method: "POST",
      path: "/open_api/2/star/demand/om_update_challenge/",
      queryParams: [

      ],
      body: request
    });
  }
}


