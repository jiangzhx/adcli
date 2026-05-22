// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ClueCouponCodeConsumeV2Request, ClueCouponCodeConsumeV2Response } from "../models";


export class ClueCouponCodeConsumeV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ClueCouponCodeConsumePost(request: ClueCouponCodeConsumeV2Request): Promise<ClueCouponCodeConsumeV2Response> {
    const response = await this.openApi2ClueCouponCodeConsumePostWithHttpInfo(request);
    return response.data;
  }

  async openApi2ClueCouponCodeConsumePostWithHttpInfo(request: ClueCouponCodeConsumeV2Request): Promise<ApiResponse<ClueCouponCodeConsumeV2Response>> {
    return this.apiClient.requestWithHttpInfo<ClueCouponCodeConsumeV2Response>({
      method: "POST",
      path: "/open_api/2/clue/coupon/code/consume/",
      queryParams: [

      ],
      body: request
    });
  }
}


