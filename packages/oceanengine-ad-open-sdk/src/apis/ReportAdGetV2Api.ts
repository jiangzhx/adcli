// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ReportAdGetV2Filtering, ReportAdGetV2GroupBy, ReportAdGetV2OrderField, ReportAdGetV2OrderType, ReportAdGetV2Response, ReportAdGetV2TimeGranularity } from "../models";


export interface OpenApi2ReportAdGetGetRequest {
  advertiserId?: number;
  endDate?: string;
  fields?: string[];
  filtering?: ReportAdGetV2Filtering;
  groupBy?: ReportAdGetV2GroupBy[];
  orderField?: ReportAdGetV2OrderField;
  orderType?: ReportAdGetV2OrderType;
  page?: number;
  pageSize?: number;
  startDate?: string;
  timeGranularity?: ReportAdGetV2TimeGranularity;
}

export class ReportAdGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ReportAdGetGet(request: OpenApi2ReportAdGetGetRequest): Promise<ReportAdGetV2Response> {
    const response = await this.openApi2ReportAdGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2ReportAdGetGetWithHttpInfo(request: OpenApi2ReportAdGetGetRequest): Promise<ApiResponse<ReportAdGetV2Response>> {

    return this.apiClient.requestWithHttpInfo<ReportAdGetV2Response>({
      method: "GET",
      path: "/open_api/2/report/ad/get/",
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


