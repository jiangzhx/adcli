// Generated from oceanengine/ad_open_sdk_go api/api_report_rta_get_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ReportRtaGetV2OrderType, ReportRtaGetV2Response } from "../models/index";


export interface ReportRtaGetV2ApiOpenApi2ReportRtaGetGetRequest {
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

  async openApi2ReportRtaGetGet(request: ReportRtaGetV2ApiOpenApi2ReportRtaGetGetRequest): Promise<ReportRtaGetV2Response> {
    const response = await this.openApi2ReportRtaGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2ReportRtaGetGetWithHttpInfo(request: ReportRtaGetV2ApiOpenApi2ReportRtaGetGetRequest): Promise<ApiResponse<ReportRtaGetV2Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("advertiserId is required and must be specified");
    }

    if (request.startDate == null) {
      throw new ApiException("startDate is required and must be specified");
    }

    if (request.endDate == null) {
      throw new ApiException("endDate is required and must be specified");
    }

    if (request.reportType == null) {
      throw new ApiException("reportType is required and must be specified");
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


