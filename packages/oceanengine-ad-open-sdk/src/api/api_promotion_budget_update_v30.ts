// Generated from oceanengine/ad_open_sdk_go api/api_promotion_budget_update_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { PromotionBudgetUpdateV30Request, PromotionBudgetUpdateV30Response } from "../models/index";


export interface PromotionBudgetUpdateV30ApiOpenApiV30PromotionBudgetUpdatePostRequest {
  promotionBudgetUpdateV30Request?: PromotionBudgetUpdateV30Request;
}

export class PromotionBudgetUpdateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30PromotionBudgetUpdatePost(request: PromotionBudgetUpdateV30ApiOpenApiV30PromotionBudgetUpdatePostRequest): Promise<PromotionBudgetUpdateV30Response> {
    const response = await this.openApiV30PromotionBudgetUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30PromotionBudgetUpdatePostWithHttpInfo(request: PromotionBudgetUpdateV30ApiOpenApiV30PromotionBudgetUpdatePostRequest): Promise<ApiResponse<PromotionBudgetUpdateV30Response>> {

    return this.apiClient.requestWithHttpInfo<PromotionBudgetUpdateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/promotion/budget/update/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.promotionBudgetUpdateV30Request
    });
  }
}


