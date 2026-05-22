// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QianchuanReportLongTransferOrderGetV10Filtering, QianchuanReportLongTransferOrderGetV10MarketingGoal, QianchuanReportLongTransferOrderGetV10OptimizationTimeScope, QianchuanReportLongTransferOrderGetV10OrderType, QianchuanReportLongTransferOrderGetV10Response } from "../models";


export interface OpenApiV10QianchuanReportLongTransferOrderGetGetRequest {
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

  async openApiV10QianchuanReportLongTransferOrderGetGet(request: OpenApiV10QianchuanReportLongTransferOrderGetGetRequest): Promise<QianchuanReportLongTransferOrderGetV10Response> {
    const response = await this.openApiV10QianchuanReportLongTransferOrderGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanReportLongTransferOrderGetGetWithHttpInfo(request: OpenApiV10QianchuanReportLongTransferOrderGetGetRequest): Promise<ApiResponse<QianchuanReportLongTransferOrderGetV10Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanReportLongTransferOrderGetGet");
    }

    if (request.startDate == null) {
      throw new ApiException("Missing the required parameter 'startDate' when calling openApiV10QianchuanReportLongTransferOrderGetGet");
    }

    if (request.endDate == null) {
      throw new ApiException("Missing the required parameter 'endDate' when calling openApiV10QianchuanReportLongTransferOrderGetGet");
    }

    if (request.optimizationTimeScope == null) {
      throw new ApiException("Missing the required parameter 'optimizationTimeScope' when calling openApiV10QianchuanReportLongTransferOrderGetGet");
    }

    if (request.filtering == null) {
      throw new ApiException("Missing the required parameter 'filtering' when calling openApiV10QianchuanReportLongTransferOrderGetGet");
    }

    if (request.marketingGoal == null) {
      throw new ApiException("Missing the required parameter 'marketingGoal' when calling openApiV10QianchuanReportLongTransferOrderGetGet");
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


