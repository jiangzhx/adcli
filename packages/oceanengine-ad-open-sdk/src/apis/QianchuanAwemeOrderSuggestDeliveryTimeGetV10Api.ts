// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QianchuanAwemeOrderSuggestDeliveryTimeGetV10Response } from "../models";


export class QianchuanAwemeOrderSuggestDeliveryTimeGetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanAwemeOrderSuggestDeliveryTimeGetGet(advertiserId: number, orderId: number, addAmount: number): Promise<QianchuanAwemeOrderSuggestDeliveryTimeGetV10Response> {
    const response = await this.openApiV10QianchuanAwemeOrderSuggestDeliveryTimeGetGetWithHttpInfo(advertiserId, orderId, addAmount);
    return response.data;
  }

  async openApiV10QianchuanAwemeOrderSuggestDeliveryTimeGetGetWithHttpInfo(advertiserId: number, orderId: number, addAmount: number): Promise<ApiResponse<QianchuanAwemeOrderSuggestDeliveryTimeGetV10Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanAwemeOrderSuggestDeliveryTimeGetGet");
    }

    if (orderId == null) {
      throw new ApiException("Missing the required parameter 'orderId' when calling openApiV10QianchuanAwemeOrderSuggestDeliveryTimeGetGet");
    }

    if (addAmount == null) {
      throw new ApiException("Missing the required parameter 'addAmount' when calling openApiV10QianchuanAwemeOrderSuggestDeliveryTimeGetGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanAwemeOrderSuggestDeliveryTimeGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/aweme/order/suggest/delivery_time/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "order_id", value: orderId },
        { name: "add_amount", value: addAmount }
      ]
    });
  }
}


