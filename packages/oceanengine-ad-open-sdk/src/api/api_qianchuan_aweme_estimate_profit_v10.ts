// Generated from oceanengine/ad_open_sdk_go api/api_qianchuan_aweme_estimate_profit_v10.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { QianchuanAwemeEstimateProfitV10Audience, QianchuanAwemeEstimateProfitV10DeliverySetting, QianchuanAwemeEstimateProfitV10MarketingGoal, QianchuanAwemeEstimateProfitV10Response } from "../models/index";


export interface QianchuanAwemeEstimateProfitV10ApiOpenApiV10QianchuanAwemeEstimateProfitGetRequest {
  advertiserId: number | string;
  marketingGoal: QianchuanAwemeEstimateProfitV10MarketingGoal;
  deliverySetting: QianchuanAwemeEstimateProfitV10DeliverySetting;
  audience?: QianchuanAwemeEstimateProfitV10Audience;
}

export class QianchuanAwemeEstimateProfitV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanAwemeEstimateProfitGet(request: QianchuanAwemeEstimateProfitV10ApiOpenApiV10QianchuanAwemeEstimateProfitGetRequest): Promise<QianchuanAwemeEstimateProfitV10Response> {
    const response = await this.openApiV10QianchuanAwemeEstimateProfitGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanAwemeEstimateProfitGetWithHttpInfo(request: QianchuanAwemeEstimateProfitV10ApiOpenApiV10QianchuanAwemeEstimateProfitGetRequest): Promise<ApiResponse<QianchuanAwemeEstimateProfitV10Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("advertiserId is required and must be specified");
    }

    if (request.marketingGoal == null) {
      throw new ApiException("marketingGoal is required and must be specified");
    }

    if (request.deliverySetting == null) {
      throw new ApiException("deliverySetting is required and must be specified");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanAwemeEstimateProfitV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/aweme/estimate_profit/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "marketing_goal", value: request.marketingGoal },
        { name: "delivery_setting", value: request.deliverySetting },
        { name: "audience", value: request.audience }
      ]
    });
  }
}


