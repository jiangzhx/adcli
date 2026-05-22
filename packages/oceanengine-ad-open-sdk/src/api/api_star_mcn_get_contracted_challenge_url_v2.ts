// Generated from oceanengine/ad_open_sdk_go api/api_star_mcn_get_contracted_challenge_url_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { StarMcnGetContractedChallengeUrlV2Response } from "../models/index";


export interface StarMcnGetContractedChallengeUrlV2ApiOpenApi2StarMcnGetContractedChallengeUrlGetRequest {
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

  async openApi2StarMcnGetContractedChallengeUrlGet(request: StarMcnGetContractedChallengeUrlV2ApiOpenApi2StarMcnGetContractedChallengeUrlGetRequest): Promise<StarMcnGetContractedChallengeUrlV2Response> {
    const response = await this.openApi2StarMcnGetContractedChallengeUrlGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarMcnGetContractedChallengeUrlGetWithHttpInfo(request: StarMcnGetContractedChallengeUrlV2ApiOpenApi2StarMcnGetContractedChallengeUrlGetRequest): Promise<ApiResponse<StarMcnGetContractedChallengeUrlV2Response>> {
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


