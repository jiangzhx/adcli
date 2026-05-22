// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QianchuanAwemeEstimateProfitV10Audience, QianchuanAwemeEstimateProfitV10DeliverySetting, QianchuanAwemeEstimateProfitV10MarketingGoal, QianchuanAwemeEstimateProfitV10Response } from "../models";


export class QianchuanAwemeEstimateProfitV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanAwemeEstimateProfitGet(advertiserId: number, marketingGoal: QianchuanAwemeEstimateProfitV10MarketingGoal, deliverySetting: QianchuanAwemeEstimateProfitV10DeliverySetting, audience: QianchuanAwemeEstimateProfitV10Audience): Promise<QianchuanAwemeEstimateProfitV10Response> {
    const response = await this.openApiV10QianchuanAwemeEstimateProfitGetWithHttpInfo(advertiserId, marketingGoal, deliverySetting, audience);
    return response.data;
  }

  async openApiV10QianchuanAwemeEstimateProfitGetWithHttpInfo(advertiserId: number, marketingGoal: QianchuanAwemeEstimateProfitV10MarketingGoal, deliverySetting: QianchuanAwemeEstimateProfitV10DeliverySetting, audience: QianchuanAwemeEstimateProfitV10Audience): Promise<ApiResponse<QianchuanAwemeEstimateProfitV10Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanAwemeEstimateProfitGet");
    }

    if (marketingGoal == null) {
      throw new ApiException("Missing the required parameter 'marketingGoal' when calling openApiV10QianchuanAwemeEstimateProfitGet");
    }

    if (deliverySetting == null) {
      throw new ApiException("Missing the required parameter 'deliverySetting' when calling openApiV10QianchuanAwemeEstimateProfitGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanAwemeEstimateProfitV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/aweme/estimate_profit/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "marketing_goal", value: marketingGoal },
        { name: "delivery_setting", value: deliverySetting },
        { name: "audience", value: audience }
      ]
    });
  }
}


