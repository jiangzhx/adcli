// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QianchuanBrandReportAdGetV10Filtering, QianchuanBrandReportAdGetV10OrderType, QianchuanBrandReportAdGetV10Response, QianchuanBrandReportAdGetV10TimeGranularity } from "../models";


export interface OpenApiV10QianchuanBrandReportAdGetGetRequest {
  advertiserId: number | string;
  startDate: string;
  endDate: string;
  fields: string[];
  filtering: QianchuanBrandReportAdGetV10Filtering;
  timeGranularity?: QianchuanBrandReportAdGetV10TimeGranularity;
  orderField?: string;
  orderType?: QianchuanBrandReportAdGetV10OrderType;
  page?: number;
  pageSize?: number;
}

export class QianchuanBrandReportAdGetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanBrandReportAdGetGet(request: OpenApiV10QianchuanBrandReportAdGetGetRequest): Promise<QianchuanBrandReportAdGetV10Response> {
    const response = await this.openApiV10QianchuanBrandReportAdGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanBrandReportAdGetGetWithHttpInfo(request: OpenApiV10QianchuanBrandReportAdGetGetRequest): Promise<ApiResponse<QianchuanBrandReportAdGetV10Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanBrandReportAdGetGet");
    }

    if (request.startDate == null) {
      throw new ApiException("Missing the required parameter 'startDate' when calling openApiV10QianchuanBrandReportAdGetGet");
    }

    if (request.endDate == null) {
      throw new ApiException("Missing the required parameter 'endDate' when calling openApiV10QianchuanBrandReportAdGetGet");
    }

    if (request.fields == null) {
      throw new ApiException("Missing the required parameter 'fields' when calling openApiV10QianchuanBrandReportAdGetGet");
    }

    if (request.filtering == null) {
      throw new ApiException("Missing the required parameter 'filtering' when calling openApiV10QianchuanBrandReportAdGetGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanBrandReportAdGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/brand/report/ad/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "start_date", value: request.startDate },
        { name: "end_date", value: request.endDate },
        { name: "fields", value: request.fields, collectionFormat: "csv" },
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


