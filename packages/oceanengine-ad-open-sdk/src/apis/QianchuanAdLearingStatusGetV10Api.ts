// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QianchuanAdLearingStatusGetV10Response } from "../models";


export class QianchuanAdLearingStatusGetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanAdLearingStatusGetGet(advertiserId: number, adIds: number[]): Promise<QianchuanAdLearingStatusGetV10Response> {
    const response = await this.openApiV10QianchuanAdLearingStatusGetGetWithHttpInfo(advertiserId, adIds);
    return response.data;
  }

  async openApiV10QianchuanAdLearingStatusGetGetWithHttpInfo(advertiserId: number, adIds: number[]): Promise<ApiResponse<QianchuanAdLearingStatusGetV10Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanAdLearingStatusGetGet");
    }

    if (adIds == null) {
      throw new ApiException("Missing the required parameter 'adIds' when calling openApiV10QianchuanAdLearingStatusGetGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanAdLearingStatusGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/ad/learing_status/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "ad_ids", value: adIds, collectionFormat: "csv" }
      ]
    });
  }
}


