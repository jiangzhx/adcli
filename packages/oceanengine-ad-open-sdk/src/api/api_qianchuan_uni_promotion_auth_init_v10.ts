// Generated from oceanengine/ad_open_sdk_go api/api_qianchuan_uni_promotion_auth_init_v10.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { QianchuanUniPromotionAuthInitV10Request, QianchuanUniPromotionAuthInitV10Response } from "../models/index";


export interface QianchuanUniPromotionAuthInitV10ApiOpenApiV10QianchuanUniPromotionAuthInitPostRequest {
  qianchuanUniPromotionAuthInitV10Request?: QianchuanUniPromotionAuthInitV10Request;
}

export class QianchuanUniPromotionAuthInitV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanUniPromotionAuthInitPost(request: QianchuanUniPromotionAuthInitV10ApiOpenApiV10QianchuanUniPromotionAuthInitPostRequest): Promise<QianchuanUniPromotionAuthInitV10Response> {
    const response = await this.openApiV10QianchuanUniPromotionAuthInitPostWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanUniPromotionAuthInitPostWithHttpInfo(request: QianchuanUniPromotionAuthInitV10ApiOpenApiV10QianchuanUniPromotionAuthInitPostRequest): Promise<ApiResponse<QianchuanUniPromotionAuthInitV10Response>> {

    return this.apiClient.requestWithHttpInfo<QianchuanUniPromotionAuthInitV10Response>({
      method: "POST",
      path: "/open_api/v1.0/qianchuan/uni_promotion/auth/init/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.qianchuanUniPromotionAuthInitV10Request
    });
  }
}


