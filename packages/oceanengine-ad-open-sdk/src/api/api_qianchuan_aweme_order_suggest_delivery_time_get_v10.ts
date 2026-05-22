// Generated from oceanengine/ad_open_sdk_go api/api_qianchuan_aweme_order_suggest_delivery_time_get_v10.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { QianchuanAwemeOrderSuggestDeliveryTimeGetV10Response } from "../models/index";


export interface QianchuanAwemeOrderSuggestDeliveryTimeGetV10ApiOpenApiV10QianchuanAwemeOrderSuggestDeliveryTimeGetGetRequest {
  advertiserId: number | string;
  orderId: number | string;
  addAmount: number;
}

export class QianchuanAwemeOrderSuggestDeliveryTimeGetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanAwemeOrderSuggestDeliveryTimeGetGet(request: QianchuanAwemeOrderSuggestDeliveryTimeGetV10ApiOpenApiV10QianchuanAwemeOrderSuggestDeliveryTimeGetGetRequest): Promise<QianchuanAwemeOrderSuggestDeliveryTimeGetV10Response> {
    const response = await this.openApiV10QianchuanAwemeOrderSuggestDeliveryTimeGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanAwemeOrderSuggestDeliveryTimeGetGetWithHttpInfo(request: QianchuanAwemeOrderSuggestDeliveryTimeGetV10ApiOpenApiV10QianchuanAwemeOrderSuggestDeliveryTimeGetGetRequest): Promise<ApiResponse<QianchuanAwemeOrderSuggestDeliveryTimeGetV10Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanAwemeOrderSuggestDeliveryTimeGetGet");
    }

    if (request.orderId == null) {
      throw new ApiException("Missing the required parameter 'orderId' when calling openApiV10QianchuanAwemeOrderSuggestDeliveryTimeGetGet");
    }

    if (request.addAmount == null) {
      throw new ApiException("Missing the required parameter 'addAmount' when calling openApiV10QianchuanAwemeOrderSuggestDeliveryTimeGetGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanAwemeOrderSuggestDeliveryTimeGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/aweme/order/suggest/delivery_time/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "order_id", value: request.orderId },
        { name: "add_amount", value: request.addAmount }
      ]
    });
  }
}


