// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ReportAdvertiserGetV2Filtering, ReportAdvertiserGetV2GroupBy, ReportAdvertiserGetV2OrderField, ReportAdvertiserGetV2OrderType, ReportAdvertiserGetV2Response, ReportAdvertiserGetV2TimeGranularity } from "../models";


export interface OpenApi2ReportAdvertiserGetGetRequest {
  advertiserId?: number | string;
  endDate?: string;
  fields?: string[];
  filtering?: ReportAdvertiserGetV2Filtering;
  groupBy?: ReportAdvertiserGetV2GroupBy[];
  orderField?: ReportAdvertiserGetV2OrderField;
  orderType?: ReportAdvertiserGetV2OrderType;
  page?: number;
  pageSize?: number;
  startDate?: string;
  timeGranularity?: ReportAdvertiserGetV2TimeGranularity;
}

export class ReportAdvertiserGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ReportAdvertiserGetGet(request: OpenApi2ReportAdvertiserGetGetRequest): Promise<ReportAdvertiserGetV2Response> {
    const response = await this.openApi2ReportAdvertiserGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2ReportAdvertiserGetGetWithHttpInfo(request: OpenApi2ReportAdvertiserGetGetRequest): Promise<ApiResponse<ReportAdvertiserGetV2Response>> {

    return this.apiClient.requestWithHttpInfo<ReportAdvertiserGetV2Response>({
      method: "GET",
      path: "/open_api/2/report/advertiser/get/",
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


