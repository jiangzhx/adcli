// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QianchuanAwemeInterestActionInterestKeywordV10Response } from "../models";


export class QianchuanAwemeInterestActionInterestKeywordV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanAwemeInterestActionInterestKeywordGet(advertiserId: number): Promise<QianchuanAwemeInterestActionInterestKeywordV10Response> {
    const response = await this.openApiV10QianchuanAwemeInterestActionInterestKeywordGetWithHttpInfo(advertiserId);
    return response.data;
  }

  async openApiV10QianchuanAwemeInterestActionInterestKeywordGetWithHttpInfo(advertiserId: number): Promise<ApiResponse<QianchuanAwemeInterestActionInterestKeywordV10Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanAwemeInterestActionInterestKeywordGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanAwemeInterestActionInterestKeywordV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/aweme/interest_action/interest/keyword/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId }
      ]
    });
  }
}


