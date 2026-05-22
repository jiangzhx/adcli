// Generated from oceanengine/ad_open_sdk_go api/api_qianchuan_report_ad_get_v10.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { QianchuanReportAdGetV10Filtering, QianchuanReportAdGetV10OrderType, QianchuanReportAdGetV10Response, QianchuanReportAdGetV10TimeGranularity } from "../models/index";


export interface QianchuanReportAdGetV10ApiOpenApiV10QianchuanReportAdGetGetRequest {
  advertiserId: number | string;
  startDate: string;
  endDate: string;
  fields: string[];
  filtering: QianchuanReportAdGetV10Filtering;
  timeGranularity?: QianchuanReportAdGetV10TimeGranularity;
  orderField?: string;
  orderType?: QianchuanReportAdGetV10OrderType;
  page?: number;
  pageSize?: number;
}

export class QianchuanReportAdGetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanReportAdGetGet(request: QianchuanReportAdGetV10ApiOpenApiV10QianchuanReportAdGetGetRequest): Promise<QianchuanReportAdGetV10Response> {
    const response = await this.openApiV10QianchuanReportAdGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanReportAdGetGetWithHttpInfo(request: QianchuanReportAdGetV10ApiOpenApiV10QianchuanReportAdGetGetRequest): Promise<ApiResponse<QianchuanReportAdGetV10Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanReportAdGetGet");
    }

    if (request.startDate == null) {
      throw new ApiException("Missing the required parameter 'startDate' when calling openApiV10QianchuanReportAdGetGet");
    }

    if (request.endDate == null) {
      throw new ApiException("Missing the required parameter 'endDate' when calling openApiV10QianchuanReportAdGetGet");
    }

    if (request.fields == null) {
      throw new ApiException("Missing the required parameter 'fields' when calling openApiV10QianchuanReportAdGetGet");
    }

    if (request.filtering == null) {
      throw new ApiException("Missing the required parameter 'filtering' when calling openApiV10QianchuanReportAdGetGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanReportAdGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/report/ad/get/",
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


