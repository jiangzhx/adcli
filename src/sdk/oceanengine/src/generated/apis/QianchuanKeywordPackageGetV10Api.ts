// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { QianchuanKeywordPackageGetV10Response } from "../models";


export class QianchuanKeywordPackageGetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanKeywordPackageGetGet(advertiserId: number, awemeId: number, productId: number): Promise<QianchuanKeywordPackageGetV10Response> {
    const response = await this.openApiV10QianchuanKeywordPackageGetGetWithHttpInfo(advertiserId, awemeId, productId);
    return response.data;
  }

  async openApiV10QianchuanKeywordPackageGetGetWithHttpInfo(advertiserId: number, awemeId: number, productId: number): Promise<ApiResponse<QianchuanKeywordPackageGetV10Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanKeywordPackageGetGet");
    }

    if (awemeId == null) {
      throw new ApiException("Missing the required parameter 'awemeId' when calling openApiV10QianchuanKeywordPackageGetGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanKeywordPackageGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/keyword_package/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "aweme_id", value: awemeId },
        { name: "product_id", value: productId }
      ]
    });
  }
}


