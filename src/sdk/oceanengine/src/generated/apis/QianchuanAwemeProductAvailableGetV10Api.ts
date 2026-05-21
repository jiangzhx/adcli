// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { QianchuanAwemeProductAvailableGetV10Response } from "../models";


export class QianchuanAwemeProductAvailableGetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanAwemeProductAvailableGetGet(advertiserId: number, awemeId: number, cursor: number): Promise<QianchuanAwemeProductAvailableGetV10Response> {
    const response = await this.openApiV10QianchuanAwemeProductAvailableGetGetWithHttpInfo(advertiserId, awemeId, cursor);
    return response.data;
  }

  async openApiV10QianchuanAwemeProductAvailableGetGetWithHttpInfo(advertiserId: number, awemeId: number, cursor: number): Promise<ApiResponse<QianchuanAwemeProductAvailableGetV10Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanAwemeProductAvailableGetGet");
    }

    if (awemeId == null) {
      throw new ApiException("Missing the required parameter 'awemeId' when calling openApiV10QianchuanAwemeProductAvailableGetGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanAwemeProductAvailableGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/aweme/product/available/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "aweme_id", value: awemeId },
        { name: "cursor", value: cursor }
      ]
    });
  }
}


