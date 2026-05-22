// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QianchuanToolsEstimateAudienceV10Audience, QianchuanToolsEstimateAudienceV10ExternalAction, QianchuanToolsEstimateAudienceV10MarketingGoal, QianchuanToolsEstimateAudienceV10Response } from "../models";


export interface OpenApiV10QianchuanToolsEstimateAudienceGetRequest {
  advertiserId: number;
  marketingGoal: QianchuanToolsEstimateAudienceV10MarketingGoal;
  externalAction: QianchuanToolsEstimateAudienceV10ExternalAction;
  productId?: number;
  awemeId?: number;
  audience?: QianchuanToolsEstimateAudienceV10Audience;
}

export class QianchuanToolsEstimateAudienceV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanToolsEstimateAudienceGet(request: OpenApiV10QianchuanToolsEstimateAudienceGetRequest): Promise<QianchuanToolsEstimateAudienceV10Response> {
    const response = await this.openApiV10QianchuanToolsEstimateAudienceGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanToolsEstimateAudienceGetWithHttpInfo(request: OpenApiV10QianchuanToolsEstimateAudienceGetRequest): Promise<ApiResponse<QianchuanToolsEstimateAudienceV10Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanToolsEstimateAudienceGet");
    }

    if (request.marketingGoal == null) {
      throw new ApiException("Missing the required parameter 'marketingGoal' when calling openApiV10QianchuanToolsEstimateAudienceGet");
    }

    if (request.externalAction == null) {
      throw new ApiException("Missing the required parameter 'externalAction' when calling openApiV10QianchuanToolsEstimateAudienceGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanToolsEstimateAudienceV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/tools/estimate_audience/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "marketing_goal", value: request.marketingGoal },
        { name: "external_action", value: request.externalAction },
        { name: "product_id", value: request.productId },
        { name: "aweme_id", value: request.awemeId },
        { name: "audience", value: request.audience }
      ]
    });
  }
}


