// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ClueCouponUpdateV2Request, ClueCouponUpdateV2Response } from "../models";


export class ClueCouponUpdateV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ClueCouponUpdatePost(clueCouponUpdateV2Request: ClueCouponUpdateV2Request): Promise<ClueCouponUpdateV2Response> {
    const response = await this.openApi2ClueCouponUpdatePostWithHttpInfo(clueCouponUpdateV2Request);
    return response.data;
  }

  async openApi2ClueCouponUpdatePostWithHttpInfo(clueCouponUpdateV2Request: ClueCouponUpdateV2Request): Promise<ApiResponse<ClueCouponUpdateV2Response>> {

    return this.apiClient.requestWithHttpInfo<ClueCouponUpdateV2Response>({
      method: "POST",
      path: "/open_api/2/clue/coupon/update/",
      queryParams: [

      ],
      body: clueCouponUpdateV2Request
    });
  }
}


