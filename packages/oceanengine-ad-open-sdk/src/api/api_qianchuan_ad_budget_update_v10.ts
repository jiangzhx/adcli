// Generated from oceanengine/ad_open_sdk_go api/api_qianchuan_ad_budget_update_v10.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { QianchuanAdBudgetUpdateV10Request, QianchuanAdBudgetUpdateV10Response } from "../models/index";


export interface QianchuanAdBudgetUpdateV10ApiOpenApiV10QianchuanAdBudgetUpdatePostRequest {
  qianchuanAdBudgetUpdateV10Request?: QianchuanAdBudgetUpdateV10Request;
}

export class QianchuanAdBudgetUpdateV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanAdBudgetUpdatePost(request: QianchuanAdBudgetUpdateV10ApiOpenApiV10QianchuanAdBudgetUpdatePostRequest): Promise<QianchuanAdBudgetUpdateV10Response> {
    const response = await this.openApiV10QianchuanAdBudgetUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanAdBudgetUpdatePostWithHttpInfo(request: QianchuanAdBudgetUpdateV10ApiOpenApiV10QianchuanAdBudgetUpdatePostRequest): Promise<ApiResponse<QianchuanAdBudgetUpdateV10Response>> {

    return this.apiClient.requestWithHttpInfo<QianchuanAdBudgetUpdateV10Response>({
      method: "POST",
      path: "/open_api/v1.0/qianchuan/ad/budget/update/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.qianchuanAdBudgetUpdateV10Request
    });
  }
}


