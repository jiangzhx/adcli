// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { DecorationCouponGetV30Filtering, DecorationCouponGetV30Response } from "../models";


export interface OpenApiV30DecorationCouponGetGetRequest {
  advertiserId: number;
  filtering?: DecorationCouponGetV30Filtering;
  page?: number;
  pageSize?: number;
}

export class DecorationCouponGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30DecorationCouponGetGet(request: OpenApiV30DecorationCouponGetGetRequest): Promise<DecorationCouponGetV30Response> {
    const response = await this.openApiV30DecorationCouponGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30DecorationCouponGetGetWithHttpInfo(request: OpenApiV30DecorationCouponGetGetRequest): Promise<ApiResponse<DecorationCouponGetV30Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30DecorationCouponGetGet");
    }
    return this.apiClient.requestWithHttpInfo<DecorationCouponGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/decoration/coupon/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "filtering", value: request.filtering },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


