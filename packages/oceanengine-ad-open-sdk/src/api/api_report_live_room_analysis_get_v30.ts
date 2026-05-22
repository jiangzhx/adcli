// Generated from oceanengine/ad_open_sdk_go api/api_report_live_room_analysis_get_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ReportLiveRoomAnalysisGetV30Filtering, ReportLiveRoomAnalysisGetV30OrderType, ReportLiveRoomAnalysisGetV30Response } from "../models/index";


export interface ReportLiveRoomAnalysisGetV30ApiOpenApiV30ReportLiveRoomAnalysisGetGetRequest {
  advertiserId: number | string;
  filtering: ReportLiveRoomAnalysisGetV30Filtering;
  startTime?: string;
  endTime?: string;
  fields?: string[];
  orderField?: string;
  orderType?: ReportLiveRoomAnalysisGetV30OrderType;
  page?: number;
  pageSize?: number;
}

export class ReportLiveRoomAnalysisGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ReportLiveRoomAnalysisGetGet(request: ReportLiveRoomAnalysisGetV30ApiOpenApiV30ReportLiveRoomAnalysisGetGetRequest): Promise<ReportLiveRoomAnalysisGetV30Response> {
    const response = await this.openApiV30ReportLiveRoomAnalysisGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ReportLiveRoomAnalysisGetGetWithHttpInfo(request: ReportLiveRoomAnalysisGetV30ApiOpenApiV30ReportLiveRoomAnalysisGetGetRequest): Promise<ApiResponse<ReportLiveRoomAnalysisGetV30Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("advertiserId is required and must be specified");
    }

    if (request.filtering == null) {
      throw new ApiException("filtering is required and must be specified");
    }
    return this.apiClient.requestWithHttpInfo<ReportLiveRoomAnalysisGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/report/live_room/analysis/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "start_time", value: request.startTime },
        { name: "end_time", value: request.endTime },
        { name: "fields", value: request.fields },
        { name: "filtering", value: request.filtering },
        { name: "order_field", value: request.orderField },
        { name: "order_type", value: request.orderType },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


