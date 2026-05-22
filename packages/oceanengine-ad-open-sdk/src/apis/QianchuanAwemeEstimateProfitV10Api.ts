// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QianchuanAwemeEstimateProfitV10Audience, QianchuanAwemeEstimateProfitV10DeliverySetting, QianchuanAwemeEstimateProfitV10MarketingGoal, QianchuanAwemeEstimateProfitV10Response } from "../models";


export interface OpenApiV10QianchuanAwemeEstimateProfitGetRequest {
  advertiserId: number;
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

  async openApiV10QianchuanAwemeEstimateProfitGet(request: OpenApiV10QianchuanAwemeEstimateProfitGetRequest): Promise<QianchuanAwemeEstimateProfitV10Response> {
    const response = await this.openApiV10QianchuanAwemeEstimateProfitGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanAwemeEstimateProfitGetWithHttpInfo(request: OpenApiV10QianchuanAwemeEstimateProfitGetRequest): Promise<ApiResponse<QianchuanAwemeEstimateProfitV10Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanAwemeEstimateProfitGet");
    }

    if (request.marketingGoal == null) {
      throw new ApiException("Missing the required parameter 'marketingGoal' when calling openApiV10QianchuanAwemeEstimateProfitGet");
    }

    if (request.deliverySetting == null) {
      throw new ApiException("Missing the required parameter 'deliverySetting' when calling openApiV10QianchuanAwemeEstimateProfitGet");
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


