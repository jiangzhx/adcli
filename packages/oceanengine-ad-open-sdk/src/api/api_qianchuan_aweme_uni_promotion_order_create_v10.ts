// Generated from oceanengine/ad_open_sdk_go api/api_qianchuan_aweme_uni_promotion_order_create_v10.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { QianchuanAwemeUniPromotionOrderCreateV10Request, QianchuanAwemeUniPromotionOrderCreateV10Response } from "../models/index";


export interface QianchuanAwemeUniPromotionOrderCreateV10ApiOpenApiV10QianchuanAwemeUniPromotionOrderCreatePostRequest {
  qianchuanAwemeUniPromotionOrderCreateV10Request?: QianchuanAwemeUniPromotionOrderCreateV10Request;
}

export class QianchuanAwemeUniPromotionOrderCreateV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanAwemeUniPromotionOrderCreatePost(request: QianchuanAwemeUniPromotionOrderCreateV10ApiOpenApiV10QianchuanAwemeUniPromotionOrderCreatePostRequest): Promise<QianchuanAwemeUniPromotionOrderCreateV10Response> {
    const response = await this.openApiV10QianchuanAwemeUniPromotionOrderCreatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanAwemeUniPromotionOrderCreatePostWithHttpInfo(request: QianchuanAwemeUniPromotionOrderCreateV10ApiOpenApiV10QianchuanAwemeUniPromotionOrderCreatePostRequest): Promise<ApiResponse<QianchuanAwemeUniPromotionOrderCreateV10Response>> {

    return this.apiClient.requestWithHttpInfo<QianchuanAwemeUniPromotionOrderCreateV10Response>({
      method: "POST",
      path: "/open_api/v1.0/qianchuan/aweme/uni_promotion/order/create/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.qianchuanAwemeUniPromotionOrderCreateV10Request
    });
  }
}


