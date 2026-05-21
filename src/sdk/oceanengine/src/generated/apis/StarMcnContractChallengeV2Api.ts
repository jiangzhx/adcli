// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { StarMcnContractChallengeV2Request, StarMcnContractChallengeV2Response } from "../models";


export class StarMcnContractChallengeV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarMcnContractChallengePost(starMcnContractChallengeV2Request: StarMcnContractChallengeV2Request): Promise<StarMcnContractChallengeV2Response> {
    const response = await this.openApi2StarMcnContractChallengePostWithHttpInfo(starMcnContractChallengeV2Request);
    return response.data;
  }

  async openApi2StarMcnContractChallengePostWithHttpInfo(starMcnContractChallengeV2Request: StarMcnContractChallengeV2Request): Promise<ApiResponse<StarMcnContractChallengeV2Response>> {

    return this.apiClient.requestWithHttpInfo<StarMcnContractChallengeV2Response>({
      method: "POST",
      path: "/open_api/2/star/mcn/contract_challenge/",
      queryParams: [

      ],
      body: starMcnContractChallengeV2Request
    });
  }
}


