// Generated from oceanengine/ad_open_sdk_go api/api_qianchuan_brand_report_advertiser_get_v10.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { QianchuanBrandReportAdvertiserGetV10Filtering, QianchuanBrandReportAdvertiserGetV10OrderType, QianchuanBrandReportAdvertiserGetV10Response, QianchuanBrandReportAdvertiserGetV10TimeGranularity } from "../models/index";


export interface QianchuanBrandReportAdvertiserGetV10ApiOpenApiV10QianchuanBrandReportAdvertiserGetGetRequest {
  advertiserId: number | string;
  startDate: string;
  endDate: string;
  fields: string[];
  filtering: QianchuanBrandReportAdvertiserGetV10Filtering;
  timeGranularity?: QianchuanBrandReportAdvertiserGetV10TimeGranularity;
  orderField?: string;
  orderType?: QianchuanBrandReportAdvertiserGetV10OrderType;
  page?: number;
  pageSize?: number;
}

export class QianchuanBrandReportAdvertiserGetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanBrandReportAdvertiserGetGet(request: QianchuanBrandReportAdvertiserGetV10ApiOpenApiV10QianchuanBrandReportAdvertiserGetGetRequest): Promise<QianchuanBrandReportAdvertiserGetV10Response> {
    const response = await this.openApiV10QianchuanBrandReportAdvertiserGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanBrandReportAdvertiserGetGetWithHttpInfo(request: QianchuanBrandReportAdvertiserGetV10ApiOpenApiV10QianchuanBrandReportAdvertiserGetGetRequest): Promise<ApiResponse<QianchuanBrandReportAdvertiserGetV10Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanBrandReportAdvertiserGetGet");
    }

    if (request.startDate == null) {
      throw new ApiException("Missing the required parameter 'startDate' when calling openApiV10QianchuanBrandReportAdvertiserGetGet");
    }

    if (request.endDate == null) {
      throw new ApiException("Missing the required parameter 'endDate' when calling openApiV10QianchuanBrandReportAdvertiserGetGet");
    }

    if (request.fields == null) {
      throw new ApiException("Missing the required parameter 'fields' when calling openApiV10QianchuanBrandReportAdvertiserGetGet");
    }

    if (request.filtering == null) {
      throw new ApiException("Missing the required parameter 'filtering' when calling openApiV10QianchuanBrandReportAdvertiserGetGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanBrandReportAdvertiserGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/brand/report/advertiser/get/",
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


