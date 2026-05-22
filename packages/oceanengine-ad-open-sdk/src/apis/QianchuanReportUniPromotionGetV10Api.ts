// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QianchuanReportUniPromotionGetV10MarketingGoal, QianchuanReportUniPromotionGetV10OrderPlatform, QianchuanReportUniPromotionGetV10Response } from "../models";


export interface OpenApiV10QianchuanReportUniPromotionGetGetRequest {
  advertiserId: number;
  startDate: string;
  endDate: string;
  fields: string[];
  marketingGoal?: QianchuanReportUniPromotionGetV10MarketingGoal;
  orderPlatform?: QianchuanReportUniPromotionGetV10OrderPlatform;
}

export class QianchuanReportUniPromotionGetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanReportUniPromotionGetGet(request: OpenApiV10QianchuanReportUniPromotionGetGetRequest): Promise<QianchuanReportUniPromotionGetV10Response> {
    const response = await this.openApiV10QianchuanReportUniPromotionGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanReportUniPromotionGetGetWithHttpInfo(request: OpenApiV10QianchuanReportUniPromotionGetGetRequest): Promise<ApiResponse<QianchuanReportUniPromotionGetV10Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanReportUniPromotionGetGet");
    }

    if (request.startDate == null) {
      throw new ApiException("Missing the required parameter 'startDate' when calling openApiV10QianchuanReportUniPromotionGetGet");
    }

    if (request.endDate == null) {
      throw new ApiException("Missing the required parameter 'endDate' when calling openApiV10QianchuanReportUniPromotionGetGet");
    }

    if (request.fields == null) {
      throw new ApiException("Missing the required parameter 'fields' when calling openApiV10QianchuanReportUniPromotionGetGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanReportUniPromotionGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/report/uni_promotion/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "start_date", value: request.startDate },
        { name: "end_date", value: request.endDate },
        { name: "marketing_goal", value: request.marketingGoal },
        { name: "order_platform", value: request.orderPlatform },
        { name: "fields", value: request.fields, collectionFormat: "csv" }
      ]
    });
  }
}


