// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { QianchuanAwemeVideoGetV10MarketingGoal, QianchuanAwemeVideoGetV10Response } from "../models";


export class QianchuanAwemeVideoGetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanAwemeVideoGetGet(advertiserId: number, awemeId: number, marketingGoal: QianchuanAwemeVideoGetV10MarketingGoal, cursor: number, count: number): Promise<QianchuanAwemeVideoGetV10Response> {
    const response = await this.openApiV10QianchuanAwemeVideoGetGetWithHttpInfo(advertiserId, awemeId, marketingGoal, cursor, count);
    return response.data;
  }

  async openApiV10QianchuanAwemeVideoGetGetWithHttpInfo(advertiserId: number, awemeId: number, marketingGoal: QianchuanAwemeVideoGetV10MarketingGoal, cursor: number, count: number): Promise<ApiResponse<QianchuanAwemeVideoGetV10Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanAwemeVideoGetGet");
    }

    if (awemeId == null) {
      throw new ApiException("Missing the required parameter 'awemeId' when calling openApiV10QianchuanAwemeVideoGetGet");
    }

    if (marketingGoal == null) {
      throw new ApiException("Missing the required parameter 'marketingGoal' when calling openApiV10QianchuanAwemeVideoGetGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanAwemeVideoGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/aweme/video/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "aweme_id", value: awemeId },
        { name: "marketing_goal", value: marketingGoal },
        { name: "cursor", value: cursor },
        { name: "count", value: count }
      ]
    });
  }
}


