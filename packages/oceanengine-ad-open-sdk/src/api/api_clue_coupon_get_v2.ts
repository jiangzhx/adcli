// Generated from oceanengine/ad_open_sdk_go api/api_clue_coupon_get_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ClueCouponGetV2ActivityTypes, ClueCouponGetV2IsDel, ClueCouponGetV2Response } from "../models/index";


export interface ClueCouponGetV2ApiOpenApi2ClueCouponGetGetRequest {
  activityIds?: number | string[];
  activityTypes?: ClueCouponGetV2ActivityTypes[];
  advertiserId?: number | string;
  endTime?: string;
  isDel?: ClueCouponGetV2IsDel;
  page?: number;
  pageSize?: number;
  startTime?: string;
}

export class ClueCouponGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ClueCouponGetGet(request: ClueCouponGetV2ApiOpenApi2ClueCouponGetGetRequest): Promise<ClueCouponGetV2Response> {
    const response = await this.openApi2ClueCouponGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2ClueCouponGetGetWithHttpInfo(request: ClueCouponGetV2ApiOpenApi2ClueCouponGetGetRequest): Promise<ApiResponse<ClueCouponGetV2Response>> {

    return this.apiClient.requestWithHttpInfo<ClueCouponGetV2Response>({
      method: "GET",
      path: "/open_api/2/clue/coupon/get/",
      queryParams: [
        { name: "activity_ids", value: request.activityIds },
        { name: "activity_types", value: request.activityTypes },
        { name: "advertiser_id", value: request.advertiserId },
        { name: "end_time", value: request.endTime },
        { name: "is_del", value: request.isDel },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize },
        { name: "start_time", value: request.startTime }
      ]
    });
  }
}


