// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QianchuanUniPromotionAuthorizationApplyV10Request, QianchuanUniPromotionAuthorizationApplyV10Response } from "../models";


export interface OpenApiV10QianchuanUniPromotionAuthorizationApplyPostRequest {
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

  async openApiV10QianchuanUniPromotionAuthorizationApplyPost(request: OpenApiV10QianchuanUniPromotionAuthorizationApplyPostRequest): Promise<QianchuanUniPromotionAuthorizationApplyV10Response> {
    const response = await this.openApiV10QianchuanUniPromotionAuthorizationApplyPostWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanUniPromotionAuthorizationApplyPostWithHttpInfo(request: OpenApiV10QianchuanUniPromotionAuthorizationApplyPostRequest): Promise<ApiResponse<QianchuanUniPromotionAuthorizationApplyV10Response>> {

    return this.apiClient.requestWithHttpInfo<QianchuanUniPromotionAuthorizationApplyV10Response>({
      method: "POST",
      path: "/open_api/v1.0/qianchuan/uni_promotion/authorization/apply/",
      queryParams: [

      ],
      body: request.qianchuanUniPromotionAuthorizationApplyV10Request
    });
  }
}


