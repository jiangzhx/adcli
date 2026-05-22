// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QianchuanAwemeOrderSuggestDeliveryTimeGetV10Response } from "../models";


export interface OpenApiV10QianchuanAwemeOrderSuggestDeliveryTimeGetGetRequest {
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

  async openApiV10QianchuanAwemeOrderSuggestDeliveryTimeGetGet(request: OpenApiV10QianchuanAwemeOrderSuggestDeliveryTimeGetGetRequest): Promise<QianchuanAwemeOrderSuggestDeliveryTimeGetV10Response> {
    const response = await this.openApiV10QianchuanAwemeOrderSuggestDeliveryTimeGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanAwemeOrderSuggestDeliveryTimeGetGetWithHttpInfo(request: OpenApiV10QianchuanAwemeOrderSuggestDeliveryTimeGetGetRequest): Promise<ApiResponse<QianchuanAwemeOrderSuggestDeliveryTimeGetV10Response>> {
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


