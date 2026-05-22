// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QianchuanAdBudgetUpdateV10Request, QianchuanAdBudgetUpdateV10Response } from "../models";


export interface OpenApiV10QianchuanAdBudgetUpdatePostRequest {
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

  async openApiV10QianchuanAdBudgetUpdatePost(request: OpenApiV10QianchuanAdBudgetUpdatePostRequest): Promise<QianchuanAdBudgetUpdateV10Response> {
    const response = await this.openApiV10QianchuanAdBudgetUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanAdBudgetUpdatePostWithHttpInfo(request: OpenApiV10QianchuanAdBudgetUpdatePostRequest): Promise<ApiResponse<QianchuanAdBudgetUpdateV10Response>> {

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


