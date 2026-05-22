// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { StarReportOrderOverviewV2Response } from "../models";


export interface OpenApi2StarReportOrderOverviewGetRequest {
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

  async openApi2StarReportOrderOverviewGet(request: OpenApi2StarReportOrderOverviewGetRequest): Promise<StarReportOrderOverviewV2Response> {
    const response = await this.openApi2StarReportOrderOverviewGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarReportOrderOverviewGetWithHttpInfo(request: OpenApi2StarReportOrderOverviewGetRequest): Promise<ApiResponse<StarReportOrderOverviewV2Response>> {
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
        { name: "order_ids", value: request.orderIds, collectionFormat: "csv" }
      ]
    });
  }
}


