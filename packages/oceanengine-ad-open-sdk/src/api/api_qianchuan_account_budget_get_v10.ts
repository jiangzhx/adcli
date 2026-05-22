// Generated from oceanengine/ad_open_sdk_go api/api_qianchuan_account_budget_get_v10.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { QianchuanAccountBudgetGetV10Response } from "../models/index";


export interface QianchuanAccountBudgetGetV10ApiOpenApiV10QianchuanAccountBudgetGetGetRequest {
  advertiserId: number | string;
}

export class QianchuanAccountBudgetGetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanAccountBudgetGetGet(request: QianchuanAccountBudgetGetV10ApiOpenApiV10QianchuanAccountBudgetGetGetRequest): Promise<QianchuanAccountBudgetGetV10Response> {
    const response = await this.openApiV10QianchuanAccountBudgetGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanAccountBudgetGetGetWithHttpInfo(request: QianchuanAccountBudgetGetV10ApiOpenApiV10QianchuanAccountBudgetGetGetRequest): Promise<ApiResponse<QianchuanAccountBudgetGetV10Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanAccountBudgetGetGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanAccountBudgetGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/account/budget/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId }
      ]
    });
  }
}


