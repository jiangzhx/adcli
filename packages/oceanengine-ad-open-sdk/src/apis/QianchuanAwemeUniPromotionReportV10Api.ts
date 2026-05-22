// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QianchuanAwemeUniPromotionReportV10MarketingGoal, QianchuanAwemeUniPromotionReportV10Response } from "../models";


export class QianchuanAwemeUniPromotionReportV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanAwemeUniPromotionReportGet(advertiserId: number, marketingGoal: QianchuanAwemeUniPromotionReportV10MarketingGoal, startDate: string, endDate: string, fields: string[]): Promise<QianchuanAwemeUniPromotionReportV10Response> {
    const response = await this.openApiV10QianchuanAwemeUniPromotionReportGetWithHttpInfo(advertiserId, marketingGoal, startDate, endDate, fields);
    return response.data;
  }

  async openApiV10QianchuanAwemeUniPromotionReportGetWithHttpInfo(advertiserId: number, marketingGoal: QianchuanAwemeUniPromotionReportV10MarketingGoal, startDate: string, endDate: string, fields: string[]): Promise<ApiResponse<QianchuanAwemeUniPromotionReportV10Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanAwemeUniPromotionReportGet");
    }

    if (marketingGoal == null) {
      throw new ApiException("Missing the required parameter 'marketingGoal' when calling openApiV10QianchuanAwemeUniPromotionReportGet");
    }

    if (startDate == null) {
      throw new ApiException("Missing the required parameter 'startDate' when calling openApiV10QianchuanAwemeUniPromotionReportGet");
    }

    if (endDate == null) {
      throw new ApiException("Missing the required parameter 'endDate' when calling openApiV10QianchuanAwemeUniPromotionReportGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanAwemeUniPromotionReportV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/aweme/uni_promotion/report/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "marketing_goal", value: marketingGoal },
        { name: "start_date", value: startDate },
        { name: "end_date", value: endDate },
        { name: "fields", value: fields, collectionFormat: "csv" }
      ]
    });
  }
}


