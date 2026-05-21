// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { QianchuanBrandReportAdvertiserGetV10Filtering, QianchuanBrandReportAdvertiserGetV10OrderType, QianchuanBrandReportAdvertiserGetV10Response, QianchuanBrandReportAdvertiserGetV10TimeGranularity } from "../models";


export class QianchuanBrandReportAdvertiserGetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanBrandReportAdvertiserGetGet(advertiserId: number, startDate: string, endDate: string, fields: string[], filtering: QianchuanBrandReportAdvertiserGetV10Filtering, timeGranularity: QianchuanBrandReportAdvertiserGetV10TimeGranularity, orderField: string, orderType: QianchuanBrandReportAdvertiserGetV10OrderType, page: number, pageSize: number): Promise<QianchuanBrandReportAdvertiserGetV10Response> {
    const response = await this.openApiV10QianchuanBrandReportAdvertiserGetGetWithHttpInfo(advertiserId, startDate, endDate, fields, filtering, timeGranularity, orderField, orderType, page, pageSize);
    return response.data;
  }

  async openApiV10QianchuanBrandReportAdvertiserGetGetWithHttpInfo(advertiserId: number, startDate: string, endDate: string, fields: string[], filtering: QianchuanBrandReportAdvertiserGetV10Filtering, timeGranularity: QianchuanBrandReportAdvertiserGetV10TimeGranularity, orderField: string, orderType: QianchuanBrandReportAdvertiserGetV10OrderType, page: number, pageSize: number): Promise<ApiResponse<QianchuanBrandReportAdvertiserGetV10Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanBrandReportAdvertiserGetGet");
    }

    if (startDate == null) {
      throw new ApiException("Missing the required parameter 'startDate' when calling openApiV10QianchuanBrandReportAdvertiserGetGet");
    }

    if (endDate == null) {
      throw new ApiException("Missing the required parameter 'endDate' when calling openApiV10QianchuanBrandReportAdvertiserGetGet");
    }

    if (fields == null) {
      throw new ApiException("Missing the required parameter 'fields' when calling openApiV10QianchuanBrandReportAdvertiserGetGet");
    }

    if (filtering == null) {
      throw new ApiException("Missing the required parameter 'filtering' when calling openApiV10QianchuanBrandReportAdvertiserGetGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanBrandReportAdvertiserGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/brand/report/advertiser/get/",
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


