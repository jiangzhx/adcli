// Generated from oceanengine/ad_open_sdk_go api/api_decoration_coupon_get_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { DecorationCouponGetV30Filtering, DecorationCouponGetV30Response } from "../models/index";


export interface DecorationCouponGetV30ApiOpenApiV30DecorationCouponGetGetRequest {
  advertiserId: number | string;
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

  async openApiV30DecorationCouponGetGet(request: DecorationCouponGetV30ApiOpenApiV30DecorationCouponGetGetRequest): Promise<DecorationCouponGetV30Response> {
    const response = await this.openApiV30DecorationCouponGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30DecorationCouponGetGetWithHttpInfo(request: DecorationCouponGetV30ApiOpenApiV30DecorationCouponGetGetRequest): Promise<ApiResponse<DecorationCouponGetV30Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("advertiserId is required and must be specified");
    }

    if (request.advertiserId != null && Number(request.advertiserId) < 1) {
      throw new ApiException("advertiserId must be greater than 1");
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


