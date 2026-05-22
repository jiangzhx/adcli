// Generated from oceanengine/ad_open_sdk_go api/api_qianchuan_report_ad_material_get_v10.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { QianchuanReportAdMaterialGetV10Filtering, QianchuanReportAdMaterialGetV10OrderType, QianchuanReportAdMaterialGetV10Response } from "../models/index";


export interface QianchuanReportAdMaterialGetV10ApiOpenApiV10QianchuanReportAdMaterialGetGetRequest {
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

  async openApiV10QianchuanReportAdMaterialGetGet(request: QianchuanReportAdMaterialGetV10ApiOpenApiV10QianchuanReportAdMaterialGetGetRequest): Promise<QianchuanReportAdMaterialGetV10Response> {
    const response = await this.openApiV10QianchuanReportAdMaterialGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanReportAdMaterialGetGetWithHttpInfo(request: QianchuanReportAdMaterialGetV10ApiOpenApiV10QianchuanReportAdMaterialGetGetRequest): Promise<ApiResponse<QianchuanReportAdMaterialGetV10Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("advertiserId is required and must be specified");
    }

    if (request.adId == null) {
      throw new ApiException("adId is required and must be specified");
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

    if (request.fields != null && request.fields.length < 1) {
      throw new ApiException("fields must have at least 1 elements");
    }

    if (request.fields != null && request.fields.length > 150) {
      throw new ApiException("fields must have less than 150 elements");
    }

    if (request.filtering == null) {
      throw new ApiException("filtering is required and must be specified");
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
        { name: "fields", value: request.fields },
        { name: "filtering", value: request.filtering }
      ]
    });
  }
}


