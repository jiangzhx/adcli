// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QianchuanAwemeOrderDetailGetV10Response } from "../models";


export interface OpenApiV10QianchuanAwemeOrderDetailGetGetRequest {
  orderId: number | string;
  advertiserId: number | string;
}

export class QianchuanAwemeOrderDetailGetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanAwemeOrderDetailGetGet(request: OpenApiV10QianchuanAwemeOrderDetailGetGetRequest): Promise<QianchuanAwemeOrderDetailGetV10Response> {
    const response = await this.openApiV10QianchuanAwemeOrderDetailGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanAwemeOrderDetailGetGetWithHttpInfo(request: OpenApiV10QianchuanAwemeOrderDetailGetGetRequest): Promise<ApiResponse<QianchuanAwemeOrderDetailGetV10Response>> {
    if (request.orderId == null) {
      throw new ApiException("Missing the required parameter 'orderId' when calling openApiV10QianchuanAwemeOrderDetailGetGet");
    }

    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanAwemeOrderDetailGetGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanAwemeOrderDetailGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/aweme/order/detail/get/",
      queryParams: [
        { name: "order_id", value: request.orderId },
        { name: "advertiser_id", value: request.advertiserId }
      ]
    });
  }
}


