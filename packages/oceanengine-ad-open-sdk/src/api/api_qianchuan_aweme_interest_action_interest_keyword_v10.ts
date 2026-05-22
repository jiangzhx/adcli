// Generated from oceanengine/ad_open_sdk_go api/api_qianchuan_aweme_interest_action_interest_keyword_v10.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { QianchuanAwemeInterestActionInterestKeywordV10Response } from "../models/index";


export interface QianchuanAwemeInterestActionInterestKeywordV10ApiOpenApiV10QianchuanAwemeInterestActionInterestKeywordGetRequest {
  advertiserId: number | string;
}

export class QianchuanAwemeInterestActionInterestKeywordV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanAwemeInterestActionInterestKeywordGet(request: QianchuanAwemeInterestActionInterestKeywordV10ApiOpenApiV10QianchuanAwemeInterestActionInterestKeywordGetRequest): Promise<QianchuanAwemeInterestActionInterestKeywordV10Response> {
    const response = await this.openApiV10QianchuanAwemeInterestActionInterestKeywordGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanAwemeInterestActionInterestKeywordGetWithHttpInfo(request: QianchuanAwemeInterestActionInterestKeywordV10ApiOpenApiV10QianchuanAwemeInterestActionInterestKeywordGetRequest): Promise<ApiResponse<QianchuanAwemeInterestActionInterestKeywordV10Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("advertiserId is required and must be specified");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanAwemeInterestActionInterestKeywordV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/aweme/interest_action/interest/keyword/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId }
      ]
    });
  }
}


