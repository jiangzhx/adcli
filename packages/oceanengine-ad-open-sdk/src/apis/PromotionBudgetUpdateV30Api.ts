// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { PromotionBudgetUpdateV30Request, PromotionBudgetUpdateV30Response } from "../models";


export class PromotionBudgetUpdateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30PromotionBudgetUpdatePost(promotionBudgetUpdateV30Request: PromotionBudgetUpdateV30Request): Promise<PromotionBudgetUpdateV30Response> {
    const response = await this.openApiV30PromotionBudgetUpdatePostWithHttpInfo(promotionBudgetUpdateV30Request);
    return response.data;
  }

  async openApiV30PromotionBudgetUpdatePostWithHttpInfo(promotionBudgetUpdateV30Request: PromotionBudgetUpdateV30Request): Promise<ApiResponse<PromotionBudgetUpdateV30Response>> {

    return this.apiClient.requestWithHttpInfo<PromotionBudgetUpdateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/promotion/budget/update/",
      queryParams: [

      ],
      body: promotionBudgetUpdateV30Request
    });
  }
}


