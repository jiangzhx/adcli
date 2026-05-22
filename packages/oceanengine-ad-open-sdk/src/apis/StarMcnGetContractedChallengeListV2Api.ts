// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { StarMcnGetContractedChallengeListV2Response } from "../models";


export class StarMcnGetContractedChallengeListV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarMcnGetContractedChallengeListGet(starId: number, page: number, pageSize: number, payType: number, keyword: string, componentType: number, challengeStatus: number, minCreateTimeStamp: number, maxCreateTimeStamp: number, developerId: number): Promise<StarMcnGetContractedChallengeListV2Response> {
    const response = await this.openApi2StarMcnGetContractedChallengeListGetWithHttpInfo(starId, page, pageSize, payType, keyword, componentType, challengeStatus, minCreateTimeStamp, maxCreateTimeStamp, developerId);
    return response.data;
  }

  async openApi2StarMcnGetContractedChallengeListGetWithHttpInfo(starId: number, page: number, pageSize: number, payType: number, keyword: string, componentType: number, challengeStatus: number, minCreateTimeStamp: number, maxCreateTimeStamp: number, developerId: number): Promise<ApiResponse<StarMcnGetContractedChallengeListV2Response>> {
    if (starId == null) {
      throw new ApiException("Missing the required parameter 'starId' when calling openApi2StarMcnGetContractedChallengeListGet");
    }
    return this.apiClient.requestWithHttpInfo<StarMcnGetContractedChallengeListV2Response>({
      method: "GET",
      path: "/open_api/2/star/mcn/get_contracted_challenge_list/",
      queryParams: [
        { name: "star_id", value: starId },
        { name: "page", value: page },
        { name: "page_size", value: pageSize },
        { name: "pay_type", value: payType },
        { name: "keyword", value: keyword },
        { name: "component_type", value: componentType },
        { name: "challenge_status", value: challengeStatus },
        { name: "min_create_time_stamp", value: minCreateTimeStamp },
        { name: "max_create_time_stamp", value: maxCreateTimeStamp },
        { name: "developer_id", value: developerId }
      ]
    });
  }
}


