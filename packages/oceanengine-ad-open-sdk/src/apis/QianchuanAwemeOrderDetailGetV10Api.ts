// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QianchuanAwemeOrderDetailGetV10Response } from "../models";


export class QianchuanAwemeOrderDetailGetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanAwemeOrderDetailGetGet(orderId: number, advertiserId: number): Promise<QianchuanAwemeOrderDetailGetV10Response> {
    const response = await this.openApiV10QianchuanAwemeOrderDetailGetGetWithHttpInfo(orderId, advertiserId);
    return response.data;
  }

  async openApiV10QianchuanAwemeOrderDetailGetGetWithHttpInfo(orderId: number, advertiserId: number): Promise<ApiResponse<QianchuanAwemeOrderDetailGetV10Response>> {
    if (orderId == null) {
      throw new ApiException("Missing the required parameter 'orderId' when calling openApiV10QianchuanAwemeOrderDetailGetGet");
    }

    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanAwemeOrderDetailGetGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanAwemeOrderDetailGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/aweme/order/detail/get/",
      queryParams: [
        { name: "order_id", value: orderId },
        { name: "advertiser_id", value: advertiserId }
      ]
    });
  }
}


