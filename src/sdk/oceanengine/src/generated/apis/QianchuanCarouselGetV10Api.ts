// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { QianchuanCarouselGetV10Filtering, QianchuanCarouselGetV10OrderType, QianchuanCarouselGetV10Response } from "../models";


export class QianchuanCarouselGetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanCarouselGetGet(advertiserId: number, filtering: QianchuanCarouselGetV10Filtering, orderField: string, orderType: QianchuanCarouselGetV10OrderType, pageSize: number, page: number): Promise<QianchuanCarouselGetV10Response> {
    const response = await this.openApiV10QianchuanCarouselGetGetWithHttpInfo(advertiserId, filtering, orderField, orderType, pageSize, page);
    return response.data;
  }

  async openApiV10QianchuanCarouselGetGetWithHttpInfo(advertiserId: number, filtering: QianchuanCarouselGetV10Filtering, orderField: string, orderType: QianchuanCarouselGetV10OrderType, pageSize: number, page: number): Promise<ApiResponse<QianchuanCarouselGetV10Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanCarouselGetGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanCarouselGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/carousel/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "filtering", value: filtering },
        { name: "order_field", value: orderField },
        { name: "order_type", value: orderType },
        { name: "page_size", value: pageSize },
        { name: "page", value: page }
      ]
    });
  }
}


