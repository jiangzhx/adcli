// Generated from oceanengine/ad_open_sdk_go api/api_clue_coupon_employee_delete_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ClueCouponEmployeeDeleteV2Request, ClueCouponEmployeeDeleteV2Response } from "../models/index";


export interface ClueCouponEmployeeDeleteV2ApiOpenApi2ClueCouponEmployeeDeletePostRequest {
  clueCouponEmployeeDeleteV2Request?: ClueCouponEmployeeDeleteV2Request;
}

export class ClueCouponEmployeeDeleteV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ClueCouponEmployeeDeletePost(request: ClueCouponEmployeeDeleteV2ApiOpenApi2ClueCouponEmployeeDeletePostRequest): Promise<ClueCouponEmployeeDeleteV2Response> {
    const response = await this.openApi2ClueCouponEmployeeDeletePostWithHttpInfo(request);
    return response.data;
  }

  async openApi2ClueCouponEmployeeDeletePostWithHttpInfo(request: ClueCouponEmployeeDeleteV2ApiOpenApi2ClueCouponEmployeeDeletePostRequest): Promise<ApiResponse<ClueCouponEmployeeDeleteV2Response>> {

    return this.apiClient.requestWithHttpInfo<ClueCouponEmployeeDeleteV2Response>({
      method: "POST",
      path: "/open_api/2/clue/coupon/employee/delete/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.clueCouponEmployeeDeleteV2Request
    });
  }
}


