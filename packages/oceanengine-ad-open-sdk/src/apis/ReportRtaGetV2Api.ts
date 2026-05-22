// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ReportRtaGetV2OrderType, ReportRtaGetV2Response } from "../models";


export class ReportRtaGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ReportRtaGetGet(advertiserId: number, startDate: string, endDate: string, reportType: string, timeGranularity: string, orderField: string, orderType: ReportRtaGetV2OrderType, page: number, pageSize: number): Promise<ReportRtaGetV2Response> {
    const response = await this.openApi2ReportRtaGetGetWithHttpInfo(advertiserId, startDate, endDate, reportType, timeGranularity, orderField, orderType, page, pageSize);
    return response.data;
  }

  async openApi2ReportRtaGetGetWithHttpInfo(advertiserId: number, startDate: string, endDate: string, reportType: string, timeGranularity: string, orderField: string, orderType: ReportRtaGetV2OrderType, page: number, pageSize: number): Promise<ApiResponse<ReportRtaGetV2Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2ReportRtaGetGet");
    }

    if (startDate == null) {
      throw new ApiException("Missing the required parameter 'startDate' when calling openApi2ReportRtaGetGet");
    }

    if (endDate == null) {
      throw new ApiException("Missing the required parameter 'endDate' when calling openApi2ReportRtaGetGet");
    }

    if (reportType == null) {
      throw new ApiException("Missing the required parameter 'reportType' when calling openApi2ReportRtaGetGet");
    }
    return this.apiClient.requestWithHttpInfo<ReportRtaGetV2Response>({
      method: "GET",
      path: "/open_api/2/report/rta/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "start_date", value: startDate },
        { name: "end_date", value: endDate },
        { name: "report_type", value: reportType },
        { name: "time_granularity", value: timeGranularity },
        { name: "order_field", value: orderField },
        { name: "order_type", value: orderType },
        { name: "page", value: page },
        { name: "page_size", value: pageSize }
      ]
    });
  }
}


