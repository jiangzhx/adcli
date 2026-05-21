// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { ReportReportLiveRoomAudiencePortraitGetV30Dimension, ReportReportLiveRoomAudiencePortraitGetV30Filtering, ReportReportLiveRoomAudiencePortraitGetV30OrderType, ReportReportLiveRoomAudiencePortraitGetV30Response } from "../models";


export class ReportReportLiveRoomAudiencePortraitGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ReportReportLiveRoomAudiencePortraitGetGet(advertiserId: number, dimension: ReportReportLiveRoomAudiencePortraitGetV30Dimension, filtering: ReportReportLiveRoomAudiencePortraitGetV30Filtering, startTime: string, endTime: string, fields: string[], orderField: string, orderType: ReportReportLiveRoomAudiencePortraitGetV30OrderType, page: number, pageSize: number): Promise<ReportReportLiveRoomAudiencePortraitGetV30Response> {
    const response = await this.openApiV30ReportReportLiveRoomAudiencePortraitGetGetWithHttpInfo(advertiserId, dimension, filtering, startTime, endTime, fields, orderField, orderType, page, pageSize);
    return response.data;
  }

  async openApiV30ReportReportLiveRoomAudiencePortraitGetGetWithHttpInfo(advertiserId: number, dimension: ReportReportLiveRoomAudiencePortraitGetV30Dimension, filtering: ReportReportLiveRoomAudiencePortraitGetV30Filtering, startTime: string, endTime: string, fields: string[], orderField: string, orderType: ReportReportLiveRoomAudiencePortraitGetV30OrderType, page: number, pageSize: number): Promise<ApiResponse<ReportReportLiveRoomAudiencePortraitGetV30Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30ReportReportLiveRoomAudiencePortraitGetGet");
    }

    if (dimension == null) {
      throw new ApiException("Missing the required parameter 'dimension' when calling openApiV30ReportReportLiveRoomAudiencePortraitGetGet");
    }

    if (filtering == null) {
      throw new ApiException("Missing the required parameter 'filtering' when calling openApiV30ReportReportLiveRoomAudiencePortraitGetGet");
    }
    return this.apiClient.requestWithHttpInfo<ReportReportLiveRoomAudiencePortraitGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/report/report/live_room/audience/portrait/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "dimension", value: dimension },
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


