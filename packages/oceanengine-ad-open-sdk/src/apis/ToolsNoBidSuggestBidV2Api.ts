// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsNoBidSuggestBidV2BudgetMode, ToolsNoBidSuggestBidV2ExternalAction, ToolsNoBidSuggestBidV2Filtering, ToolsNoBidSuggestBidV2Response } from "../models";


export interface OpenApi2ToolsNoBidSuggestBidGetRequest {
  advertiserId?: number | string;
  budget?: number;
  budgetMode?: ToolsNoBidSuggestBidV2BudgetMode;
  externalAction?: ToolsNoBidSuggestBidV2ExternalAction;
  filtering?: ToolsNoBidSuggestBidV2Filtering;
}

export class ToolsNoBidSuggestBidV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsNoBidSuggestBidGet(request: OpenApi2ToolsNoBidSuggestBidGetRequest): Promise<ToolsNoBidSuggestBidV2Response> {
    const response = await this.openApi2ToolsNoBidSuggestBidGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsNoBidSuggestBidGetWithHttpInfo(request: OpenApi2ToolsNoBidSuggestBidGetRequest): Promise<ApiResponse<ToolsNoBidSuggestBidV2Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsNoBidSuggestBidV2Response>({
      method: "GET",
      path: "/open_api/2/tools/no_bid/suggest_bid/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "budget", value: request.budget },
        { name: "budget_mode", value: request.budgetMode },
        { name: "external_action", value: request.externalAction },
        { name: "filtering", value: request.filtering }
      ]
    });
  }
}


