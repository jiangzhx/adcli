// Generated from oceanengine/ad_open_sdk_go api/api_qianchuan_report_uni_promotion_get_v10.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { QianchuanReportUniPromotionGetV10MarketingGoal, QianchuanReportUniPromotionGetV10OrderPlatform, QianchuanReportUniPromotionGetV10Response } from "../models/index";


export interface QianchuanReportUniPromotionGetV10ApiOpenApiV10QianchuanReportUniPromotionGetGetRequest {
  advertiserId: number | string;
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

  async openApiV10QianchuanReportUniPromotionGetGet(request: QianchuanReportUniPromotionGetV10ApiOpenApiV10QianchuanReportUniPromotionGetGetRequest): Promise<QianchuanReportUniPromotionGetV10Response> {
    const response = await this.openApiV10QianchuanReportUniPromotionGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanReportUniPromotionGetGetWithHttpInfo(request: QianchuanReportUniPromotionGetV10ApiOpenApiV10QianchuanReportUniPromotionGetGetRequest): Promise<ApiResponse<QianchuanReportUniPromotionGetV10Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("advertiserId is required and must be specified");
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
    return this.apiClient.requestWithHttpInfo<QianchuanReportUniPromotionGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/report/uni_promotion/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "start_date", value: request.startDate },
        { name: "end_date", value: request.endDate },
        { name: "marketing_goal", value: request.marketingGoal },
        { name: "order_platform", value: request.orderPlatform },
        { name: "fields", value: request.fields }
      ]
    });
  }
}


