// Generated from oceanengine/ad_open_sdk_go api/api_qianchuan_carousel_get_v10.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { QianchuanCarouselGetV10Filtering, QianchuanCarouselGetV10OrderType, QianchuanCarouselGetV10Response } from "../models/index";


export interface QianchuanCarouselGetV10ApiOpenApiV10QianchuanCarouselGetGetRequest {
  advertiserId: number | string;
  filtering?: QianchuanCarouselGetV10Filtering;
  orderField?: string;
  orderType?: QianchuanCarouselGetV10OrderType;
  pageSize?: number;
  page?: number;
}

export class QianchuanCarouselGetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanCarouselGetGet(request: QianchuanCarouselGetV10ApiOpenApiV10QianchuanCarouselGetGetRequest): Promise<QianchuanCarouselGetV10Response> {
    const response = await this.openApiV10QianchuanCarouselGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanCarouselGetGetWithHttpInfo(request: QianchuanCarouselGetV10ApiOpenApiV10QianchuanCarouselGetGetRequest): Promise<ApiResponse<QianchuanCarouselGetV10Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanCarouselGetGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanCarouselGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/carousel/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "filtering", value: request.filtering },
        { name: "order_field", value: request.orderField },
        { name: "order_type", value: request.orderType },
        { name: "page_size", value: request.pageSize },
        { name: "page", value: request.page }
      ]
    });
  }
}


