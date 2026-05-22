// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { StarMcnGetContractedChallengeUrlV2Response } from "../models";


export interface OpenApi2StarMcnGetContractedChallengeUrlGetRequest {
  starId: number | string;
  demandId: number | string;
  channelId?: string;
  developerId?: number | string;
}

export class StarMcnGetContractedChallengeUrlV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarMcnGetContractedChallengeUrlGet(request: OpenApi2StarMcnGetContractedChallengeUrlGetRequest): Promise<StarMcnGetContractedChallengeUrlV2Response> {
    const response = await this.openApi2StarMcnGetContractedChallengeUrlGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarMcnGetContractedChallengeUrlGetWithHttpInfo(request: OpenApi2StarMcnGetContractedChallengeUrlGetRequest): Promise<ApiResponse<StarMcnGetContractedChallengeUrlV2Response>> {
    if (request.starId == null) {
      throw new ApiException("Missing the required parameter 'starId' when calling openApi2StarMcnGetContractedChallengeUrlGet");
    }

    if (request.demandId == null) {
      throw new ApiException("Missing the required parameter 'demandId' when calling openApi2StarMcnGetContractedChallengeUrlGet");
    }
    return this.apiClient.requestWithHttpInfo<StarMcnGetContractedChallengeUrlV2Response>({
      method: "GET",
      path: "/open_api/2/star/mcn/get_contracted_challenge_url/",
      queryParams: [
        { name: "star_id", value: request.starId },
        { name: "demand_id", value: request.demandId },
        { name: "channel_id", value: request.channelId },
        { name: "developer_id", value: request.developerId }
      ]
    });
  }
}


