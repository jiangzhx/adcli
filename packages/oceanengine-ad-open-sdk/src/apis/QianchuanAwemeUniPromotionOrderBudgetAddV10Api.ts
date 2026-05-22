// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QianchuanAwemeUniPromotionOrderBudgetAddV10Request, QianchuanAwemeUniPromotionOrderBudgetAddV10Response } from "../models";


export class QianchuanAwemeUniPromotionOrderBudgetAddV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanAwemeUniPromotionOrderBudgetAddPost(request: QianchuanAwemeUniPromotionOrderBudgetAddV10Request): Promise<QianchuanAwemeUniPromotionOrderBudgetAddV10Response> {
    const response = await this.openApiV10QianchuanAwemeUniPromotionOrderBudgetAddPostWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanAwemeUniPromotionOrderBudgetAddPostWithHttpInfo(request: QianchuanAwemeUniPromotionOrderBudgetAddV10Request): Promise<ApiResponse<QianchuanAwemeUniPromotionOrderBudgetAddV10Response>> {
    return this.apiClient.requestWithHttpInfo<QianchuanAwemeUniPromotionOrderBudgetAddV10Response>({
      method: "POST",
      path: "/open_api/v1.0/qianchuan/aweme/uni_promotion/order/budget/add/",
      queryParams: [

      ],
      body: request
    });
  }
}


