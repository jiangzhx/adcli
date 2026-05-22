// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QianchuanUniAwemeSuggestBudgetV10MarketingGoal, QianchuanUniAwemeSuggestBudgetV10Response } from "../models";


export interface OpenApiV10QianchuanUniAwemeSuggestBudgetGetRequest {
  advertiserId: number | string;
  awemeId: number | string;
  marketingGoal: QianchuanUniAwemeSuggestBudgetV10MarketingGoal;
  productIds?: number | string[];
  adId?: number | string;
}

export class QianchuanUniAwemeSuggestBudgetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanUniAwemeSuggestBudgetGet(request: OpenApiV10QianchuanUniAwemeSuggestBudgetGetRequest): Promise<QianchuanUniAwemeSuggestBudgetV10Response> {
    const response = await this.openApiV10QianchuanUniAwemeSuggestBudgetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanUniAwemeSuggestBudgetGetWithHttpInfo(request: OpenApiV10QianchuanUniAwemeSuggestBudgetGetRequest): Promise<ApiResponse<QianchuanUniAwemeSuggestBudgetV10Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanUniAwemeSuggestBudgetGet");
    }

    if (request.awemeId == null) {
      throw new ApiException("Missing the required parameter 'awemeId' when calling openApiV10QianchuanUniAwemeSuggestBudgetGet");
    }

    if (request.marketingGoal == null) {
      throw new ApiException("Missing the required parameter 'marketingGoal' when calling openApiV10QianchuanUniAwemeSuggestBudgetGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanUniAwemeSuggestBudgetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/uni_aweme/suggest/budget/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "aweme_id", value: request.awemeId },
        { name: "marketing_goal", value: request.marketingGoal },
        { name: "product_ids", value: request.productIds, collectionFormat: "csv" },
        { name: "ad_id", value: request.adId }
      ]
    });
  }
}


