// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QianchuanAwemeUniPromotionOrderBudgetAddV10Request, QianchuanAwemeUniPromotionOrderBudgetAddV10Response } from "../models";


export interface OpenApiV10QianchuanAwemeUniPromotionOrderBudgetAddPostRequest {
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

  async openApiV10QianchuanAwemeUniPromotionOrderBudgetAddPost(request: OpenApiV10QianchuanAwemeUniPromotionOrderBudgetAddPostRequest): Promise<QianchuanAwemeUniPromotionOrderBudgetAddV10Response> {
    const response = await this.openApiV10QianchuanAwemeUniPromotionOrderBudgetAddPostWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanAwemeUniPromotionOrderBudgetAddPostWithHttpInfo(request: OpenApiV10QianchuanAwemeUniPromotionOrderBudgetAddPostRequest): Promise<ApiResponse<QianchuanAwemeUniPromotionOrderBudgetAddV10Response>> {

    return this.apiClient.requestWithHttpInfo<QianchuanAwemeUniPromotionOrderBudgetAddV10Response>({
      method: "POST",
      path: "/open_api/v1.0/qianchuan/aweme/uni_promotion/order/budget/add/",
      queryParams: [

      ],
      body: request.qianchuanAwemeUniPromotionOrderBudgetAddV10Request
    });
  }
}


