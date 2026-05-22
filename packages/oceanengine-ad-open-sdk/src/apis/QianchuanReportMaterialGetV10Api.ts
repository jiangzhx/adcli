// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QianchuanReportMaterialGetV10Filtering, QianchuanReportMaterialGetV10OrderType, QianchuanReportMaterialGetV10Response } from "../models";


export class QianchuanReportMaterialGetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanReportMaterialGetGet(startDate: string, endDate: string, advertiserId: number, fields: string[], orderType: QianchuanReportMaterialGetV10OrderType, orderField: string, filtering: QianchuanReportMaterialGetV10Filtering, page: number, pageSize: number): Promise<QianchuanReportMaterialGetV10Response> {
    const response = await this.openApiV10QianchuanReportMaterialGetGetWithHttpInfo(startDate, endDate, advertiserId, fields, orderType, orderField, filtering, page, pageSize);
    return response.data;
  }

  async openApiV10QianchuanReportMaterialGetGetWithHttpInfo(startDate: string, endDate: string, advertiserId: number, fields: string[], orderType: QianchuanReportMaterialGetV10OrderType, orderField: string, filtering: QianchuanReportMaterialGetV10Filtering, page: number, pageSize: number): Promise<ApiResponse<QianchuanReportMaterialGetV10Response>> {
    if (startDate == null) {
      throw new ApiException("Missing the required parameter 'startDate' when calling openApiV10QianchuanReportMaterialGetGet");
    }

    if (endDate == null) {
      throw new ApiException("Missing the required parameter 'endDate' when calling openApiV10QianchuanReportMaterialGetGet");
    }

    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanReportMaterialGetGet");
    }

    if (fields == null) {
      throw new ApiException("Missing the required parameter 'fields' when calling openApiV10QianchuanReportMaterialGetGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanReportMaterialGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/report/material/get/",
      queryParams: [
        { name: "start_date", value: startDate },
        { name: "end_date", value: endDate },
        { name: "order_type", value: orderType },
        { name: "order_field", value: orderField },
        { name: "advertiser_id", value: advertiserId },
        { name: "filtering", value: filtering },
        { name: "page", value: page },
        { name: "page_size", value: pageSize },
        { name: "fields", value: fields, collectionFormat: "csv" }
      ]
    });
  }
}


