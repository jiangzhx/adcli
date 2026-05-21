// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { QianchuanUniAwemeSuggestBudgetV10MarketingGoal, QianchuanUniAwemeSuggestBudgetV10Response } from "../models";


export class QianchuanUniAwemeSuggestBudgetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanUniAwemeSuggestBudgetGet(advertiserId: number, awemeId: number, marketingGoal: QianchuanUniAwemeSuggestBudgetV10MarketingGoal, productIds: number[], adId: number): Promise<QianchuanUniAwemeSuggestBudgetV10Response> {
    const response = await this.openApiV10QianchuanUniAwemeSuggestBudgetGetWithHttpInfo(advertiserId, awemeId, marketingGoal, productIds, adId);
    return response.data;
  }

  async openApiV10QianchuanUniAwemeSuggestBudgetGetWithHttpInfo(advertiserId: number, awemeId: number, marketingGoal: QianchuanUniAwemeSuggestBudgetV10MarketingGoal, productIds: number[], adId: number): Promise<ApiResponse<QianchuanUniAwemeSuggestBudgetV10Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanUniAwemeSuggestBudgetGet");
    }

    if (awemeId == null) {
      throw new ApiException("Missing the required parameter 'awemeId' when calling openApiV10QianchuanUniAwemeSuggestBudgetGet");
    }

    if (marketingGoal == null) {
      throw new ApiException("Missing the required parameter 'marketingGoal' when calling openApiV10QianchuanUniAwemeSuggestBudgetGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanUniAwemeSuggestBudgetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/uni_aweme/suggest/budget/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "aweme_id", value: awemeId },
        { name: "marketing_goal", value: marketingGoal },
        { name: "ad_id", value: adId },
        { name: "product_ids", value: productIds, collectionFormat: "csv" }
      ]
    });
  }
}


