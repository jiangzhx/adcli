// Generated from oceanengine/ad_open_sdk_go api/api_qianchuan_report_material_get_v10.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { QianchuanReportMaterialGetV10Filtering, QianchuanReportMaterialGetV10OrderType, QianchuanReportMaterialGetV10Response } from "../models/index";


export interface QianchuanReportMaterialGetV10ApiOpenApiV10QianchuanReportMaterialGetGetRequest {
  startDate: string;
  endDate: string;
  advertiserId: number | string;
  fields: string[];
  orderType?: QianchuanReportMaterialGetV10OrderType;
  orderField?: string;
  filtering?: QianchuanReportMaterialGetV10Filtering;
  page?: number;
  pageSize?: number;
}

export class QianchuanReportMaterialGetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanReportMaterialGetGet(request: QianchuanReportMaterialGetV10ApiOpenApiV10QianchuanReportMaterialGetGetRequest): Promise<QianchuanReportMaterialGetV10Response> {
    const response = await this.openApiV10QianchuanReportMaterialGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanReportMaterialGetGetWithHttpInfo(request: QianchuanReportMaterialGetV10ApiOpenApiV10QianchuanReportMaterialGetGetRequest): Promise<ApiResponse<QianchuanReportMaterialGetV10Response>> {
    if (request.startDate == null) {
      throw new ApiException("Missing the required parameter 'startDate' when calling openApiV10QianchuanReportMaterialGetGet");
    }

    if (request.endDate == null) {
      throw new ApiException("Missing the required parameter 'endDate' when calling openApiV10QianchuanReportMaterialGetGet");
    }

    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanReportMaterialGetGet");
    }

    if (request.fields == null) {
      throw new ApiException("Missing the required parameter 'fields' when calling openApiV10QianchuanReportMaterialGetGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanReportMaterialGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/report/material/get/",
      queryParams: [
        { name: "start_date", value: request.startDate },
        { name: "end_date", value: request.endDate },
        { name: "order_type", value: request.orderType },
        { name: "order_field", value: request.orderField },
        { name: "advertiser_id", value: request.advertiserId },
        { name: "filtering", value: request.filtering },
        { name: "fields", value: request.fields },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


