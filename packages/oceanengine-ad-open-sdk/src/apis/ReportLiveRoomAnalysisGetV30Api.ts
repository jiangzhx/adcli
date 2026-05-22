// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ReportLiveRoomAnalysisGetV30Filtering, ReportLiveRoomAnalysisGetV30OrderType, ReportLiveRoomAnalysisGetV30Response } from "../models";


export interface OpenApiV30ReportLiveRoomAnalysisGetGetRequest {
  advertiserId: number;
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

  async openApiV30ReportLiveRoomAnalysisGetGet(request: OpenApiV30ReportLiveRoomAnalysisGetGetRequest): Promise<ReportLiveRoomAnalysisGetV30Response> {
    const response = await this.openApiV30ReportLiveRoomAnalysisGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ReportLiveRoomAnalysisGetGetWithHttpInfo(request: OpenApiV30ReportLiveRoomAnalysisGetGetRequest): Promise<ApiResponse<ReportLiveRoomAnalysisGetV30Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30ReportLiveRoomAnalysisGetGet");
    }

    if (request.filtering == null) {
      throw new ApiException("Missing the required parameter 'filtering' when calling openApiV30ReportLiveRoomAnalysisGetGet");
    }
    return this.apiClient.requestWithHttpInfo<ReportLiveRoomAnalysisGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/report/live_room/analysis/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "start_time", value: request.startTime },
        { name: "end_time", value: request.endTime },
        { name: "fields", value: request.fields, collectionFormat: "csv" },
        { name: "filtering", value: request.filtering },
        { name: "order_field", value: request.orderField },
        { name: "order_type", value: request.orderType },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


