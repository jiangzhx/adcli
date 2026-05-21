// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { StarMcnGetContractChallengeAuthorItemListV2V2Response } from "../models";


export class StarMcnGetContractChallengeAuthorItemListV2V2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarMcnGetContractChallengeAuthorItemListV2Get(starId: number, demandId: number, page: number, pageSize: number, developerId: number): Promise<StarMcnGetContractChallengeAuthorItemListV2V2Response> {
    const response = await this.openApi2StarMcnGetContractChallengeAuthorItemListV2GetWithHttpInfo(starId, demandId, page, pageSize, developerId);
    return response.data;
  }

  async openApi2StarMcnGetContractChallengeAuthorItemListV2GetWithHttpInfo(starId: number, demandId: number, page: number, pageSize: number, developerId: number): Promise<ApiResponse<StarMcnGetContractChallengeAuthorItemListV2V2Response>> {
    if (starId == null) {
      throw new ApiException("Missing the required parameter 'starId' when calling openApi2StarMcnGetContractChallengeAuthorItemListV2Get");
    }

    if (demandId == null) {
      throw new ApiException("Missing the required parameter 'demandId' when calling openApi2StarMcnGetContractChallengeAuthorItemListV2Get");
    }

    if (page == null) {
      throw new ApiException("Missing the required parameter 'page' when calling openApi2StarMcnGetContractChallengeAuthorItemListV2Get");
    }

    if (pageSize == null) {
      throw new ApiException("Missing the required parameter 'pageSize' when calling openApi2StarMcnGetContractChallengeAuthorItemListV2Get");
    }
    return this.apiClient.requestWithHttpInfo<StarMcnGetContractChallengeAuthorItemListV2V2Response>({
      method: "GET",
      path: "/open_api/2/star/mcn/get_contract_challenge_author_item_list_v2/",
      queryParams: [
        { name: "star_id", value: starId },
        { name: "demand_id", value: demandId },
        { name: "page", value: page },
        { name: "page_size", value: pageSize },
        { name: "developer_id", value: developerId }
      ]
    });
  }
}


