// Generated from oceanengine/ad_open_sdk_go api/api_clue_coupon_detail_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ClueCouponDetailV2Response } from "../models/index";


export interface ClueCouponDetailV2ApiOpenApi2ClueCouponDetailGetRequest {
  activityId?: number | string;
  advertiserId?: number | string;
}

export class ClueCouponDetailV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ClueCouponDetailGet(request: ClueCouponDetailV2ApiOpenApi2ClueCouponDetailGetRequest): Promise<ClueCouponDetailV2Response> {
    const response = await this.openApi2ClueCouponDetailGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2ClueCouponDetailGetWithHttpInfo(request: ClueCouponDetailV2ApiOpenApi2ClueCouponDetailGetRequest): Promise<ApiResponse<ClueCouponDetailV2Response>> {

    return this.apiClient.requestWithHttpInfo<ClueCouponDetailV2Response>({
      method: "GET",
      path: "/open_api/2/clue/coupon/detail/",
      queryParams: [
        { name: "activity_id", value: request.activityId },
        { name: "advertiser_id", value: request.advertiserId }
      ]
    });
  }
}


