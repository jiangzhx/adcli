// Generated from oceanengine/ad_open_sdk_go api/api_qianchuan_report_search_word_get_v10.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { QianchuanReportSearchWordGetV10Filtering, QianchuanReportSearchWordGetV10OrderType, QianchuanReportSearchWordGetV10Response, QianchuanReportSearchWordGetV10TimeGranularity, QianchuanReportSearchWordGetV10WordType } from "../models/index";


export interface QianchuanReportSearchWordGetV10ApiOpenApiV10QianchuanReportSearchWordGetGetRequest {
  advertiserId: number | string;
  startDate: string;
  endDate: string;
  fields: string[];
  wordType: QianchuanReportSearchWordGetV10WordType;
  filtering: QianchuanReportSearchWordGetV10Filtering;
  timeGranularity?: QianchuanReportSearchWordGetV10TimeGranularity;
  orderField?: string;
  orderType?: QianchuanReportSearchWordGetV10OrderType;
  page?: number;
  pageSize?: number;
}

export class QianchuanReportSearchWordGetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanReportSearchWordGetGet(request: QianchuanReportSearchWordGetV10ApiOpenApiV10QianchuanReportSearchWordGetGetRequest): Promise<QianchuanReportSearchWordGetV10Response> {
    const response = await this.openApiV10QianchuanReportSearchWordGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanReportSearchWordGetGetWithHttpInfo(request: QianchuanReportSearchWordGetV10ApiOpenApiV10QianchuanReportSearchWordGetGetRequest): Promise<ApiResponse<QianchuanReportSearchWordGetV10Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanReportSearchWordGetGet");
    }

    if (request.startDate == null) {
      throw new ApiException("Missing the required parameter 'startDate' when calling openApiV10QianchuanReportSearchWordGetGet");
    }

    if (request.endDate == null) {
      throw new ApiException("Missing the required parameter 'endDate' when calling openApiV10QianchuanReportSearchWordGetGet");
    }

    if (request.fields == null) {
      throw new ApiException("Missing the required parameter 'fields' when calling openApiV10QianchuanReportSearchWordGetGet");
    }

    if (request.wordType == null) {
      throw new ApiException("Missing the required parameter 'wordType' when calling openApiV10QianchuanReportSearchWordGetGet");
    }

    if (request.filtering == null) {
      throw new ApiException("Missing the required parameter 'filtering' when calling openApiV10QianchuanReportSearchWordGetGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanReportSearchWordGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/report/search_word/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "start_date", value: request.startDate },
        { name: "end_date", value: request.endDate },
        { name: "time_granularity", value: request.timeGranularity },
        { name: "fields", value: request.fields, collectionFormat: "csv" },
        { name: "word_type", value: request.wordType },
        { name: "filtering", value: request.filtering },
        { name: "order_field", value: request.orderField },
        { name: "order_type", value: request.orderType },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


