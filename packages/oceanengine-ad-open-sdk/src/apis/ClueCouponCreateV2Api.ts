// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ClueCouponCreateV2Request, ClueCouponCreateV2Response } from "../models";


export class ClueCouponCreateV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ClueCouponCreatePost(request: ClueCouponCreateV2Request): Promise<ClueCouponCreateV2Response> {
    const response = await this.openApi2ClueCouponCreatePostWithHttpInfo(request);
    return response.data;
  }

  async openApi2ClueCouponCreatePostWithHttpInfo(request: ClueCouponCreateV2Request): Promise<ApiResponse<ClueCouponCreateV2Response>> {
    return this.apiClient.requestWithHttpInfo<ClueCouponCreateV2Response>({
      method: "POST",
      path: "/open_api/2/clue/coupon/create/",
      queryParams: [

      ],
      body: request
    });
  }
}


