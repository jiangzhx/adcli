// Generated from oceanengine/ad_open_sdk_go api/api_qianchuan_uni_promotion_ad_control_task_budget_update_v10.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { QianchuanUniPromotionAdControlTaskBudgetUpdateV10Request, QianchuanUniPromotionAdControlTaskBudgetUpdateV10Response } from "../models/index";


export interface QianchuanUniPromotionAdControlTaskBudgetUpdateV10ApiOpenApiV10QianchuanUniPromotionAdControlTaskBudgetUpdatePostRequest {
  qianchuanUniPromotionAdControlTaskBudgetUpdateV10Request?: QianchuanUniPromotionAdControlTaskBudgetUpdateV10Request;
}

export class QianchuanUniPromotionAdControlTaskBudgetUpdateV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanUniPromotionAdControlTaskBudgetUpdatePost(request: QianchuanUniPromotionAdControlTaskBudgetUpdateV10ApiOpenApiV10QianchuanUniPromotionAdControlTaskBudgetUpdatePostRequest): Promise<QianchuanUniPromotionAdControlTaskBudgetUpdateV10Response> {
    const response = await this.openApiV10QianchuanUniPromotionAdControlTaskBudgetUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanUniPromotionAdControlTaskBudgetUpdatePostWithHttpInfo(request: QianchuanUniPromotionAdControlTaskBudgetUpdateV10ApiOpenApiV10QianchuanUniPromotionAdControlTaskBudgetUpdatePostRequest): Promise<ApiResponse<QianchuanUniPromotionAdControlTaskBudgetUpdateV10Response>> {

    return this.apiClient.requestWithHttpInfo<QianchuanUniPromotionAdControlTaskBudgetUpdateV10Response>({
      method: "POST",
      path: "/open_api/v1.0/qianchuan/uni_promotion/ad/control_task/budget/update/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.qianchuanUniPromotionAdControlTaskBudgetUpdateV10Request
    });
  }
}


