// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ReportReportLiveRoomAudiencePortraitGetV30Dimension, ReportReportLiveRoomAudiencePortraitGetV30Filtering, ReportReportLiveRoomAudiencePortraitGetV30OrderType, ReportReportLiveRoomAudiencePortraitGetV30Response } from "../models";


export interface OpenApiV30ReportReportLiveRoomAudiencePortraitGetGetRequest {
  advertiserId: number;
  dimension: ReportReportLiveRoomAudiencePortraitGetV30Dimension;
  filtering: ReportReportLiveRoomAudiencePortraitGetV30Filtering;
  startTime?: string;
  endTime?: string;
  fields?: string[];
  orderField?: string;
  orderType?: ReportReportLiveRoomAudiencePortraitGetV30OrderType;
  page?: number;
  pageSize?: number;
}

export class ReportReportLiveRoomAudiencePortraitGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ReportReportLiveRoomAudiencePortraitGetGet(request: OpenApiV30ReportReportLiveRoomAudiencePortraitGetGetRequest): Promise<ReportReportLiveRoomAudiencePortraitGetV30Response> {
    const response = await this.openApiV30ReportReportLiveRoomAudiencePortraitGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ReportReportLiveRoomAudiencePortraitGetGetWithHttpInfo(request: OpenApiV30ReportReportLiveRoomAudiencePortraitGetGetRequest): Promise<ApiResponse<ReportReportLiveRoomAudiencePortraitGetV30Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30ReportReportLiveRoomAudiencePortraitGetGet");
    }

    if (request.dimension == null) {
      throw new ApiException("Missing the required parameter 'dimension' when calling openApiV30ReportReportLiveRoomAudiencePortraitGetGet");
    }

    if (request.filtering == null) {
      throw new ApiException("Missing the required parameter 'filtering' when calling openApiV30ReportReportLiveRoomAudiencePortraitGetGet");
    }
    return this.apiClient.requestWithHttpInfo<ReportReportLiveRoomAudiencePortraitGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/report/report/live_room/audience/portrait/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "dimension", value: request.dimension },
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


