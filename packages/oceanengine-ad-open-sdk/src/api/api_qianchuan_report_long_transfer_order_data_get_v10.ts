// Generated from oceanengine/ad_open_sdk_go api/api_qianchuan_report_long_transfer_order_data_get_v10.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { QianchuanReportLongTransferOrderDataGetV10DataTopic, QianchuanReportLongTransferOrderDataGetV10FiltersInner, QianchuanReportLongTransferOrderDataGetV10OrderByInner, QianchuanReportLongTransferOrderDataGetV10Response } from "../models/index";


export interface QianchuanReportLongTransferOrderDataGetV10ApiOpenApiV10QianchuanReportLongTransferOrderDataGetGetRequest {
  advertiserId: number | string;
  dataTopic: QianchuanReportLongTransferOrderDataGetV10DataTopic;
  dimensions: string[];
  metrics: string[];
  filters: QianchuanReportLongTransferOrderDataGetV10FiltersInner[];
  startTime: string;
  endTime: string;
  orderBy?: QianchuanReportLongTransferOrderDataGetV10OrderByInner[];
  page?: number;
  pageSize?: number;
}

export class QianchuanReportLongTransferOrderDataGetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanReportLongTransferOrderDataGetGet(request: QianchuanReportLongTransferOrderDataGetV10ApiOpenApiV10QianchuanReportLongTransferOrderDataGetGetRequest): Promise<QianchuanReportLongTransferOrderDataGetV10Response> {
    const response = await this.openApiV10QianchuanReportLongTransferOrderDataGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanReportLongTransferOrderDataGetGetWithHttpInfo(request: QianchuanReportLongTransferOrderDataGetV10ApiOpenApiV10QianchuanReportLongTransferOrderDataGetGetRequest): Promise<ApiResponse<QianchuanReportLongTransferOrderDataGetV10Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("advertiserId is required and must be specified");
    }

    if (request.dataTopic == null) {
      throw new ApiException("dataTopic is required and must be specified");
    }

    if (request.dimensions == null) {
      throw new ApiException("dimensions is required and must be specified");
    }

    if (request.metrics == null) {
      throw new ApiException("metrics is required and must be specified");
    }

    if (request.filters == null) {
      throw new ApiException("filters is required and must be specified");
    }

    if (request.startTime == null) {
      throw new ApiException("startTime is required and must be specified");
    }

    if (request.endTime == null) {
      throw new ApiException("endTime is required and must be specified");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanReportLongTransferOrderDataGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/report/long_transfer/order/data/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "data_topic", value: request.dataTopic },
        { name: "dimensions", value: request.dimensions },
        { name: "metrics", value: request.metrics },
        { name: "filters", value: request.filters },
        { name: "start_time", value: request.startTime },
        { name: "end_time", value: request.endTime },
        { name: "order_by", value: request.orderBy },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


