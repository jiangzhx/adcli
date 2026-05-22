// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { StarMcnGetContractedChallengeListV2Response } from "../models";


export interface OpenApi2StarMcnGetContractedChallengeListGetRequest {
  starId: number;
  page?: number;
  pageSize?: number;
  payType?: number;
  keyword?: string;
  componentType?: number;
  challengeStatus?: number;
  minCreateTimeStamp?: number;
  maxCreateTimeStamp?: number;
  developerId?: number;
}

export class StarMcnGetContractedChallengeListV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarMcnGetContractedChallengeListGet(request: OpenApi2StarMcnGetContractedChallengeListGetRequest): Promise<StarMcnGetContractedChallengeListV2Response> {
    const response = await this.openApi2StarMcnGetContractedChallengeListGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarMcnGetContractedChallengeListGetWithHttpInfo(request: OpenApi2StarMcnGetContractedChallengeListGetRequest): Promise<ApiResponse<StarMcnGetContractedChallengeListV2Response>> {
    if (request.starId == null) {
      throw new ApiException("Missing the required parameter 'starId' when calling openApi2StarMcnGetContractedChallengeListGet");
    }
    return this.apiClient.requestWithHttpInfo<StarMcnGetContractedChallengeListV2Response>({
      method: "GET",
      path: "/open_api/2/star/mcn/get_contracted_challenge_list/",
      queryParams: [
        { name: "star_id", value: request.starId },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize },
        { name: "pay_type", value: request.payType },
        { name: "keyword", value: request.keyword },
        { name: "component_type", value: request.componentType },
        { name: "challenge_status", value: request.challengeStatus },
        { name: "min_create_time_stamp", value: request.minCreateTimeStamp },
        { name: "max_create_time_stamp", value: request.maxCreateTimeStamp },
        { name: "developer_id", value: request.developerId }
      ]
    });
  }
}


