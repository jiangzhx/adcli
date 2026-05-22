// Generated from oceanengine/ad_open_sdk_go api/api_qianchuan_aweme_uni_promotion_report_v10.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { QianchuanAwemeUniPromotionReportV10MarketingGoal, QianchuanAwemeUniPromotionReportV10Response } from "../models/index";


export interface QianchuanAwemeUniPromotionReportV10ApiOpenApiV10QianchuanAwemeUniPromotionReportGetRequest {
  advertiserId: number | string;
  marketingGoal: QianchuanAwemeUniPromotionReportV10MarketingGoal;
  startDate: string;
  endDate: string;
  fields?: string[];
}

export class QianchuanAwemeUniPromotionReportV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanAwemeUniPromotionReportGet(request: QianchuanAwemeUniPromotionReportV10ApiOpenApiV10QianchuanAwemeUniPromotionReportGetRequest): Promise<QianchuanAwemeUniPromotionReportV10Response> {
    const response = await this.openApiV10QianchuanAwemeUniPromotionReportGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanAwemeUniPromotionReportGetWithHttpInfo(request: QianchuanAwemeUniPromotionReportV10ApiOpenApiV10QianchuanAwemeUniPromotionReportGetRequest): Promise<ApiResponse<QianchuanAwemeUniPromotionReportV10Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanAwemeUniPromotionReportGet");
    }

    if (request.marketingGoal == null) {
      throw new ApiException("Missing the required parameter 'marketingGoal' when calling openApiV10QianchuanAwemeUniPromotionReportGet");
    }

    if (request.startDate == null) {
      throw new ApiException("Missing the required parameter 'startDate' when calling openApiV10QianchuanAwemeUniPromotionReportGet");
    }

    if (request.endDate == null) {
      throw new ApiException("Missing the required parameter 'endDate' when calling openApiV10QianchuanAwemeUniPromotionReportGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanAwemeUniPromotionReportV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/aweme/uni_promotion/report/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "marketing_goal", value: request.marketingGoal },
        { name: "start_date", value: request.startDate },
        { name: "end_date", value: request.endDate },
        { name: "fields", value: request.fields, collectionFormat: "csv" }
      ]
    });
  }
}


