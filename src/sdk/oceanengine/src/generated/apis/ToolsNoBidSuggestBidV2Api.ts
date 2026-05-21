// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { ToolsNoBidSuggestBidV2BudgetMode, ToolsNoBidSuggestBidV2ExternalAction, ToolsNoBidSuggestBidV2Filtering, ToolsNoBidSuggestBidV2Response } from "../models";


export class ToolsNoBidSuggestBidV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsNoBidSuggestBidGet(advertiserId: number, budget: number, budgetMode: ToolsNoBidSuggestBidV2BudgetMode, externalAction: ToolsNoBidSuggestBidV2ExternalAction, filtering: ToolsNoBidSuggestBidV2Filtering): Promise<ToolsNoBidSuggestBidV2Response> {
    const response = await this.openApi2ToolsNoBidSuggestBidGetWithHttpInfo(advertiserId, budget, budgetMode, externalAction, filtering);
    return response.data;
  }

  async openApi2ToolsNoBidSuggestBidGetWithHttpInfo(advertiserId: number, budget: number, budgetMode: ToolsNoBidSuggestBidV2BudgetMode, externalAction: ToolsNoBidSuggestBidV2ExternalAction, filtering: ToolsNoBidSuggestBidV2Filtering): Promise<ApiResponse<ToolsNoBidSuggestBidV2Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsNoBidSuggestBidV2Response>({
      method: "GET",
      path: "/open_api/2/tools/no_bid/suggest_bid/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "budget", value: budget },
        { name: "budget_mode", value: budgetMode },
        { name: "external_action", value: externalAction },
        { name: "filtering", value: filtering }
      ]
    });
  }
}


