// Generated from oceanengine/ad_open_sdk_go api/api_clue_coupon_employee_create_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ClueCouponEmployeeCreateV2Request, ClueCouponEmployeeCreateV2Response } from "../models/index";


export interface ClueCouponEmployeeCreateV2ApiOpenApi2ClueCouponEmployeeCreatePostRequest {
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

  async openApi2ClueCouponEmployeeCreatePost(request: ClueCouponEmployeeCreateV2ApiOpenApi2ClueCouponEmployeeCreatePostRequest): Promise<ClueCouponEmployeeCreateV2Response> {
    const response = await this.openApi2ClueCouponEmployeeCreatePostWithHttpInfo(request);
    return response.data;
  }

  async openApi2ClueCouponEmployeeCreatePostWithHttpInfo(request: ClueCouponEmployeeCreateV2ApiOpenApi2ClueCouponEmployeeCreatePostRequest): Promise<ApiResponse<ClueCouponEmployeeCreateV2Response>> {

    return this.apiClient.requestWithHttpInfo<ClueCouponEmployeeCreateV2Response>({
      method: "POST",
      path: "/open_api/2/clue/coupon/employee/create/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.clueCouponEmployeeCreateV2Request
    });
  }
}


