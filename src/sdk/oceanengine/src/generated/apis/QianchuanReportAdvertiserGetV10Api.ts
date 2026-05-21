// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { QianchuanReportAdvertiserGetV10Filtering, QianchuanReportAdvertiserGetV10OrderType, QianchuanReportAdvertiserGetV10Response, QianchuanReportAdvertiserGetV10TimeGranularity } from "../models";


export class QianchuanReportAdvertiserGetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanReportAdvertiserGetGet(advertiserId: number, startDate: string, endDate: string, fields: string[], filtering: QianchuanReportAdvertiserGetV10Filtering, timeGranularity: QianchuanReportAdvertiserGetV10TimeGranularity, orderField: string, orderType: QianchuanReportAdvertiserGetV10OrderType, page: number, pageSize: number): Promise<QianchuanReportAdvertiserGetV10Response> {
    const response = await this.openApiV10QianchuanReportAdvertiserGetGetWithHttpInfo(advertiserId, startDate, endDate, fields, filtering, timeGranularity, orderField, orderType, page, pageSize);
    return response.data;
  }

  async openApiV10QianchuanReportAdvertiserGetGetWithHttpInfo(advertiserId: number, startDate: string, endDate: string, fields: string[], filtering: QianchuanReportAdvertiserGetV10Filtering, timeGranularity: QianchuanReportAdvertiserGetV10TimeGranularity, orderField: string, orderType: QianchuanReportAdvertiserGetV10OrderType, page: number, pageSize: number): Promise<ApiResponse<QianchuanReportAdvertiserGetV10Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanReportAdvertiserGetGet");
    }

    if (startDate == null) {
      throw new ApiException("Missing the required parameter 'startDate' when calling openApiV10QianchuanReportAdvertiserGetGet");
    }

    if (endDate == null) {
      throw new ApiException("Missing the required parameter 'endDate' when calling openApiV10QianchuanReportAdvertiserGetGet");
    }

    if (fields == null) {
      throw new ApiException("Missing the required parameter 'fields' when calling openApiV10QianchuanReportAdvertiserGetGet");
    }

    if (filtering == null) {
      throw new ApiException("Missing the required parameter 'filtering' when calling openApiV10QianchuanReportAdvertiserGetGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanReportAdvertiserGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/report/advertiser/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "start_date", value: startDate },
        { name: "end_date", value: endDate },
        { name: "filtering", value: filtering },
        { name: "time_granularity", value: timeGranularity },
        { name: "order_field", value: orderField },
        { name: "order_type", value: orderType },
        { name: "page", value: page },
        { name: "page_size", value: pageSize },
        { name: "fields", value: fields, collectionFormat: "csv" }
      ]
    });
  }
}


