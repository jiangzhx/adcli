// Generated from oceanengine/ad_open_sdk_go api/api_qianchuan_report_long_transfer_order_get_v10.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { QianchuanReportLongTransferOrderGetV10Filtering, QianchuanReportLongTransferOrderGetV10MarketingGoal, QianchuanReportLongTransferOrderGetV10OptimizationTimeScope, QianchuanReportLongTransferOrderGetV10OrderType, QianchuanReportLongTransferOrderGetV10Response } from "../models/index";


export interface QianchuanReportLongTransferOrderGetV10ApiOpenApiV10QianchuanReportLongTransferOrderGetGetRequest {
  advertiserId: number | string;
  startDate: string;
  endDate: string;
  optimizationTimeScope: QianchuanReportLongTransferOrderGetV10OptimizationTimeScope;
  filtering: QianchuanReportLongTransferOrderGetV10Filtering;
  marketingGoal: QianchuanReportLongTransferOrderGetV10MarketingGoal;
  orderType?: QianchuanReportLongTransferOrderGetV10OrderType;
  page?: number;
  pageSize?: number;
}

export class QianchuanReportLongTransferOrderGetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanReportLongTransferOrderGetGet(request: QianchuanReportLongTransferOrderGetV10ApiOpenApiV10QianchuanReportLongTransferOrderGetGetRequest): Promise<QianchuanReportLongTransferOrderGetV10Response> {
    const response = await this.openApiV10QianchuanReportLongTransferOrderGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanReportLongTransferOrderGetGetWithHttpInfo(request: QianchuanReportLongTransferOrderGetV10ApiOpenApiV10QianchuanReportLongTransferOrderGetGetRequest): Promise<ApiResponse<QianchuanReportLongTransferOrderGetV10Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("advertiserId is required and must be specified");
    }

    if (request.startDate == null) {
      throw new ApiException("startDate is required and must be specified");
    }

    if (request.endDate == null) {
      throw new ApiException("endDate is required and must be specified");
    }

    if (request.optimizationTimeScope == null) {
      throw new ApiException("optimizationTimeScope is required and must be specified");
    }

    if (request.filtering == null) {
      throw new ApiException("filtering is required and must be specified");
    }

    if (request.marketingGoal == null) {
      throw new ApiException("marketingGoal is required and must be specified");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanReportLongTransferOrderGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/report/long_transfer/order/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "start_date", value: request.startDate },
        { name: "end_date", value: request.endDate },
        { name: "optimization_time_scope", value: request.optimizationTimeScope },
        { name: "filtering", value: request.filtering },
        { name: "marketing_goal", value: request.marketingGoal },
        { name: "order_type", value: request.orderType },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


