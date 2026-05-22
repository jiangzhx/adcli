// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QianchuanAwemeVideoGetV10MarketingGoal, QianchuanAwemeVideoGetV10Response } from "../models";


export interface OpenApiV10QianchuanAwemeVideoGetGetRequest {
  advertiserId: number;
  awemeId: number;
  marketingGoal: QianchuanAwemeVideoGetV10MarketingGoal;
  cursor?: number;
  count?: number;
}

export class QianchuanAwemeVideoGetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanAwemeVideoGetGet(request: OpenApiV10QianchuanAwemeVideoGetGetRequest): Promise<QianchuanAwemeVideoGetV10Response> {
    const response = await this.openApiV10QianchuanAwemeVideoGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanAwemeVideoGetGetWithHttpInfo(request: OpenApiV10QianchuanAwemeVideoGetGetRequest): Promise<ApiResponse<QianchuanAwemeVideoGetV10Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanAwemeVideoGetGet");
    }

    if (request.awemeId == null) {
      throw new ApiException("Missing the required parameter 'awemeId' when calling openApiV10QianchuanAwemeVideoGetGet");
    }

    if (request.marketingGoal == null) {
      throw new ApiException("Missing the required parameter 'marketingGoal' when calling openApiV10QianchuanAwemeVideoGetGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanAwemeVideoGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/aweme/video/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "aweme_id", value: request.awemeId },
        { name: "marketing_goal", value: request.marketingGoal },
        { name: "cursor", value: request.cursor },
        { name: "count", value: request.count }
      ]
    });
  }
}


