// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { CreativeStrategyListV2Response, CreativeStrategyListV2StrategyTypes } from "../models";


export class CreativeStrategyListV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2CreativeStrategyListGet(advertiserId: number, strategyTypes: CreativeStrategyListV2StrategyTypes[], page: number, pageSize: number): Promise<CreativeStrategyListV2Response> {
    const response = await this.openApi2CreativeStrategyListGetWithHttpInfo(advertiserId, strategyTypes, page, pageSize);
    return response.data;
  }

  async openApi2CreativeStrategyListGetWithHttpInfo(advertiserId: number, strategyTypes: CreativeStrategyListV2StrategyTypes[], page: number, pageSize: number): Promise<ApiResponse<CreativeStrategyListV2Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2CreativeStrategyListGet");
    }
    return this.apiClient.requestWithHttpInfo<CreativeStrategyListV2Response>({
      method: "GET",
      path: "/open_api/2/creative/strategy/list/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "page", value: page },
        { name: "page_size", value: pageSize },
        { name: "strategy_types", value: strategyTypes, collectionFormat: "csv" }
      ]
    });
  }
}


