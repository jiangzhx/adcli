// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { ReportLiveRoomAnalysisGetV30Filtering, ReportLiveRoomAnalysisGetV30OrderType, ReportLiveRoomAnalysisGetV30Response } from "../models";


export class ReportLiveRoomAnalysisGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ReportLiveRoomAnalysisGetGet(advertiserId: number, filtering: ReportLiveRoomAnalysisGetV30Filtering, startTime: string, endTime: string, fields: string[], orderField: string, orderType: ReportLiveRoomAnalysisGetV30OrderType, page: number, pageSize: number): Promise<ReportLiveRoomAnalysisGetV30Response> {
    const response = await this.openApiV30ReportLiveRoomAnalysisGetGetWithHttpInfo(advertiserId, filtering, startTime, endTime, fields, orderField, orderType, page, pageSize);
    return response.data;
  }

  async openApiV30ReportLiveRoomAnalysisGetGetWithHttpInfo(advertiserId: number, filtering: ReportLiveRoomAnalysisGetV30Filtering, startTime: string, endTime: string, fields: string[], orderField: string, orderType: ReportLiveRoomAnalysisGetV30OrderType, page: number, pageSize: number): Promise<ApiResponse<ReportLiveRoomAnalysisGetV30Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30ReportLiveRoomAnalysisGetGet");
    }

    if (filtering == null) {
      throw new ApiException("Missing the required parameter 'filtering' when calling openApiV30ReportLiveRoomAnalysisGetGet");
    }
    return this.apiClient.requestWithHttpInfo<ReportLiveRoomAnalysisGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/report/live_room/analysis/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "start_time", value: startTime },
        { name: "end_time", value: endTime },
        { name: "filtering", value: filtering },
        { name: "order_field", value: orderField },
        { name: "order_type", value: orderType },
        { name: "page", value: page },
        { name: "page_size", value: pageSize },
        { name: "fields", value: fields, collectionFormat: "csv" }
      ]
    });
  }
}


