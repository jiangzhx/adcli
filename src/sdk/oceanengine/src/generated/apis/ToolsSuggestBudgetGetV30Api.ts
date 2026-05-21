// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { ToolsSuggestBudgetGetV30Response } from "../models";


export class ToolsSuggestBudgetGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsSuggestBudgetGetGet(advertiserId: number, promotionIds: number[]): Promise<ToolsSuggestBudgetGetV30Response> {
    const response = await this.openApiV30ToolsSuggestBudgetGetGetWithHttpInfo(advertiserId, promotionIds);
    return response.data;
  }

  async openApiV30ToolsSuggestBudgetGetGetWithHttpInfo(advertiserId: number, promotionIds: number[]): Promise<ApiResponse<ToolsSuggestBudgetGetV30Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30ToolsSuggestBudgetGetGet");
    }

    if (promotionIds == null) {
      throw new ApiException("Missing the required parameter 'promotionIds' when calling openApiV30ToolsSuggestBudgetGetGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsSuggestBudgetGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/tools/suggest_budget/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "promotion_ids", value: promotionIds, collectionFormat: "csv" }
      ]
    });
  }
}


