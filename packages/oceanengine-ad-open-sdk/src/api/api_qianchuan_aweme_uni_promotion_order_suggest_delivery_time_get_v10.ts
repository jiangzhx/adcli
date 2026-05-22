// Generated from oceanengine/ad_open_sdk_go api/api_qianchuan_aweme_uni_promotion_order_suggest_delivery_time_get_v10.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { QianchuanAwemeUniPromotionOrderSuggestDeliveryTimeGetV10Response } from "../models/index";


export interface QianchuanAwemeUniPromotionOrderSuggestDeliveryTimeGetV10ApiOpenApiV10QianchuanAwemeUniPromotionOrderSuggestDeliveryTimeGetGetRequest {
  advertiserId: number | string;
  orderId: number | string;
  addAmount: number;
}

export class QianchuanAwemeUniPromotionOrderSuggestDeliveryTimeGetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanAwemeUniPromotionOrderSuggestDeliveryTimeGetGet(request: QianchuanAwemeUniPromotionOrderSuggestDeliveryTimeGetV10ApiOpenApiV10QianchuanAwemeUniPromotionOrderSuggestDeliveryTimeGetGetRequest): Promise<QianchuanAwemeUniPromotionOrderSuggestDeliveryTimeGetV10Response> {
    const response = await this.openApiV10QianchuanAwemeUniPromotionOrderSuggestDeliveryTimeGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanAwemeUniPromotionOrderSuggestDeliveryTimeGetGetWithHttpInfo(request: QianchuanAwemeUniPromotionOrderSuggestDeliveryTimeGetV10ApiOpenApiV10QianchuanAwemeUniPromotionOrderSuggestDeliveryTimeGetGetRequest): Promise<ApiResponse<QianchuanAwemeUniPromotionOrderSuggestDeliveryTimeGetV10Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("advertiserId is required and must be specified");
    }

    if (request.advertiserId != null && Number(request.advertiserId) < 1) {
      throw new ApiException("advertiserId must be greater than 1");
    }

    if (request.orderId == null) {
      throw new ApiException("orderId is required and must be specified");
    }

    if (request.addAmount == null) {
      throw new ApiException("addAmount is required and must be specified");
    }

    if (request.addAmount != null && Number(request.addAmount) < 100) {
      throw new ApiException("addAmount must be greater than 100");
    }

    if (request.addAmount != null && Number(request.addAmount) > 10000) {
      throw new ApiException("addAmount must be less than 10000");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanAwemeUniPromotionOrderSuggestDeliveryTimeGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/aweme/uni_promotion/order/suggest/delivery_time/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "order_id", value: request.orderId },
        { name: "add_amount", value: request.addAmount }
      ]
    });
  }
}


