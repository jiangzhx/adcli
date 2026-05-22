// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ReportRtaGetV2OrderType, ReportRtaGetV2Response } from "../models";


export interface OpenApi2ReportRtaGetGetRequest {
  advertiserId: number | string;
  startDate: string;
  endDate: string;
  reportType: string;
  timeGranularity?: string;
  orderField?: string;
  orderType?: ReportRtaGetV2OrderType;
  page?: number;
  pageSize?: number;
}

export class ReportRtaGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ReportRtaGetGet(request: OpenApi2ReportRtaGetGetRequest): Promise<ReportRtaGetV2Response> {
    const response = await this.openApi2ReportRtaGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2ReportRtaGetGetWithHttpInfo(request: OpenApi2ReportRtaGetGetRequest): Promise<ApiResponse<ReportRtaGetV2Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2ReportRtaGetGet");
    }

    if (request.startDate == null) {
      throw new ApiException("Missing the required parameter 'startDate' when calling openApi2ReportRtaGetGet");
    }

    if (request.endDate == null) {
      throw new ApiException("Missing the required parameter 'endDate' when calling openApi2ReportRtaGetGet");
    }

    if (request.reportType == null) {
      throw new ApiException("Missing the required parameter 'reportType' when calling openApi2ReportRtaGetGet");
    }
    return this.apiClient.requestWithHttpInfo<ReportRtaGetV2Response>({
      method: "GET",
      path: "/open_api/2/report/rta/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "start_date", value: request.startDate },
        { name: "end_date", value: request.endDate },
        { name: "report_type", value: request.reportType },
        { name: "time_granularity", value: request.timeGranularity },
        { name: "order_field", value: request.orderField },
        { name: "order_type", value: request.orderType },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


