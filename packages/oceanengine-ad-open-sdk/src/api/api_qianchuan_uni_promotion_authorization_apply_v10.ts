// Generated from oceanengine/ad_open_sdk_go api/api_qianchuan_uni_promotion_authorization_apply_v10.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { QianchuanUniPromotionAuthorizationApplyV10Request, QianchuanUniPromotionAuthorizationApplyV10Response } from "../models/index";


export interface QianchuanUniPromotionAuthorizationApplyV10ApiOpenApiV10QianchuanUniPromotionAuthorizationApplyPostRequest {
  qianchuanUniPromotionAuthorizationApplyV10Request?: QianchuanUniPromotionAuthorizationApplyV10Request;
}

export class QianchuanUniPromotionAuthorizationApplyV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanUniPromotionAuthorizationApplyPost(request: QianchuanUniPromotionAuthorizationApplyV10ApiOpenApiV10QianchuanUniPromotionAuthorizationApplyPostRequest): Promise<QianchuanUniPromotionAuthorizationApplyV10Response> {
    const response = await this.openApiV10QianchuanUniPromotionAuthorizationApplyPostWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanUniPromotionAuthorizationApplyPostWithHttpInfo(request: QianchuanUniPromotionAuthorizationApplyV10ApiOpenApiV10QianchuanUniPromotionAuthorizationApplyPostRequest): Promise<ApiResponse<QianchuanUniPromotionAuthorizationApplyV10Response>> {

    return this.apiClient.requestWithHttpInfo<QianchuanUniPromotionAuthorizationApplyV10Response>({
      method: "POST",
      path: "/open_api/v1.0/qianchuan/uni_promotion/authorization/apply/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.qianchuanUniPromotionAuthorizationApplyV10Request
    });
  }
}


