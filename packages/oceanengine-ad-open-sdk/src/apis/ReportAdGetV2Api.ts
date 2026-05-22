// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ReportAdGetV2Filtering, ReportAdGetV2GroupBy, ReportAdGetV2OrderField, ReportAdGetV2OrderType, ReportAdGetV2Response, ReportAdGetV2TimeGranularity } from "../models";


export class ReportAdGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ReportAdGetGet(advertiserId: number, endDate: string, fields: string[], filtering: ReportAdGetV2Filtering, groupBy: ReportAdGetV2GroupBy[], orderField: ReportAdGetV2OrderField, orderType: ReportAdGetV2OrderType, page: number, pageSize: number, startDate: string, timeGranularity: ReportAdGetV2TimeGranularity): Promise<ReportAdGetV2Response> {
    const response = await this.openApi2ReportAdGetGetWithHttpInfo(advertiserId, endDate, fields, filtering, groupBy, orderField, orderType, page, pageSize, startDate, timeGranularity);
    return response.data;
  }

  async openApi2ReportAdGetGetWithHttpInfo(advertiserId: number, endDate: string, fields: string[], filtering: ReportAdGetV2Filtering, groupBy: ReportAdGetV2GroupBy[], orderField: ReportAdGetV2OrderField, orderType: ReportAdGetV2OrderType, page: number, pageSize: number, startDate: string, timeGranularity: ReportAdGetV2TimeGranularity): Promise<ApiResponse<ReportAdGetV2Response>> {

    return this.apiClient.requestWithHttpInfo<ReportAdGetV2Response>({
      method: "GET",
      path: "/open_api/2/report/ad/get/",
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


