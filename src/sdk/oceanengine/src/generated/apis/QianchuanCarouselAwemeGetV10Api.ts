// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { QianchuanCarouselAwemeGetV10Filtering, QianchuanCarouselAwemeGetV10OrderField, QianchuanCarouselAwemeGetV10OrderType, QianchuanCarouselAwemeGetV10Response } from "../models";


export class QianchuanCarouselAwemeGetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanCarouselAwemeGetGet(advertiserId: number, awemeId: number, filtering: QianchuanCarouselAwemeGetV10Filtering, cursor: number, count: number, orderField: QianchuanCarouselAwemeGetV10OrderField, orderType: QianchuanCarouselAwemeGetV10OrderType): Promise<QianchuanCarouselAwemeGetV10Response> {
    const response = await this.openApiV10QianchuanCarouselAwemeGetGetWithHttpInfo(advertiserId, awemeId, filtering, cursor, count, orderField, orderType);
    return response.data;
  }

  async openApiV10QianchuanCarouselAwemeGetGetWithHttpInfo(advertiserId: number, awemeId: number, filtering: QianchuanCarouselAwemeGetV10Filtering, cursor: number, count: number, orderField: QianchuanCarouselAwemeGetV10OrderField, orderType: QianchuanCarouselAwemeGetV10OrderType): Promise<ApiResponse<QianchuanCarouselAwemeGetV10Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanCarouselAwemeGetGet");
    }

    if (awemeId == null) {
      throw new ApiException("Missing the required parameter 'awemeId' when calling openApiV10QianchuanCarouselAwemeGetGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanCarouselAwemeGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/carousel/aweme/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "aweme_id", value: awemeId },
        { name: "filtering", value: filtering },
        { name: "cursor", value: cursor },
        { name: "count", value: count },
        { name: "order_field", value: orderField },
        { name: "order_type", value: orderType }
      ]
    });
  }
}


