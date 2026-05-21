// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { QianchuanReportUniPromotionGetV10MarketingGoal, QianchuanReportUniPromotionGetV10OrderPlatform, QianchuanReportUniPromotionGetV10Response } from "../models";


export class QianchuanReportUniPromotionGetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanReportUniPromotionGetGet(advertiserId: number, startDate: string, endDate: string, fields: string[], marketingGoal: QianchuanReportUniPromotionGetV10MarketingGoal, orderPlatform: QianchuanReportUniPromotionGetV10OrderPlatform): Promise<QianchuanReportUniPromotionGetV10Response> {
    const response = await this.openApiV10QianchuanReportUniPromotionGetGetWithHttpInfo(advertiserId, startDate, endDate, fields, marketingGoal, orderPlatform);
    return response.data;
  }

  async openApiV10QianchuanReportUniPromotionGetGetWithHttpInfo(advertiserId: number, startDate: string, endDate: string, fields: string[], marketingGoal: QianchuanReportUniPromotionGetV10MarketingGoal, orderPlatform: QianchuanReportUniPromotionGetV10OrderPlatform): Promise<ApiResponse<QianchuanReportUniPromotionGetV10Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanReportUniPromotionGetGet");
    }

    if (startDate == null) {
      throw new ApiException("Missing the required parameter 'startDate' when calling openApiV10QianchuanReportUniPromotionGetGet");
    }

    if (endDate == null) {
      throw new ApiException("Missing the required parameter 'endDate' when calling openApiV10QianchuanReportUniPromotionGetGet");
    }

    if (fields == null) {
      throw new ApiException("Missing the required parameter 'fields' when calling openApiV10QianchuanReportUniPromotionGetGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanReportUniPromotionGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/report/uni_promotion/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "start_date", value: startDate },
        { name: "end_date", value: endDate },
        { name: "marketing_goal", value: marketingGoal },
        { name: "order_platform", value: orderPlatform },
        { name: "fields", value: fields, collectionFormat: "csv" }
      ]
    });
  }
}


