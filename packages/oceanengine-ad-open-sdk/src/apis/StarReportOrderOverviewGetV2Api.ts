// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { StarReportOrderOverviewGetV2Response } from "../models";


export class StarReportOrderOverviewGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarReportOrderOverviewGetGet(orderId: number, starId: number): Promise<StarReportOrderOverviewGetV2Response> {
    const response = await this.openApi2StarReportOrderOverviewGetGetWithHttpInfo(orderId, starId);
    return response.data;
  }

  async openApi2StarReportOrderOverviewGetGetWithHttpInfo(orderId: number, starId: number): Promise<ApiResponse<StarReportOrderOverviewGetV2Response>> {
    if (orderId == null) {
      throw new ApiException("Missing the required parameter 'orderId' when calling openApi2StarReportOrderOverviewGetGet");
    }

    if (starId == null) {
      throw new ApiException("Missing the required parameter 'starId' when calling openApi2StarReportOrderOverviewGetGet");
    }
    return this.apiClient.requestWithHttpInfo<StarReportOrderOverviewGetV2Response>({
      method: "GET",
      path: "/open_api/2/star/report/order_overview/get/",
      queryParams: [
        { name: "order_id", value: orderId },
        { name: "star_id", value: starId }
      ]
    });
  }
}


