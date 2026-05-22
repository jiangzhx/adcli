// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QianchuanReportLongTransferOrderGetV10Filtering, QianchuanReportLongTransferOrderGetV10MarketingGoal, QianchuanReportLongTransferOrderGetV10OptimizationTimeScope, QianchuanReportLongTransferOrderGetV10OrderType, QianchuanReportLongTransferOrderGetV10Response } from "../models";


export class QianchuanReportLongTransferOrderGetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanReportLongTransferOrderGetGet(advertiserId: number, startDate: string, endDate: string, optimizationTimeScope: QianchuanReportLongTransferOrderGetV10OptimizationTimeScope, filtering: QianchuanReportLongTransferOrderGetV10Filtering, marketingGoal: QianchuanReportLongTransferOrderGetV10MarketingGoal, orderType: QianchuanReportLongTransferOrderGetV10OrderType, page: number, pageSize: number): Promise<QianchuanReportLongTransferOrderGetV10Response> {
    const response = await this.openApiV10QianchuanReportLongTransferOrderGetGetWithHttpInfo(advertiserId, startDate, endDate, optimizationTimeScope, filtering, marketingGoal, orderType, page, pageSize);
    return response.data;
  }

  async openApiV10QianchuanReportLongTransferOrderGetGetWithHttpInfo(advertiserId: number, startDate: string, endDate: string, optimizationTimeScope: QianchuanReportLongTransferOrderGetV10OptimizationTimeScope, filtering: QianchuanReportLongTransferOrderGetV10Filtering, marketingGoal: QianchuanReportLongTransferOrderGetV10MarketingGoal, orderType: QianchuanReportLongTransferOrderGetV10OrderType, page: number, pageSize: number): Promise<ApiResponse<QianchuanReportLongTransferOrderGetV10Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanReportLongTransferOrderGetGet");
    }

    if (startDate == null) {
      throw new ApiException("Missing the required parameter 'startDate' when calling openApiV10QianchuanReportLongTransferOrderGetGet");
    }

    if (endDate == null) {
      throw new ApiException("Missing the required parameter 'endDate' when calling openApiV10QianchuanReportLongTransferOrderGetGet");
    }

    if (optimizationTimeScope == null) {
      throw new ApiException("Missing the required parameter 'optimizationTimeScope' when calling openApiV10QianchuanReportLongTransferOrderGetGet");
    }

    if (filtering == null) {
      throw new ApiException("Missing the required parameter 'filtering' when calling openApiV10QianchuanReportLongTransferOrderGetGet");
    }

    if (marketingGoal == null) {
      throw new ApiException("Missing the required parameter 'marketingGoal' when calling openApiV10QianchuanReportLongTransferOrderGetGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanReportLongTransferOrderGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/report/long_transfer/order/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "start_date", value: startDate },
        { name: "end_date", value: endDate },
        { name: "optimization_time_scope", value: optimizationTimeScope },
        { name: "filtering", value: filtering },
        { name: "marketing_goal", value: marketingGoal },
        { name: "order_type", value: orderType },
        { name: "page", value: page },
        { name: "page_size", value: pageSize }
      ]
    });
  }
}


