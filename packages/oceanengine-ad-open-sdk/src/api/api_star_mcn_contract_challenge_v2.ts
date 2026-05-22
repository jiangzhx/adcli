// Generated from oceanengine/ad_open_sdk_go api/api_star_mcn_contract_challenge_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { StarMcnContractChallengeV2Request, StarMcnContractChallengeV2Response } from "../models/index";


export interface StarMcnContractChallengeV2ApiOpenApi2StarMcnContractChallengePostRequest {
  starMcnContractChallengeV2Request?: StarMcnContractChallengeV2Request;
}

export class StarMcnContractChallengeV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarMcnContractChallengePost(request: StarMcnContractChallengeV2ApiOpenApi2StarMcnContractChallengePostRequest): Promise<StarMcnContractChallengeV2Response> {
    const response = await this.openApi2StarMcnContractChallengePostWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarMcnContractChallengePostWithHttpInfo(request: StarMcnContractChallengeV2ApiOpenApi2StarMcnContractChallengePostRequest): Promise<ApiResponse<StarMcnContractChallengeV2Response>> {

    return this.apiClient.requestWithHttpInfo<StarMcnContractChallengeV2Response>({
      method: "POST",
      path: "/open_api/2/star/mcn/contract_challenge/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.starMcnContractChallengeV2Request
    });
  }
}


