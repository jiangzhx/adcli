// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QianchuanUniPromotionAdBudgetUpdateV10Request, QianchuanUniPromotionAdBudgetUpdateV10Response } from "../models";


export interface OpenApiV10QianchuanUniPromotionAdBudgetUpdatePostRequest {
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

  async openApiV10QianchuanUniPromotionAdBudgetUpdatePost(request: OpenApiV10QianchuanUniPromotionAdBudgetUpdatePostRequest): Promise<QianchuanUniPromotionAdBudgetUpdateV10Response> {
    const response = await this.openApiV10QianchuanUniPromotionAdBudgetUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanUniPromotionAdBudgetUpdatePostWithHttpInfo(request: OpenApiV10QianchuanUniPromotionAdBudgetUpdatePostRequest): Promise<ApiResponse<QianchuanUniPromotionAdBudgetUpdateV10Response>> {

    return this.apiClient.requestWithHttpInfo<QianchuanUniPromotionAdBudgetUpdateV10Response>({
      method: "POST",
      path: "/open_api/v1.0/qianchuan/uni_promotion/ad/budget/update/",
      queryParams: [

      ],
      body: request.qianchuanUniPromotionAdBudgetUpdateV10Request
    });
  }
}


