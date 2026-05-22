// Generated from oceanengine/ad_open_sdk_go api/api_clue_coupon_update_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ClueCouponUpdateV2Request, ClueCouponUpdateV2Response } from "../models/index";


export interface ClueCouponUpdateV2ApiOpenApi2ClueCouponUpdatePostRequest {
  clueCouponUpdateV2Request?: ClueCouponUpdateV2Request;
}

export class ClueCouponUpdateV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ClueCouponUpdatePost(request: ClueCouponUpdateV2ApiOpenApi2ClueCouponUpdatePostRequest): Promise<ClueCouponUpdateV2Response> {
    const response = await this.openApi2ClueCouponUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApi2ClueCouponUpdatePostWithHttpInfo(request: ClueCouponUpdateV2ApiOpenApi2ClueCouponUpdatePostRequest): Promise<ApiResponse<ClueCouponUpdateV2Response>> {

    return this.apiClient.requestWithHttpInfo<ClueCouponUpdateV2Response>({
      method: "POST",
      path: "/open_api/2/clue/coupon/update/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.clueCouponUpdateV2Request
    });
  }
}


