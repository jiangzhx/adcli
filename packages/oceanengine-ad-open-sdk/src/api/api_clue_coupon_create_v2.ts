// Generated from oceanengine/ad_open_sdk_go api/api_clue_coupon_create_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ClueCouponCreateV2Request, ClueCouponCreateV2Response } from "../models/index";


export interface ClueCouponCreateV2ApiOpenApi2ClueCouponCreatePostRequest {
  clueCouponCreateV2Request?: ClueCouponCreateV2Request;
}

export class ClueCouponCreateV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ClueCouponCreatePost(request: ClueCouponCreateV2ApiOpenApi2ClueCouponCreatePostRequest): Promise<ClueCouponCreateV2Response> {
    const response = await this.openApi2ClueCouponCreatePostWithHttpInfo(request);
    return response.data;
  }

  async openApi2ClueCouponCreatePostWithHttpInfo(request: ClueCouponCreateV2ApiOpenApi2ClueCouponCreatePostRequest): Promise<ApiResponse<ClueCouponCreateV2Response>> {

    return this.apiClient.requestWithHttpInfo<ClueCouponCreateV2Response>({
      method: "POST",
      path: "/open_api/2/clue/coupon/create/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.clueCouponCreateV2Request
    });
  }
}


