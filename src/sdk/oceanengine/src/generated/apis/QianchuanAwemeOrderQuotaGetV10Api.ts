// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { QianchuanAwemeOrderQuotaGetV10Response } from "../models";


export class QianchuanAwemeOrderQuotaGetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanAwemeOrderQuotaGetGet(advertiserId: number): Promise<QianchuanAwemeOrderQuotaGetV10Response> {
    const response = await this.openApiV10QianchuanAwemeOrderQuotaGetGetWithHttpInfo(advertiserId);
    return response.data;
  }

  async openApiV10QianchuanAwemeOrderQuotaGetGetWithHttpInfo(advertiserId: number): Promise<ApiResponse<QianchuanAwemeOrderQuotaGetV10Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanAwemeOrderQuotaGetGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanAwemeOrderQuotaGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/aweme/order/quota/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId }
      ]
    });
  }
}


