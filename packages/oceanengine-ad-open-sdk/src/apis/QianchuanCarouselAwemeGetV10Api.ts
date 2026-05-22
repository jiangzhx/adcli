// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QianchuanCarouselAwemeGetV10Filtering, QianchuanCarouselAwemeGetV10OrderField, QianchuanCarouselAwemeGetV10OrderType, QianchuanCarouselAwemeGetV10Response } from "../models";


export interface OpenApiV10QianchuanCarouselAwemeGetGetRequest {
  advertiserId: number | string;
  awemeId: number | string;
  filtering?: QianchuanCarouselAwemeGetV10Filtering;
  cursor?: number;
  count?: number;
  orderField?: QianchuanCarouselAwemeGetV10OrderField;
  orderType?: QianchuanCarouselAwemeGetV10OrderType;
}

export class QianchuanCarouselAwemeGetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanCarouselAwemeGetGet(request: OpenApiV10QianchuanCarouselAwemeGetGetRequest): Promise<QianchuanCarouselAwemeGetV10Response> {
    const response = await this.openApiV10QianchuanCarouselAwemeGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanCarouselAwemeGetGetWithHttpInfo(request: OpenApiV10QianchuanCarouselAwemeGetGetRequest): Promise<ApiResponse<QianchuanCarouselAwemeGetV10Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanCarouselAwemeGetGet");
    }

    if (request.awemeId == null) {
      throw new ApiException("Missing the required parameter 'awemeId' when calling openApiV10QianchuanCarouselAwemeGetGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanCarouselAwemeGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/carousel/aweme/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "aweme_id", value: request.awemeId },
        { name: "filtering", value: request.filtering },
        { name: "cursor", value: request.cursor },
        { name: "count", value: request.count },
        { name: "order_field", value: request.orderField },
        { name: "order_type", value: request.orderType }
      ]
    });
  }
}


