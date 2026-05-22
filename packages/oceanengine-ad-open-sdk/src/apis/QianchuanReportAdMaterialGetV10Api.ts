// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QianchuanReportAdMaterialGetV10Filtering, QianchuanReportAdMaterialGetV10OrderType, QianchuanReportAdMaterialGetV10Response } from "../models";


export interface OpenApiV10QianchuanReportAdMaterialGetGetRequest {
  advertiserId: number | string;
  adId: number | string;
  startDate: string;
  endDate: string;
  fields: string[];
  filtering: QianchuanReportAdMaterialGetV10Filtering;
  orderType?: QianchuanReportAdMaterialGetV10OrderType;
  orderField?: string;
}

export class QianchuanReportAdMaterialGetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanReportAdMaterialGetGet(request: OpenApiV10QianchuanReportAdMaterialGetGetRequest): Promise<QianchuanReportAdMaterialGetV10Response> {
    const response = await this.openApiV10QianchuanReportAdMaterialGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanReportAdMaterialGetGetWithHttpInfo(request: OpenApiV10QianchuanReportAdMaterialGetGetRequest): Promise<ApiResponse<QianchuanReportAdMaterialGetV10Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanReportAdMaterialGetGet");
    }

    if (request.adId == null) {
      throw new ApiException("Missing the required parameter 'adId' when calling openApiV10QianchuanReportAdMaterialGetGet");
    }

    if (request.startDate == null) {
      throw new ApiException("Missing the required parameter 'startDate' when calling openApiV10QianchuanReportAdMaterialGetGet");
    }

    if (request.endDate == null) {
      throw new ApiException("Missing the required parameter 'endDate' when calling openApiV10QianchuanReportAdMaterialGetGet");
    }

    if (request.fields == null) {
      throw new ApiException("Missing the required parameter 'fields' when calling openApiV10QianchuanReportAdMaterialGetGet");
    }

    if (request.filtering == null) {
      throw new ApiException("Missing the required parameter 'filtering' when calling openApiV10QianchuanReportAdMaterialGetGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanReportAdMaterialGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/report/ad/material/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "ad_id", value: request.adId },
        { name: "order_type", value: request.orderType },
        { name: "order_field", value: request.orderField },
        { name: "start_date", value: request.startDate },
        { name: "end_date", value: request.endDate },
        { name: "fields", value: request.fields, collectionFormat: "csv" },
        { name: "filtering", value: request.filtering }
      ]
    });
  }
}


