// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QianchuanReportAdMaterialGetV10Filtering, QianchuanReportAdMaterialGetV10OrderType, QianchuanReportAdMaterialGetV10Response } from "../models";


export class QianchuanReportAdMaterialGetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanReportAdMaterialGetGet(advertiserId: number, adId: number, startDate: string, endDate: string, fields: string[], filtering: QianchuanReportAdMaterialGetV10Filtering, orderType: QianchuanReportAdMaterialGetV10OrderType, orderField: string): Promise<QianchuanReportAdMaterialGetV10Response> {
    const response = await this.openApiV10QianchuanReportAdMaterialGetGetWithHttpInfo(advertiserId, adId, startDate, endDate, fields, filtering, orderType, orderField);
    return response.data;
  }

  async openApiV10QianchuanReportAdMaterialGetGetWithHttpInfo(advertiserId: number, adId: number, startDate: string, endDate: string, fields: string[], filtering: QianchuanReportAdMaterialGetV10Filtering, orderType: QianchuanReportAdMaterialGetV10OrderType, orderField: string): Promise<ApiResponse<QianchuanReportAdMaterialGetV10Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanReportAdMaterialGetGet");
    }

    if (adId == null) {
      throw new ApiException("Missing the required parameter 'adId' when calling openApiV10QianchuanReportAdMaterialGetGet");
    }

    if (startDate == null) {
      throw new ApiException("Missing the required parameter 'startDate' when calling openApiV10QianchuanReportAdMaterialGetGet");
    }

    if (endDate == null) {
      throw new ApiException("Missing the required parameter 'endDate' when calling openApiV10QianchuanReportAdMaterialGetGet");
    }

    if (fields == null) {
      throw new ApiException("Missing the required parameter 'fields' when calling openApiV10QianchuanReportAdMaterialGetGet");
    }

    if (filtering == null) {
      throw new ApiException("Missing the required parameter 'filtering' when calling openApiV10QianchuanReportAdMaterialGetGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanReportAdMaterialGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/report/ad/material/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "ad_id", value: adId },
        { name: "order_type", value: orderType },
        { name: "order_field", value: orderField },
        { name: "start_date", value: startDate },
        { name: "end_date", value: endDate },
        { name: "filtering", value: filtering },
        { name: "fields", value: fields, collectionFormat: "csv" }
      ]
    });
  }
}


