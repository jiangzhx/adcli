// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QianchuanToolsSmartBoostAdBoostVersionGetV10Response } from "../models";


export class QianchuanToolsSmartBoostAdBoostVersionGetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanToolsSmartBoostAdBoostVersionGetGet(advertiserId: number, adId: number, cursor: number, count: number): Promise<QianchuanToolsSmartBoostAdBoostVersionGetV10Response> {
    const response = await this.openApiV10QianchuanToolsSmartBoostAdBoostVersionGetGetWithHttpInfo(advertiserId, adId, cursor, count);
    return response.data;
  }

  async openApiV10QianchuanToolsSmartBoostAdBoostVersionGetGetWithHttpInfo(advertiserId: number, adId: number, cursor: number, count: number): Promise<ApiResponse<QianchuanToolsSmartBoostAdBoostVersionGetV10Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanToolsSmartBoostAdBoostVersionGetGet");
    }

    if (adId == null) {
      throw new ApiException("Missing the required parameter 'adId' when calling openApiV10QianchuanToolsSmartBoostAdBoostVersionGetGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanToolsSmartBoostAdBoostVersionGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/tools/smart_boost/ad_boost/version/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "ad_id", value: adId },
        { name: "cursor", value: cursor },
        { name: "count", value: count }
      ]
    });
  }
}


