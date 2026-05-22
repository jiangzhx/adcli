// Generated from oceanengine/ad_open_sdk_go api/api_qianchuan_aweme_suggest_roi_goal_v10.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { QianchuanAwemeSuggestRoiGoalV10Response } from "../models/index";


export interface QianchuanAwemeSuggestRoiGoalV10ApiOpenApiV10QianchuanAwemeSuggestRoiGoalGetRequest {
  advertiserId: number | string;
  awemeId: number | string;
}

export class QianchuanAwemeSuggestRoiGoalV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanAwemeSuggestRoiGoalGet(request: QianchuanAwemeSuggestRoiGoalV10ApiOpenApiV10QianchuanAwemeSuggestRoiGoalGetRequest): Promise<QianchuanAwemeSuggestRoiGoalV10Response> {
    const response = await this.openApiV10QianchuanAwemeSuggestRoiGoalGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanAwemeSuggestRoiGoalGetWithHttpInfo(request: QianchuanAwemeSuggestRoiGoalV10ApiOpenApiV10QianchuanAwemeSuggestRoiGoalGetRequest): Promise<ApiResponse<QianchuanAwemeSuggestRoiGoalV10Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("advertiserId is required and must be specified");
    }

    if (request.awemeId == null) {
      throw new ApiException("awemeId is required and must be specified");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanAwemeSuggestRoiGoalV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/aweme/suggest/roi/goal/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "aweme_id", value: request.awemeId }
      ]
    });
  }
}


