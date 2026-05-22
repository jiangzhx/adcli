// Generated from oceanengine/ad_open_sdk_go api/api_creative_strategy_list_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { CreativeStrategyListV2Response, CreativeStrategyListV2StrategyTypes } from "../models/index";


export interface CreativeStrategyListV2ApiOpenApi2CreativeStrategyListGetRequest {
  advertiserId: number | string;
  strategyTypes?: CreativeStrategyListV2StrategyTypes[];
  page?: number;
  pageSize?: number;
}

export class CreativeStrategyListV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2CreativeStrategyListGet(request: CreativeStrategyListV2ApiOpenApi2CreativeStrategyListGetRequest): Promise<CreativeStrategyListV2Response> {
    const response = await this.openApi2CreativeStrategyListGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2CreativeStrategyListGetWithHttpInfo(request: CreativeStrategyListV2ApiOpenApi2CreativeStrategyListGetRequest): Promise<ApiResponse<CreativeStrategyListV2Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("advertiserId is required and must be specified");
    }
    return this.apiClient.requestWithHttpInfo<CreativeStrategyListV2Response>({
      method: "GET",
      path: "/open_api/2/creative/strategy/list/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "strategy_types", value: request.strategyTypes },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


