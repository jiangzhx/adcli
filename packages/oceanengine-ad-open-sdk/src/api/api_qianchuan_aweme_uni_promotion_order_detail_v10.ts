// Generated from oceanengine/ad_open_sdk_go api/api_qianchuan_aweme_uni_promotion_order_detail_v10.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { QianchuanAwemeUniPromotionOrderDetailV10Response } from "../models/index";


export interface QianchuanAwemeUniPromotionOrderDetailV10ApiOpenApiV10QianchuanAwemeUniPromotionOrderDetailGetRequest {
  advertiserId: number | string;
  orderId: number | string;
}

export class QianchuanAwemeUniPromotionOrderDetailV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanAwemeUniPromotionOrderDetailGet(request: QianchuanAwemeUniPromotionOrderDetailV10ApiOpenApiV10QianchuanAwemeUniPromotionOrderDetailGetRequest): Promise<QianchuanAwemeUniPromotionOrderDetailV10Response> {
    const response = await this.openApiV10QianchuanAwemeUniPromotionOrderDetailGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanAwemeUniPromotionOrderDetailGetWithHttpInfo(request: QianchuanAwemeUniPromotionOrderDetailV10ApiOpenApiV10QianchuanAwemeUniPromotionOrderDetailGetRequest): Promise<ApiResponse<QianchuanAwemeUniPromotionOrderDetailV10Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("advertiserId is required and must be specified");
    }

    if (request.orderId == null) {
      throw new ApiException("orderId is required and must be specified");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanAwemeUniPromotionOrderDetailV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/aweme/uni_promotion/order/detail/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "order_id", value: request.orderId }
      ]
    });
  }
}


