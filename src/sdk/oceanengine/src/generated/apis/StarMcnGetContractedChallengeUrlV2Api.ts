// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { StarMcnGetContractedChallengeUrlV2Response } from "../models";


export class StarMcnGetContractedChallengeUrlV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarMcnGetContractedChallengeUrlGet(starId: number, demandId: number, channelId: string, developerId: number): Promise<StarMcnGetContractedChallengeUrlV2Response> {
    const response = await this.openApi2StarMcnGetContractedChallengeUrlGetWithHttpInfo(starId, demandId, channelId, developerId);
    return response.data;
  }

  async openApi2StarMcnGetContractedChallengeUrlGetWithHttpInfo(starId: number, demandId: number, channelId: string, developerId: number): Promise<ApiResponse<StarMcnGetContractedChallengeUrlV2Response>> {
    if (starId == null) {
      throw new ApiException("Missing the required parameter 'starId' when calling openApi2StarMcnGetContractedChallengeUrlGet");
    }

    if (demandId == null) {
      throw new ApiException("Missing the required parameter 'demandId' when calling openApi2StarMcnGetContractedChallengeUrlGet");
    }
    return this.apiClient.requestWithHttpInfo<StarMcnGetContractedChallengeUrlV2Response>({
      method: "GET",
      path: "/open_api/2/star/mcn/get_contracted_challenge_url/",
      queryParams: [
        { name: "star_id", value: starId },
        { name: "demand_id", value: demandId },
        { name: "channel_id", value: channelId },
        { name: "developer_id", value: developerId }
      ]
    });
  }
}


