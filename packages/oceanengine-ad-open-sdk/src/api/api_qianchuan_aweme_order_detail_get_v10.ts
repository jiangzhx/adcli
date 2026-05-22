// Generated from oceanengine/ad_open_sdk_go api/api_qianchuan_aweme_order_detail_get_v10.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { QianchuanAwemeOrderDetailGetV10Response } from "../models/index";


export interface QianchuanAwemeOrderDetailGetV10ApiOpenApiV10QianchuanAwemeOrderDetailGetGetRequest {
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

  async openApiV10QianchuanAwemeOrderDetailGetGet(request: QianchuanAwemeOrderDetailGetV10ApiOpenApiV10QianchuanAwemeOrderDetailGetGetRequest): Promise<QianchuanAwemeOrderDetailGetV10Response> {
    const response = await this.openApiV10QianchuanAwemeOrderDetailGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanAwemeOrderDetailGetGetWithHttpInfo(request: QianchuanAwemeOrderDetailGetV10ApiOpenApiV10QianchuanAwemeOrderDetailGetGetRequest): Promise<ApiResponse<QianchuanAwemeOrderDetailGetV10Response>> {
    if (request.orderId == null) {
      throw new ApiException("orderId is required and must be specified");
    }

    if (request.advertiserId == null) {
      throw new ApiException("advertiserId is required and must be specified");
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


