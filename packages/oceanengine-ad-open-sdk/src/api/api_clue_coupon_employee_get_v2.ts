// Generated from oceanengine/ad_open_sdk_go api/api_clue_coupon_employee_get_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ClueCouponEmployeeGetV2Response } from "../models/index";


export interface ClueCouponEmployeeGetV2ApiOpenApi2ClueCouponEmployeeGetGetRequest {
  advertiserId?: number | string;
  page?: number;
  pageSize?: number;
}

export class ClueCouponEmployeeGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ClueCouponEmployeeGetGet(request: ClueCouponEmployeeGetV2ApiOpenApi2ClueCouponEmployeeGetGetRequest): Promise<ClueCouponEmployeeGetV2Response> {
    const response = await this.openApi2ClueCouponEmployeeGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2ClueCouponEmployeeGetGetWithHttpInfo(request: ClueCouponEmployeeGetV2ApiOpenApi2ClueCouponEmployeeGetGetRequest): Promise<ApiResponse<ClueCouponEmployeeGetV2Response>> {

    return this.apiClient.requestWithHttpInfo<ClueCouponEmployeeGetV2Response>({
      method: "GET",
      path: "/open_api/2/clue/coupon/employee/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


