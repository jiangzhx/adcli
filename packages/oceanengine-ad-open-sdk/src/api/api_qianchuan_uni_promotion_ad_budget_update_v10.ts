// Generated from oceanengine/ad_open_sdk_go api/api_qianchuan_uni_promotion_ad_budget_update_v10.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { QianchuanUniPromotionAdBudgetUpdateV10Request, QianchuanUniPromotionAdBudgetUpdateV10Response } from "../models/index";


export interface QianchuanUniPromotionAdBudgetUpdateV10ApiOpenApiV10QianchuanUniPromotionAdBudgetUpdatePostRequest {
  qianchuanUniPromotionAdBudgetUpdateV10Request?: QianchuanUniPromotionAdBudgetUpdateV10Request;
}

export class QianchuanUniPromotionAdBudgetUpdateV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanUniPromotionAdBudgetUpdatePost(request: QianchuanUniPromotionAdBudgetUpdateV10ApiOpenApiV10QianchuanUniPromotionAdBudgetUpdatePostRequest): Promise<QianchuanUniPromotionAdBudgetUpdateV10Response> {
    const response = await this.openApiV10QianchuanUniPromotionAdBudgetUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanUniPromotionAdBudgetUpdatePostWithHttpInfo(request: QianchuanUniPromotionAdBudgetUpdateV10ApiOpenApiV10QianchuanUniPromotionAdBudgetUpdatePostRequest): Promise<ApiResponse<QianchuanUniPromotionAdBudgetUpdateV10Response>> {

    return this.apiClient.requestWithHttpInfo<QianchuanUniPromotionAdBudgetUpdateV10Response>({
      method: "POST",
      path: "/open_api/v1.0/qianchuan/uni_promotion/ad/budget/update/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.qianchuanUniPromotionAdBudgetUpdateV10Request
    });
  }
}


