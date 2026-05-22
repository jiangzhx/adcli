// Generated from oceanengine/ad_open_sdk_go api/api_star_mcn_get_contract_challenge_author_item_list_v2_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { StarMcnGetContractChallengeAuthorItemListV2V2Response } from "../models/index";


export interface StarMcnGetContractChallengeAuthorItemListV2V2ApiOpenApi2StarMcnGetContractChallengeAuthorItemListV2GetRequest {
  starId: number | string;
  demandId: number | string;
  page: number;
  pageSize: number;
  developerId?: number | string;
}

export class StarMcnGetContractChallengeAuthorItemListV2V2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarMcnGetContractChallengeAuthorItemListV2Get(request: StarMcnGetContractChallengeAuthorItemListV2V2ApiOpenApi2StarMcnGetContractChallengeAuthorItemListV2GetRequest): Promise<StarMcnGetContractChallengeAuthorItemListV2V2Response> {
    const response = await this.openApi2StarMcnGetContractChallengeAuthorItemListV2GetWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarMcnGetContractChallengeAuthorItemListV2GetWithHttpInfo(request: StarMcnGetContractChallengeAuthorItemListV2V2ApiOpenApi2StarMcnGetContractChallengeAuthorItemListV2GetRequest): Promise<ApiResponse<StarMcnGetContractChallengeAuthorItemListV2V2Response>> {
    if (request.starId == null) {
      throw new ApiException("Missing the required parameter 'starId' when calling openApi2StarMcnGetContractChallengeAuthorItemListV2Get");
    }

    if (request.demandId == null) {
      throw new ApiException("Missing the required parameter 'demandId' when calling openApi2StarMcnGetContractChallengeAuthorItemListV2Get");
    }

    if (request.page == null) {
      throw new ApiException("Missing the required parameter 'page' when calling openApi2StarMcnGetContractChallengeAuthorItemListV2Get");
    }

    if (request.pageSize == null) {
      throw new ApiException("Missing the required parameter 'pageSize' when calling openApi2StarMcnGetContractChallengeAuthorItemListV2Get");
    }
    return this.apiClient.requestWithHttpInfo<StarMcnGetContractChallengeAuthorItemListV2V2Response>({
      method: "GET",
      path: "/open_api/2/star/mcn/get_contract_challenge_author_item_list_v2/",
      queryParams: [
        { name: "star_id", value: request.starId },
        { name: "demand_id", value: request.demandId },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize },
        { name: "developer_id", value: request.developerId }
      ]
    });
  }
}


