// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QianchuanReportSearchWordGetV10Filtering, QianchuanReportSearchWordGetV10OrderType, QianchuanReportSearchWordGetV10Response, QianchuanReportSearchWordGetV10TimeGranularity, QianchuanReportSearchWordGetV10WordType } from "../models";


export class QianchuanReportSearchWordGetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanReportSearchWordGetGet(advertiserId: number, startDate: string, endDate: string, fields: string[], wordType: QianchuanReportSearchWordGetV10WordType, filtering: QianchuanReportSearchWordGetV10Filtering, timeGranularity: QianchuanReportSearchWordGetV10TimeGranularity, orderField: string, orderType: QianchuanReportSearchWordGetV10OrderType, page: number, pageSize: number): Promise<QianchuanReportSearchWordGetV10Response> {
    const response = await this.openApiV10QianchuanReportSearchWordGetGetWithHttpInfo(advertiserId, startDate, endDate, fields, wordType, filtering, timeGranularity, orderField, orderType, page, pageSize);
    return response.data;
  }

  async openApiV10QianchuanReportSearchWordGetGetWithHttpInfo(advertiserId: number, startDate: string, endDate: string, fields: string[], wordType: QianchuanReportSearchWordGetV10WordType, filtering: QianchuanReportSearchWordGetV10Filtering, timeGranularity: QianchuanReportSearchWordGetV10TimeGranularity, orderField: string, orderType: QianchuanReportSearchWordGetV10OrderType, page: number, pageSize: number): Promise<ApiResponse<QianchuanReportSearchWordGetV10Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanReportSearchWordGetGet");
    }

    if (startDate == null) {
      throw new ApiException("Missing the required parameter 'startDate' when calling openApiV10QianchuanReportSearchWordGetGet");
    }

    if (endDate == null) {
      throw new ApiException("Missing the required parameter 'endDate' when calling openApiV10QianchuanReportSearchWordGetGet");
    }

    if (fields == null) {
      throw new ApiException("Missing the required parameter 'fields' when calling openApiV10QianchuanReportSearchWordGetGet");
    }

    if (wordType == null) {
      throw new ApiException("Missing the required parameter 'wordType' when calling openApiV10QianchuanReportSearchWordGetGet");
    }

    if (filtering == null) {
      throw new ApiException("Missing the required parameter 'filtering' when calling openApiV10QianchuanReportSearchWordGetGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanReportSearchWordGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/report/search_word/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "start_date", value: startDate },
        { name: "end_date", value: endDate },
        { name: "time_granularity", value: timeGranularity },
        { name: "word_type", value: wordType },
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


