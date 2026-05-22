// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QianchuanUniPromotionAdProductDeleteV10Request, QianchuanUniPromotionAdProductDeleteV10Response } from "../models";


export interface OpenApiV10QianchuanUniPromotionAdProductDeletePostRequest {
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

  async openApiV10QianchuanUniPromotionAdProductDeletePost(request: OpenApiV10QianchuanUniPromotionAdProductDeletePostRequest): Promise<QianchuanUniPromotionAdProductDeleteV10Response> {
    const response = await this.openApiV10QianchuanUniPromotionAdProductDeletePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanUniPromotionAdProductDeletePostWithHttpInfo(request: OpenApiV10QianchuanUniPromotionAdProductDeletePostRequest): Promise<ApiResponse<QianchuanUniPromotionAdProductDeleteV10Response>> {

    return this.apiClient.requestWithHttpInfo<QianchuanUniPromotionAdProductDeleteV10Response>({
      method: "POST",
      path: "/open_api/v1.0/qianchuan/uni_promotion/ad/product/delete/",
      queryParams: [

      ],
      body: request.qianchuanUniPromotionAdProductDeleteV10Request
    });
  }
}


