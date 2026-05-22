// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QianchuanUniPromotionAdBudgetUpdateV10Request, QianchuanUniPromotionAdBudgetUpdateV10Response } from "../models";


export class QianchuanUniPromotionAdBudgetUpdateV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanUniPromotionAdBudgetUpdatePost(qianchuanUniPromotionAdBudgetUpdateV10Request: QianchuanUniPromotionAdBudgetUpdateV10Request): Promise<QianchuanUniPromotionAdBudgetUpdateV10Response> {
    const response = await this.openApiV10QianchuanUniPromotionAdBudgetUpdatePostWithHttpInfo(qianchuanUniPromotionAdBudgetUpdateV10Request);
    return response.data;
  }

  async openApiV10QianchuanUniPromotionAdBudgetUpdatePostWithHttpInfo(qianchuanUniPromotionAdBudgetUpdateV10Request: QianchuanUniPromotionAdBudgetUpdateV10Request): Promise<ApiResponse<QianchuanUniPromotionAdBudgetUpdateV10Response>> {

    return this.apiClient.requestWithHttpInfo<QianchuanUniPromotionAdBudgetUpdateV10Response>({
      method: "POST",
      path: "/open_api/v1.0/qianchuan/uni_promotion/ad/budget/update/",
      queryParams: [

      ],
      body: qianchuanUniPromotionAdBudgetUpdateV10Request
    });
  }
}


