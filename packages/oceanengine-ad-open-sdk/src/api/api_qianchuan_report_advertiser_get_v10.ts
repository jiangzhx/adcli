// Generated from oceanengine/ad_open_sdk_go api/api_qianchuan_report_advertiser_get_v10.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { QianchuanReportAdvertiserGetV10Filtering, QianchuanReportAdvertiserGetV10OrderType, QianchuanReportAdvertiserGetV10Response, QianchuanReportAdvertiserGetV10TimeGranularity } from "../models/index";


export interface QianchuanReportAdvertiserGetV10ApiOpenApiV10QianchuanReportAdvertiserGetGetRequest {
  advertiserId: number | string;
  startDate: string;
  endDate: string;
  fields: string[];
  filtering: QianchuanReportAdvertiserGetV10Filtering;
  timeGranularity?: QianchuanReportAdvertiserGetV10TimeGranularity;
  orderField?: string;
  orderType?: QianchuanReportAdvertiserGetV10OrderType;
  page?: number;
  pageSize?: number;
}

export class QianchuanReportAdvertiserGetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanReportAdvertiserGetGet(request: QianchuanReportAdvertiserGetV10ApiOpenApiV10QianchuanReportAdvertiserGetGetRequest): Promise<QianchuanReportAdvertiserGetV10Response> {
    const response = await this.openApiV10QianchuanReportAdvertiserGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanReportAdvertiserGetGetWithHttpInfo(request: QianchuanReportAdvertiserGetV10ApiOpenApiV10QianchuanReportAdvertiserGetGetRequest): Promise<ApiResponse<QianchuanReportAdvertiserGetV10Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("advertiserId is required and must be specified");
    }

    if (request.startDate == null) {
      throw new ApiException("startDate is required and must be specified");
    }

    if (request.endDate == null) {
      throw new ApiException("endDate is required and must be specified");
    }

    if (request.fields == null) {
      throw new ApiException("fields is required and must be specified");
    }

    if (request.filtering == null) {
      throw new ApiException("filtering is required and must be specified");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanReportAdvertiserGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/report/advertiser/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "start_date", value: request.startDate },
        { name: "end_date", value: request.endDate },
        { name: "fields", value: request.fields },
        { name: "filtering", value: request.filtering },
        { name: "time_granularity", value: request.timeGranularity },
        { name: "order_field", value: request.orderField },
        { name: "order_type", value: request.orderType },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


