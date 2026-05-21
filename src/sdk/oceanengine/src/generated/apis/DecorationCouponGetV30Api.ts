// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { DecorationCouponGetV30Filtering, DecorationCouponGetV30Response } from "../models";


export class DecorationCouponGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30DecorationCouponGetGet(advertiserId: number, filtering: DecorationCouponGetV30Filtering, page: number, pageSize: number): Promise<DecorationCouponGetV30Response> {
    const response = await this.openApiV30DecorationCouponGetGetWithHttpInfo(advertiserId, filtering, page, pageSize);
    return response.data;
  }

  async openApiV30DecorationCouponGetGetWithHttpInfo(advertiserId: number, filtering: DecorationCouponGetV30Filtering, page: number, pageSize: number): Promise<ApiResponse<DecorationCouponGetV30Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30DecorationCouponGetGet");
    }
    return this.apiClient.requestWithHttpInfo<DecorationCouponGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/decoration/coupon/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "filtering", value: filtering },
        { name: "page", value: page },
        { name: "page_size", value: pageSize }
      ]
    });
  }
}


