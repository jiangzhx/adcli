// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QianchuanAwemeUniPromotionOrderDetailV10Response } from "../models";


export interface OpenApiV10QianchuanAwemeUniPromotionOrderDetailGetRequest {
  advertiserId: number;
  orderId: number;
}

export class QianchuanAwemeUniPromotionOrderDetailV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanAwemeUniPromotionOrderDetailGet(request: OpenApiV10QianchuanAwemeUniPromotionOrderDetailGetRequest): Promise<QianchuanAwemeUniPromotionOrderDetailV10Response> {
    const response = await this.openApiV10QianchuanAwemeUniPromotionOrderDetailGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanAwemeUniPromotionOrderDetailGetWithHttpInfo(request: OpenApiV10QianchuanAwemeUniPromotionOrderDetailGetRequest): Promise<ApiResponse<QianchuanAwemeUniPromotionOrderDetailV10Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanAwemeUniPromotionOrderDetailGet");
    }

    if (request.orderId == null) {
      throw new ApiException("Missing the required parameter 'orderId' when calling openApiV10QianchuanAwemeUniPromotionOrderDetailGet");
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


