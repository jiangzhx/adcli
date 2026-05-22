// Generated from oceanengine/ad_open_sdk_go api/api_qianchuan_tools_estimate_audience_v10.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { QianchuanToolsEstimateAudienceV10Audience, QianchuanToolsEstimateAudienceV10ExternalAction, QianchuanToolsEstimateAudienceV10MarketingGoal, QianchuanToolsEstimateAudienceV10Response } from "../models/index";


export interface QianchuanToolsEstimateAudienceV10ApiOpenApiV10QianchuanToolsEstimateAudienceGetRequest {
  advertiserId: number | string;
  marketingGoal: QianchuanToolsEstimateAudienceV10MarketingGoal;
  externalAction: QianchuanToolsEstimateAudienceV10ExternalAction;
  productId?: number | string;
  awemeId?: number | string;
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

  async openApiV10QianchuanToolsEstimateAudienceGet(request: QianchuanToolsEstimateAudienceV10ApiOpenApiV10QianchuanToolsEstimateAudienceGetRequest): Promise<QianchuanToolsEstimateAudienceV10Response> {
    const response = await this.openApiV10QianchuanToolsEstimateAudienceGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanToolsEstimateAudienceGetWithHttpInfo(request: QianchuanToolsEstimateAudienceV10ApiOpenApiV10QianchuanToolsEstimateAudienceGetRequest): Promise<ApiResponse<QianchuanToolsEstimateAudienceV10Response>> {
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


