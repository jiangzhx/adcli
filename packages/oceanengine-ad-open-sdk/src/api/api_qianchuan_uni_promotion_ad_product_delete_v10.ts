// Generated from oceanengine/ad_open_sdk_go api/api_qianchuan_uni_promotion_ad_product_delete_v10.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { QianchuanUniPromotionAdProductDeleteV10Request, QianchuanUniPromotionAdProductDeleteV10Response } from "../models/index";


export interface QianchuanUniPromotionAdProductDeleteV10ApiOpenApiV10QianchuanUniPromotionAdProductDeletePostRequest {
  qianchuanUniPromotionAdProductDeleteV10Request?: QianchuanUniPromotionAdProductDeleteV10Request;
}

export class QianchuanUniPromotionAdProductDeleteV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanUniPromotionAdProductDeletePost(request: QianchuanUniPromotionAdProductDeleteV10ApiOpenApiV10QianchuanUniPromotionAdProductDeletePostRequest): Promise<QianchuanUniPromotionAdProductDeleteV10Response> {
    const response = await this.openApiV10QianchuanUniPromotionAdProductDeletePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanUniPromotionAdProductDeletePostWithHttpInfo(request: QianchuanUniPromotionAdProductDeleteV10ApiOpenApiV10QianchuanUniPromotionAdProductDeletePostRequest): Promise<ApiResponse<QianchuanUniPromotionAdProductDeleteV10Response>> {

    return this.apiClient.requestWithHttpInfo<QianchuanUniPromotionAdProductDeleteV10Response>({
      method: "POST",
      path: "/open_api/v1.0/qianchuan/uni_promotion/ad/product/delete/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.qianchuanUniPromotionAdProductDeleteV10Request
    });
  }
}


