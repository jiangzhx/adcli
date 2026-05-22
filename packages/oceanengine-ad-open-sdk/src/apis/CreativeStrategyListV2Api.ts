// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { CreativeStrategyListV2Response, CreativeStrategyListV2StrategyTypes } from "../models";


export interface OpenApi2CreativeStrategyListGetRequest {
  advertiserId: number;
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

  async openApi2CreativeStrategyListGet(request: OpenApi2CreativeStrategyListGetRequest): Promise<CreativeStrategyListV2Response> {
    const response = await this.openApi2CreativeStrategyListGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2CreativeStrategyListGetWithHttpInfo(request: OpenApi2CreativeStrategyListGetRequest): Promise<ApiResponse<CreativeStrategyListV2Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2CreativeStrategyListGet");
    }
    return this.apiClient.requestWithHttpInfo<CreativeStrategyListV2Response>({
      method: "GET",
      path: "/open_api/2/creative/strategy/list/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "strategy_types", value: request.strategyTypes, collectionFormat: "csv" },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


