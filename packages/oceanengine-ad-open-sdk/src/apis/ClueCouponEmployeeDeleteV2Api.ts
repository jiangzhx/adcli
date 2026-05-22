// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ClueCouponEmployeeDeleteV2Request, ClueCouponEmployeeDeleteV2Response } from "../models";


export class ClueCouponEmployeeDeleteV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ClueCouponEmployeeDeletePost(clueCouponEmployeeDeleteV2Request: ClueCouponEmployeeDeleteV2Request): Promise<ClueCouponEmployeeDeleteV2Response> {
    const response = await this.openApi2ClueCouponEmployeeDeletePostWithHttpInfo(clueCouponEmployeeDeleteV2Request);
    return response.data;
  }

  async openApi2ClueCouponEmployeeDeletePostWithHttpInfo(clueCouponEmployeeDeleteV2Request: ClueCouponEmployeeDeleteV2Request): Promise<ApiResponse<ClueCouponEmployeeDeleteV2Response>> {

    return this.apiClient.requestWithHttpInfo<ClueCouponEmployeeDeleteV2Response>({
      method: "POST",
      path: "/open_api/2/clue/coupon/employee/delete/",
      queryParams: [

      ],
      body: clueCouponEmployeeDeleteV2Request
    });
  }
}


