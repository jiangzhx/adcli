// Generated from oceanengine/ad_open_sdk_go api/api_qianchuan_account_budget_update_v10.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { QianchuanAccountBudgetUpdateV10Request, QianchuanAccountBudgetUpdateV10Response } from "../models/index";


export interface QianchuanAccountBudgetUpdateV10ApiOpenApiV10QianchuanAccountBudgetUpdatePostRequest {
  qianchuanAccountBudgetUpdateV10Request?: QianchuanAccountBudgetUpdateV10Request;
}

export class QianchuanAccountBudgetUpdateV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanAccountBudgetUpdatePost(request: QianchuanAccountBudgetUpdateV10ApiOpenApiV10QianchuanAccountBudgetUpdatePostRequest): Promise<QianchuanAccountBudgetUpdateV10Response> {
    const response = await this.openApiV10QianchuanAccountBudgetUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanAccountBudgetUpdatePostWithHttpInfo(request: QianchuanAccountBudgetUpdateV10ApiOpenApiV10QianchuanAccountBudgetUpdatePostRequest): Promise<ApiResponse<QianchuanAccountBudgetUpdateV10Response>> {

    return this.apiClient.requestWithHttpInfo<QianchuanAccountBudgetUpdateV10Response>({
      method: "POST",
      path: "/open_api/v1.0/qianchuan/account/budget/update/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.qianchuanAccountBudgetUpdateV10Request
    });
  }
}


