// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ReportCreativeGetV2Filtering, ReportCreativeGetV2GroupBy, ReportCreativeGetV2OrderField, ReportCreativeGetV2OrderType, ReportCreativeGetV2Response, ReportCreativeGetV2TimeGranularity } from "../models";


export interface OpenApi2ReportCreativeGetGetRequest {
  advertiserId?: number;
  endDate?: string;
  fields?: string[];
  filtering?: ReportCreativeGetV2Filtering;
  groupBy?: ReportCreativeGetV2GroupBy[];
  orderField?: ReportCreativeGetV2OrderField;
  orderType?: ReportCreativeGetV2OrderType;
  page?: number;
  pageSize?: number;
  startDate?: string;
  timeGranularity?: ReportCreativeGetV2TimeGranularity;
}

export class ReportCreativeGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ReportCreativeGetGet(request: OpenApi2ReportCreativeGetGetRequest): Promise<ReportCreativeGetV2Response> {
    const response = await this.openApi2ReportCreativeGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2ReportCreativeGetGetWithHttpInfo(request: OpenApi2ReportCreativeGetGetRequest): Promise<ApiResponse<ReportCreativeGetV2Response>> {

    return this.apiClient.requestWithHttpInfo<ReportCreativeGetV2Response>({
      method: "GET",
      path: "/open_api/2/report/creative/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "end_date", value: request.endDate },
        { name: "fields", value: request.fields, collectionFormat: "csv" },
        { name: "filtering", value: request.filtering },
        { name: "group_by", value: request.groupBy, collectionFormat: "csv" },
        { name: "order_field", value: request.orderField },
        { name: "order_type", value: request.orderType },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize },
        { name: "start_date", value: request.startDate },
        { name: "time_granularity", value: request.timeGranularity }
      ]
    });
  }
}


