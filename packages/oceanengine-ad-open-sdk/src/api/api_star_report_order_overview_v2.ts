// Generated from oceanengine/ad_open_sdk_go api/api_star_report_order_overview_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { StarReportOrderOverviewV2Response } from "../models/index";


export interface StarReportOrderOverviewV2ApiOpenApi2StarReportOrderOverviewGetRequest {
  starId: number | string;
  orderIds: number | string[];
}

export class StarReportOrderOverviewV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarReportOrderOverviewGet(request: StarReportOrderOverviewV2ApiOpenApi2StarReportOrderOverviewGetRequest): Promise<StarReportOrderOverviewV2Response> {
    const response = await this.openApi2StarReportOrderOverviewGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarReportOrderOverviewGetWithHttpInfo(request: StarReportOrderOverviewV2ApiOpenApi2StarReportOrderOverviewGetRequest): Promise<ApiResponse<StarReportOrderOverviewV2Response>> {
    if (request.starId == null) {
      throw new ApiException("Missing the required parameter 'starId' when calling openApi2StarReportOrderOverviewGet");
    }

    if (request.orderIds == null) {
      throw new ApiException("Missing the required parameter 'orderIds' when calling openApi2StarReportOrderOverviewGet");
    }
    return this.apiClient.requestWithHttpInfo<StarReportOrderOverviewV2Response>({
      method: "GET",
      path: "/open_api/2/star/report/order_overview/",
      queryParams: [
        { name: "star_id", value: request.starId },
        { name: "order_ids", value: request.orderIds }
      ]
    });
  }
}


