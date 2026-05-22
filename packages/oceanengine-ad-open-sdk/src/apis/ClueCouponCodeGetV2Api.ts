// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ClueCouponCodeGetV2Response, ClueCouponCodeGetV2Status } from "../models";


export interface OpenApi2ClueCouponCodeGetGetRequest {
  activityId?: number;
  advertiserId?: number;
  couponId?: number;
  endTime?: string;
  page?: number;
  pageSize?: number;
  resourceId?: number;
  startTime?: string;
  status?: ClueCouponCodeGetV2Status;
}

export class ClueCouponCodeGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ClueCouponCodeGetGet(request: OpenApi2ClueCouponCodeGetGetRequest): Promise<ClueCouponCodeGetV2Response> {
    const response = await this.openApi2ClueCouponCodeGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2ClueCouponCodeGetGetWithHttpInfo(request: OpenApi2ClueCouponCodeGetGetRequest): Promise<ApiResponse<ClueCouponCodeGetV2Response>> {

    return this.apiClient.requestWithHttpInfo<ClueCouponCodeGetV2Response>({
      method: "GET",
      path: "/open_api/2/clue/coupon/code/get/",
      queryParams: [
        { name: "activity_id", value: request.activityId },
        { name: "advertiser_id", value: request.advertiserId },
        { name: "coupon_id", value: request.couponId },
        { name: "end_time", value: request.endTime },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize },
        { name: "resource_id", value: request.resourceId },
        { name: "start_time", value: request.startTime },
        { name: "status", value: request.status }
      ]
    });
  }
}


