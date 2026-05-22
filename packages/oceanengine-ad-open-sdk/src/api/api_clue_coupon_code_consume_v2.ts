// Generated from oceanengine/ad_open_sdk_go api/api_clue_coupon_code_consume_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ClueCouponCodeConsumeV2Request, ClueCouponCodeConsumeV2Response } from "../models/index";


export interface ClueCouponCodeConsumeV2ApiOpenApi2ClueCouponCodeConsumePostRequest {
  clueCouponCodeConsumeV2Request?: ClueCouponCodeConsumeV2Request;
}

export class ClueCouponCodeConsumeV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ClueCouponCodeConsumePost(request: ClueCouponCodeConsumeV2ApiOpenApi2ClueCouponCodeConsumePostRequest): Promise<ClueCouponCodeConsumeV2Response> {
    const response = await this.openApi2ClueCouponCodeConsumePostWithHttpInfo(request);
    return response.data;
  }

  async openApi2ClueCouponCodeConsumePostWithHttpInfo(request: ClueCouponCodeConsumeV2ApiOpenApi2ClueCouponCodeConsumePostRequest): Promise<ApiResponse<ClueCouponCodeConsumeV2Response>> {

    return this.apiClient.requestWithHttpInfo<ClueCouponCodeConsumeV2Response>({
      method: "POST",
      path: "/open_api/2/clue/coupon/code/consume/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.clueCouponCodeConsumeV2Request
    });
  }
}


