// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { QianchuanReportLongTransferOrderDataGetV10DataTopic, QianchuanReportLongTransferOrderDataGetV10FiltersInner, QianchuanReportLongTransferOrderDataGetV10OrderByInner, QianchuanReportLongTransferOrderDataGetV10Response } from "../models";


export class QianchuanReportLongTransferOrderDataGetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanReportLongTransferOrderDataGetGet(advertiserId: number, dataTopic: QianchuanReportLongTransferOrderDataGetV10DataTopic, dimensions: string[], metrics: string[], filters: QianchuanReportLongTransferOrderDataGetV10FiltersInner[], startTime: string, endTime: string, orderBy: QianchuanReportLongTransferOrderDataGetV10OrderByInner[], page: number, pageSize: number): Promise<QianchuanReportLongTransferOrderDataGetV10Response> {
    const response = await this.openApiV10QianchuanReportLongTransferOrderDataGetGetWithHttpInfo(advertiserId, dataTopic, dimensions, metrics, filters, startTime, endTime, orderBy, page, pageSize);
    return response.data;
  }

  async openApiV10QianchuanReportLongTransferOrderDataGetGetWithHttpInfo(advertiserId: number, dataTopic: QianchuanReportLongTransferOrderDataGetV10DataTopic, dimensions: string[], metrics: string[], filters: QianchuanReportLongTransferOrderDataGetV10FiltersInner[], startTime: string, endTime: string, orderBy: QianchuanReportLongTransferOrderDataGetV10OrderByInner[], page: number, pageSize: number): Promise<ApiResponse<QianchuanReportLongTransferOrderDataGetV10Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanReportLongTransferOrderDataGetGet");
    }

    if (dataTopic == null) {
      throw new ApiException("Missing the required parameter 'dataTopic' when calling openApiV10QianchuanReportLongTransferOrderDataGetGet");
    }

    if (dimensions == null) {
      throw new ApiException("Missing the required parameter 'dimensions' when calling openApiV10QianchuanReportLongTransferOrderDataGetGet");
    }

    if (metrics == null) {
      throw new ApiException("Missing the required parameter 'metrics' when calling openApiV10QianchuanReportLongTransferOrderDataGetGet");
    }

    if (filters == null) {
      throw new ApiException("Missing the required parameter 'filters' when calling openApiV10QianchuanReportLongTransferOrderDataGetGet");
    }

    if (startTime == null) {
      throw new ApiException("Missing the required parameter 'startTime' when calling openApiV10QianchuanReportLongTransferOrderDataGetGet");
    }

    if (endTime == null) {
      throw new ApiException("Missing the required parameter 'endTime' when calling openApiV10QianchuanReportLongTransferOrderDataGetGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanReportLongTransferOrderDataGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/report/long_transfer/order/data/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "data_topic", value: dataTopic },
        { name: "start_time", value: startTime },
        { name: "end_time", value: endTime },
        { name: "page", value: page },
        { name: "page_size", value: pageSize },
        { name: "dimensions", value: dimensions, collectionFormat: "csv" },
        { name: "metrics", value: metrics, collectionFormat: "csv" },
        { name: "filters", value: filters, collectionFormat: "multi" },
        { name: "order_by", value: orderBy, collectionFormat: "multi" }
      ]
    });
  }
}


