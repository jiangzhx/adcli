// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QianchuanAccountBudgetGetV10Response } from "../models";


export class QianchuanAccountBudgetGetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanAccountBudgetGetGet(advertiserId: number): Promise<QianchuanAccountBudgetGetV10Response> {
    const response = await this.openApiV10QianchuanAccountBudgetGetGetWithHttpInfo(advertiserId);
    return response.data;
  }

  async openApiV10QianchuanAccountBudgetGetGetWithHttpInfo(advertiserId: number): Promise<ApiResponse<QianchuanAccountBudgetGetV10Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanAccountBudgetGetGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanAccountBudgetGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/account/budget/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId }
      ]
    });
  }
}


