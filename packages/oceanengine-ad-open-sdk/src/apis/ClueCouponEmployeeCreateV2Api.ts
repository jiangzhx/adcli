// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ClueCouponEmployeeCreateV2Request, ClueCouponEmployeeCreateV2Response } from "../models";


export interface OpenApi2ClueCouponEmployeeCreatePostRequest {
  clueCouponEmployeeCreateV2Request?: ClueCouponEmployeeCreateV2Request;
}

export class ClueCouponEmployeeCreateV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ClueCouponEmployeeCreatePost(request: OpenApi2ClueCouponEmployeeCreatePostRequest): Promise<ClueCouponEmployeeCreateV2Response> {
    const response = await this.openApi2ClueCouponEmployeeCreatePostWithHttpInfo(request);
    return response.data;
  }

  async openApi2ClueCouponEmployeeCreatePostWithHttpInfo(request: OpenApi2ClueCouponEmployeeCreatePostRequest): Promise<ApiResponse<ClueCouponEmployeeCreateV2Response>> {

    return this.apiClient.requestWithHttpInfo<ClueCouponEmployeeCreateV2Response>({
      method: "POST",
      path: "/open_api/2/clue/coupon/employee/create/",
      queryParams: [

      ],
      body: request.clueCouponEmployeeCreateV2Request
    });
  }
}


