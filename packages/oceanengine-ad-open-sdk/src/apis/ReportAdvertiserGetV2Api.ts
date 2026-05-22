// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ReportAdvertiserGetV2Filtering, ReportAdvertiserGetV2GroupBy, ReportAdvertiserGetV2OrderField, ReportAdvertiserGetV2OrderType, ReportAdvertiserGetV2Response, ReportAdvertiserGetV2TimeGranularity } from "../models";


export class ReportAdvertiserGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ReportAdvertiserGetGet(advertiserId: number, endDate: string, fields: string[], filtering: ReportAdvertiserGetV2Filtering, groupBy: ReportAdvertiserGetV2GroupBy[], orderField: ReportAdvertiserGetV2OrderField, orderType: ReportAdvertiserGetV2OrderType, page: number, pageSize: number, startDate: string, timeGranularity: ReportAdvertiserGetV2TimeGranularity): Promise<ReportAdvertiserGetV2Response> {
    const response = await this.openApi2ReportAdvertiserGetGetWithHttpInfo(advertiserId, endDate, fields, filtering, groupBy, orderField, orderType, page, pageSize, startDate, timeGranularity);
    return response.data;
  }

  async openApi2ReportAdvertiserGetGetWithHttpInfo(advertiserId: number, endDate: string, fields: string[], filtering: ReportAdvertiserGetV2Filtering, groupBy: ReportAdvertiserGetV2GroupBy[], orderField: ReportAdvertiserGetV2OrderField, orderType: ReportAdvertiserGetV2OrderType, page: number, pageSize: number, startDate: string, timeGranularity: ReportAdvertiserGetV2TimeGranularity): Promise<ApiResponse<ReportAdvertiserGetV2Response>> {

    return this.apiClient.requestWithHttpInfo<ReportAdvertiserGetV2Response>({
      method: "GET",
      path: "/open_api/2/report/advertiser/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "end_date", value: endDate },
        { name: "filtering", value: filtering },
        { name: "order_field", value: orderField },
        { name: "order_type", value: orderType },
        { name: "page", value: page },
        { name: "page_size", value: pageSize },
        { name: "start_date", value: startDate },
        { name: "time_granularity", value: timeGranularity },
        { name: "fields", value: fields, collectionFormat: "multi" },
        { name: "group_by", value: groupBy, collectionFormat: "multi" }
      ]
    });
  }
}


