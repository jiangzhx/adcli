// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ClueCouponEmployeeGetV2Response } from "../models";


export class ClueCouponEmployeeGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ClueCouponEmployeeGetGet(advertiserId: number, page: number, pageSize: number): Promise<ClueCouponEmployeeGetV2Response> {
    const response = await this.openApi2ClueCouponEmployeeGetGetWithHttpInfo(advertiserId, page, pageSize);
    return response.data;
  }

  async openApi2ClueCouponEmployeeGetGetWithHttpInfo(advertiserId: number, page: number, pageSize: number): Promise<ApiResponse<ClueCouponEmployeeGetV2Response>> {

    return this.apiClient.requestWithHttpInfo<ClueCouponEmployeeGetV2Response>({
      method: "GET",
      path: "/open_api/2/clue/coupon/employee/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "page", value: page },
        { name: "page_size", value: pageSize }
      ]
    });
  }
}


