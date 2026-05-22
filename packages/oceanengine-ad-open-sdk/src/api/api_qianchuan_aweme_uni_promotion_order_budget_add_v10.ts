// Generated from oceanengine/ad_open_sdk_go api/api_qianchuan_aweme_uni_promotion_order_budget_add_v10.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { QianchuanAwemeUniPromotionOrderBudgetAddV10Request, QianchuanAwemeUniPromotionOrderBudgetAddV10Response } from "../models/index";


export interface QianchuanAwemeUniPromotionOrderBudgetAddV10ApiOpenApiV10QianchuanAwemeUniPromotionOrderBudgetAddPostRequest {
  qianchuanAwemeUniPromotionOrderBudgetAddV10Request?: QianchuanAwemeUniPromotionOrderBudgetAddV10Request;
}

export class QianchuanAwemeUniPromotionOrderBudgetAddV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanAwemeUniPromotionOrderBudgetAddPost(request: QianchuanAwemeUniPromotionOrderBudgetAddV10ApiOpenApiV10QianchuanAwemeUniPromotionOrderBudgetAddPostRequest): Promise<QianchuanAwemeUniPromotionOrderBudgetAddV10Response> {
    const response = await this.openApiV10QianchuanAwemeUniPromotionOrderBudgetAddPostWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanAwemeUniPromotionOrderBudgetAddPostWithHttpInfo(request: QianchuanAwemeUniPromotionOrderBudgetAddV10ApiOpenApiV10QianchuanAwemeUniPromotionOrderBudgetAddPostRequest): Promise<ApiResponse<QianchuanAwemeUniPromotionOrderBudgetAddV10Response>> {

    return this.apiClient.requestWithHttpInfo<QianchuanAwemeUniPromotionOrderBudgetAddV10Response>({
      method: "POST",
      path: "/open_api/v1.0/qianchuan/aweme/uni_promotion/order/budget/add/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.qianchuanAwemeUniPromotionOrderBudgetAddV10Request
    });
  }
}


