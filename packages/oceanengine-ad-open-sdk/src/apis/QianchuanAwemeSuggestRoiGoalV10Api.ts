// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QianchuanAwemeSuggestRoiGoalV10Response } from "../models";


export interface OpenApiV10QianchuanAwemeSuggestRoiGoalGetRequest {
  advertiserId: number;
  awemeId: number;
}

export class QianchuanAwemeSuggestRoiGoalV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanAwemeSuggestRoiGoalGet(request: OpenApiV10QianchuanAwemeSuggestRoiGoalGetRequest): Promise<QianchuanAwemeSuggestRoiGoalV10Response> {
    const response = await this.openApiV10QianchuanAwemeSuggestRoiGoalGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanAwemeSuggestRoiGoalGetWithHttpInfo(request: OpenApiV10QianchuanAwemeSuggestRoiGoalGetRequest): Promise<ApiResponse<QianchuanAwemeSuggestRoiGoalV10Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanAwemeSuggestRoiGoalGet");
    }

    if (request.awemeId == null) {
      throw new ApiException("Missing the required parameter 'awemeId' when calling openApiV10QianchuanAwemeSuggestRoiGoalGet");
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


