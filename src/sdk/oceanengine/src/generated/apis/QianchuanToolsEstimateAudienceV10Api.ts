// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { QianchuanToolsEstimateAudienceV10Audience, QianchuanToolsEstimateAudienceV10ExternalAction, QianchuanToolsEstimateAudienceV10MarketingGoal, QianchuanToolsEstimateAudienceV10Response } from "../models";


export class QianchuanToolsEstimateAudienceV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanToolsEstimateAudienceGet(advertiserId: number, marketingGoal: QianchuanToolsEstimateAudienceV10MarketingGoal, externalAction: QianchuanToolsEstimateAudienceV10ExternalAction, productId: number, awemeId: number, audience: QianchuanToolsEstimateAudienceV10Audience): Promise<QianchuanToolsEstimateAudienceV10Response> {
    const response = await this.openApiV10QianchuanToolsEstimateAudienceGetWithHttpInfo(advertiserId, marketingGoal, externalAction, productId, awemeId, audience);
    return response.data;
  }

  async openApiV10QianchuanToolsEstimateAudienceGetWithHttpInfo(advertiserId: number, marketingGoal: QianchuanToolsEstimateAudienceV10MarketingGoal, externalAction: QianchuanToolsEstimateAudienceV10ExternalAction, productId: number, awemeId: number, audience: QianchuanToolsEstimateAudienceV10Audience): Promise<ApiResponse<QianchuanToolsEstimateAudienceV10Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanToolsEstimateAudienceGet");
    }

    if (marketingGoal == null) {
      throw new ApiException("Missing the required parameter 'marketingGoal' when calling openApiV10QianchuanToolsEstimateAudienceGet");
    }

    if (externalAction == null) {
      throw new ApiException("Missing the required parameter 'externalAction' when calling openApiV10QianchuanToolsEstimateAudienceGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanToolsEstimateAudienceV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/tools/estimate_audience/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "marketing_goal", value: marketingGoal },
        { name: "external_action", value: externalAction },
        { name: "product_id", value: productId },
        { name: "aweme_id", value: awemeId },
        { name: "audience", value: audience }
      ]
    });
  }
}


