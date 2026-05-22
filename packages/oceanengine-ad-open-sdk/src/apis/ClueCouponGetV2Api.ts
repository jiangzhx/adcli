// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ClueCouponGetV2ActivityTypes, ClueCouponGetV2IsDel, ClueCouponGetV2Response } from "../models";


export class ClueCouponGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ClueCouponGetGet(activityIds: number[], activityTypes: ClueCouponGetV2ActivityTypes[], advertiserId: number, endTime: string, isDel: ClueCouponGetV2IsDel, page: number, pageSize: number, startTime: string): Promise<ClueCouponGetV2Response> {
    const response = await this.openApi2ClueCouponGetGetWithHttpInfo(activityIds, activityTypes, advertiserId, endTime, isDel, page, pageSize, startTime);
    return response.data;
  }

  async openApi2ClueCouponGetGetWithHttpInfo(activityIds: number[], activityTypes: ClueCouponGetV2ActivityTypes[], advertiserId: number, endTime: string, isDel: ClueCouponGetV2IsDel, page: number, pageSize: number, startTime: string): Promise<ApiResponse<ClueCouponGetV2Response>> {

    return this.apiClient.requestWithHttpInfo<ClueCouponGetV2Response>({
      method: "GET",
      path: "/open_api/2/clue/coupon/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "end_time", value: endTime },
        { name: "is_del", value: isDel },
        { name: "page", value: page },
        { name: "page_size", value: pageSize },
        { name: "start_time", value: startTime },
        { name: "activity_ids", value: activityIds, collectionFormat: "multi" },
        { name: "activity_types", value: activityTypes, collectionFormat: "multi" }
      ]
    });
  }
}


