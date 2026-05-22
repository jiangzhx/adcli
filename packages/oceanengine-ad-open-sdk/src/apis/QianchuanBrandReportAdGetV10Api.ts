// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QianchuanBrandReportAdGetV10Filtering, QianchuanBrandReportAdGetV10OrderType, QianchuanBrandReportAdGetV10Response, QianchuanBrandReportAdGetV10TimeGranularity } from "../models";


export class QianchuanBrandReportAdGetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanBrandReportAdGetGet(advertiserId: number, startDate: string, endDate: string, fields: string[], filtering: QianchuanBrandReportAdGetV10Filtering, timeGranularity: QianchuanBrandReportAdGetV10TimeGranularity, orderField: string, orderType: QianchuanBrandReportAdGetV10OrderType, page: number, pageSize: number): Promise<QianchuanBrandReportAdGetV10Response> {
    const response = await this.openApiV10QianchuanBrandReportAdGetGetWithHttpInfo(advertiserId, startDate, endDate, fields, filtering, timeGranularity, orderField, orderType, page, pageSize);
    return response.data;
  }

  async openApiV10QianchuanBrandReportAdGetGetWithHttpInfo(advertiserId: number, startDate: string, endDate: string, fields: string[], filtering: QianchuanBrandReportAdGetV10Filtering, timeGranularity: QianchuanBrandReportAdGetV10TimeGranularity, orderField: string, orderType: QianchuanBrandReportAdGetV10OrderType, page: number, pageSize: number): Promise<ApiResponse<QianchuanBrandReportAdGetV10Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanBrandReportAdGetGet");
    }

    if (startDate == null) {
      throw new ApiException("Missing the required parameter 'startDate' when calling openApiV10QianchuanBrandReportAdGetGet");
    }

    if (endDate == null) {
      throw new ApiException("Missing the required parameter 'endDate' when calling openApiV10QianchuanBrandReportAdGetGet");
    }

    if (fields == null) {
      throw new ApiException("Missing the required parameter 'fields' when calling openApiV10QianchuanBrandReportAdGetGet");
    }

    if (filtering == null) {
      throw new ApiException("Missing the required parameter 'filtering' when calling openApiV10QianchuanBrandReportAdGetGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanBrandReportAdGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/brand/report/ad/get/",
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


