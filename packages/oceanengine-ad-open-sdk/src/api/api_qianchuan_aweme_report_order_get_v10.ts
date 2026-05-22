// Generated from oceanengine/ad_open_sdk_go api/api_qianchuan_aweme_report_order_get_v10.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { QianchuanAwemeReportOrderGetV10Filtering, QianchuanAwemeReportOrderGetV10OrderType, QianchuanAwemeReportOrderGetV10PageSize, QianchuanAwemeReportOrderGetV10Response } from "../models/index";


export interface QianchuanAwemeReportOrderGetV10ApiOpenApiV10QianchuanAwemeReportOrderGetGetRequest {
  advertiserId: number | string;
  startDate: string;
  endDate: string;
  filtering: QianchuanAwemeReportOrderGetV10Filtering;
  fields?: string[];
  orderField?: string;
  orderType?: QianchuanAwemeReportOrderGetV10OrderType;
  page?: number;
  pageSize?: QianchuanAwemeReportOrderGetV10PageSize;
}

export class QianchuanAwemeReportOrderGetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanAwemeReportOrderGetGet(request: QianchuanAwemeReportOrderGetV10ApiOpenApiV10QianchuanAwemeReportOrderGetGetRequest): Promise<QianchuanAwemeReportOrderGetV10Response> {
    const response = await this.openApiV10QianchuanAwemeReportOrderGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanAwemeReportOrderGetGetWithHttpInfo(request: QianchuanAwemeReportOrderGetV10ApiOpenApiV10QianchuanAwemeReportOrderGetGetRequest): Promise<ApiResponse<QianchuanAwemeReportOrderGetV10Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanAwemeReportOrderGetGet");
    }

    if (request.startDate == null) {
      throw new ApiException("Missing the required parameter 'startDate' when calling openApiV10QianchuanAwemeReportOrderGetGet");
    }

    if (request.endDate == null) {
      throw new ApiException("Missing the required parameter 'endDate' when calling openApiV10QianchuanAwemeReportOrderGetGet");
    }

    if (request.filtering == null) {
      throw new ApiException("Missing the required parameter 'filtering' when calling openApiV10QianchuanAwemeReportOrderGetGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanAwemeReportOrderGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/aweme/report/order/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "start_date", value: request.startDate },
        { name: "end_date", value: request.endDate },
        { name: "fields", value: request.fields, collectionFormat: "csv" },
        { name: "order_field", value: request.orderField },
        { name: "order_type", value: request.orderType },
        { name: "filtering", value: request.filtering },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


