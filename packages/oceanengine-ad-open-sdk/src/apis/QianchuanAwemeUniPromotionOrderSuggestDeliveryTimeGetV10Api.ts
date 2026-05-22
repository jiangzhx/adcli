// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QianchuanAwemeUniPromotionOrderSuggestDeliveryTimeGetV10Response } from "../models";


export interface OpenApiV10QianchuanAwemeUniPromotionOrderSuggestDeliveryTimeGetGetRequest {
  advertiserId: number;
  orderId: number;
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

  async openApiV10QianchuanAwemeUniPromotionOrderSuggestDeliveryTimeGetGet(request: OpenApiV10QianchuanAwemeUniPromotionOrderSuggestDeliveryTimeGetGetRequest): Promise<QianchuanAwemeUniPromotionOrderSuggestDeliveryTimeGetV10Response> {
    const response = await this.openApiV10QianchuanAwemeUniPromotionOrderSuggestDeliveryTimeGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanAwemeUniPromotionOrderSuggestDeliveryTimeGetGetWithHttpInfo(request: OpenApiV10QianchuanAwemeUniPromotionOrderSuggestDeliveryTimeGetGetRequest): Promise<ApiResponse<QianchuanAwemeUniPromotionOrderSuggestDeliveryTimeGetV10Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanAwemeUniPromotionOrderSuggestDeliveryTimeGetGet");
    }

    if (request.orderId == null) {
      throw new ApiException("Missing the required parameter 'orderId' when calling openApiV10QianchuanAwemeUniPromotionOrderSuggestDeliveryTimeGetGet");
    }

    if (request.addAmount == null) {
      throw new ApiException("Missing the required parameter 'addAmount' when calling openApiV10QianchuanAwemeUniPromotionOrderSuggestDeliveryTimeGetGet");
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


