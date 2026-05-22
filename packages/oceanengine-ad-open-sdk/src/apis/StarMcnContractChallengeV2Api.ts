// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { StarMcnContractChallengeV2Request, StarMcnContractChallengeV2Response } from "../models";


export interface OpenApi2StarMcnContractChallengePostRequest {
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

  async openApi2StarMcnContractChallengePost(request: OpenApi2StarMcnContractChallengePostRequest): Promise<StarMcnContractChallengeV2Response> {
    const response = await this.openApi2StarMcnContractChallengePostWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarMcnContractChallengePostWithHttpInfo(request: OpenApi2StarMcnContractChallengePostRequest): Promise<ApiResponse<StarMcnContractChallengeV2Response>> {

    return this.apiClient.requestWithHttpInfo<StarMcnContractChallengeV2Response>({
      method: "POST",
      path: "/open_api/2/star/mcn/contract_challenge/",
      queryParams: [

      ],
      body: request.starMcnContractChallengeV2Request
    });
  }
}


