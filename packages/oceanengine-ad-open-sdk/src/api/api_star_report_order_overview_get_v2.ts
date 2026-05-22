// Generated from oceanengine/ad_open_sdk_go api/api_star_report_order_overview_get_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { StarReportOrderOverviewGetV2Response } from "../models/index";


export interface StarReportOrderOverviewGetV2ApiOpenApi2StarReportOrderOverviewGetGetRequest {
  orderId: number | string;
  starId: number | string;
}

export class StarReportOrderOverviewGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarReportOrderOverviewGetGet(request: StarReportOrderOverviewGetV2ApiOpenApi2StarReportOrderOverviewGetGetRequest): Promise<StarReportOrderOverviewGetV2Response> {
    const response = await this.openApi2StarReportOrderOverviewGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarReportOrderOverviewGetGetWithHttpInfo(request: StarReportOrderOverviewGetV2ApiOpenApi2StarReportOrderOverviewGetGetRequest): Promise<ApiResponse<StarReportOrderOverviewGetV2Response>> {
    if (request.orderId == null) {
      throw new ApiException("Missing the required parameter 'orderId' when calling openApi2StarReportOrderOverviewGetGet");
    }

    if (request.starId == null) {
      throw new ApiException("Missing the required parameter 'starId' when calling openApi2StarReportOrderOverviewGetGet");
    }
    return this.apiClient.requestWithHttpInfo<StarReportOrderOverviewGetV2Response>({
      method: "GET",
      path: "/open_api/2/star/report/order_overview/get/",
      queryParams: [
        { name: "order_id", value: request.orderId },
        { name: "star_id", value: request.starId }
      ]
    });
  }
}


