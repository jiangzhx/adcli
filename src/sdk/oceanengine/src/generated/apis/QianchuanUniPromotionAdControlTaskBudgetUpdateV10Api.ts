// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { QianchuanUniPromotionAdControlTaskBudgetUpdateV10Request, QianchuanUniPromotionAdControlTaskBudgetUpdateV10Response } from "../models";


export class QianchuanUniPromotionAdControlTaskBudgetUpdateV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanUniPromotionAdControlTaskBudgetUpdatePost(qianchuanUniPromotionAdControlTaskBudgetUpdateV10Request: QianchuanUniPromotionAdControlTaskBudgetUpdateV10Request): Promise<QianchuanUniPromotionAdControlTaskBudgetUpdateV10Response> {
    const response = await this.openApiV10QianchuanUniPromotionAdControlTaskBudgetUpdatePostWithHttpInfo(qianchuanUniPromotionAdControlTaskBudgetUpdateV10Request);
    return response.data;
  }

  async openApiV10QianchuanUniPromotionAdControlTaskBudgetUpdatePostWithHttpInfo(qianchuanUniPromotionAdControlTaskBudgetUpdateV10Request: QianchuanUniPromotionAdControlTaskBudgetUpdateV10Request): Promise<ApiResponse<QianchuanUniPromotionAdControlTaskBudgetUpdateV10Response>> {

    return this.apiClient.requestWithHttpInfo<QianchuanUniPromotionAdControlTaskBudgetUpdateV10Response>({
      method: "POST",
      path: "/open_api/v1.0/qianchuan/uni_promotion/ad/control_task/budget/update/",
      queryParams: [

      ],
      body: qianchuanUniPromotionAdControlTaskBudgetUpdateV10Request
    });
  }
}


