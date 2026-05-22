// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ClueCouponCodeGetV2Response, ClueCouponCodeGetV2Status } from "../models";


export class ClueCouponCodeGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ClueCouponCodeGetGet(activityId: number, advertiserId: number, couponId: number, endTime: string, page: number, pageSize: number, resourceId: number, startTime: string, status: ClueCouponCodeGetV2Status): Promise<ClueCouponCodeGetV2Response> {
    const response = await this.openApi2ClueCouponCodeGetGetWithHttpInfo(activityId, advertiserId, couponId, endTime, page, pageSize, resourceId, startTime, status);
    return response.data;
  }

  async openApi2ClueCouponCodeGetGetWithHttpInfo(activityId: number, advertiserId: number, couponId: number, endTime: string, page: number, pageSize: number, resourceId: number, startTime: string, status: ClueCouponCodeGetV2Status): Promise<ApiResponse<ClueCouponCodeGetV2Response>> {

    return this.apiClient.requestWithHttpInfo<ClueCouponCodeGetV2Response>({
      method: "GET",
      path: "/open_api/2/clue/coupon/code/get/",
      queryParams: [
        { name: "activity_id", value: activityId },
        { name: "advertiser_id", value: advertiserId },
        { name: "coupon_id", value: couponId },
        { name: "end_time", value: endTime },
        { name: "page", value: page },
        { name: "page_size", value: pageSize },
        { name: "resource_id", value: resourceId },
        { name: "start_time", value: startTime },
        { name: "status", value: status }
      ]
    });
  }
}


