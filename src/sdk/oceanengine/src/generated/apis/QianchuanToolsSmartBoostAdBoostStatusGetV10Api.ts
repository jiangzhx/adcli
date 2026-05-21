// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { QianchuanToolsSmartBoostAdBoostStatusGetV10Response } from "../models";


export class QianchuanToolsSmartBoostAdBoostStatusGetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanToolsSmartBoostAdBoostStatusGetGet(advertiserId: number, adIds: number[]): Promise<QianchuanToolsSmartBoostAdBoostStatusGetV10Response> {
    const response = await this.openApiV10QianchuanToolsSmartBoostAdBoostStatusGetGetWithHttpInfo(advertiserId, adIds);
    return response.data;
  }

  async openApiV10QianchuanToolsSmartBoostAdBoostStatusGetGetWithHttpInfo(advertiserId: number, adIds: number[]): Promise<ApiResponse<QianchuanToolsSmartBoostAdBoostStatusGetV10Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanToolsSmartBoostAdBoostStatusGetGet");
    }

    if (adIds == null) {
      throw new ApiException("Missing the required parameter 'adIds' when calling openApiV10QianchuanToolsSmartBoostAdBoostStatusGetGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanToolsSmartBoostAdBoostStatusGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/tools/smart_boost/ad_boost/status/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "ad_ids", value: adIds, collectionFormat: "csv" }
      ]
    });
  }
}


