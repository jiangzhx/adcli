// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ClueCouponDetailV2Response } from "../models";


export class ClueCouponDetailV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ClueCouponDetailGet(activityId: number, advertiserId: number): Promise<ClueCouponDetailV2Response> {
    const response = await this.openApi2ClueCouponDetailGetWithHttpInfo(activityId, advertiserId);
    return response.data;
  }

  async openApi2ClueCouponDetailGetWithHttpInfo(activityId: number, advertiserId: number): Promise<ApiResponse<ClueCouponDetailV2Response>> {

    return this.apiClient.requestWithHttpInfo<ClueCouponDetailV2Response>({
      method: "GET",
      path: "/open_api/2/clue/coupon/detail/",
      queryParams: [
        { name: "activity_id", value: activityId },
        { name: "advertiser_id", value: advertiserId }
      ]
    });
  }
}


