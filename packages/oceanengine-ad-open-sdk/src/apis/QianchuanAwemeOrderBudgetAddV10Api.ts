// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QianchuanAwemeOrderBudgetAddV10Request, QianchuanAwemeOrderBudgetAddV10Response } from "../models";


export interface OpenApiV10QianchuanAwemeOrderBudgetAddPostRequest {
  qianchuanAwemeOrderBudgetAddV10Request?: QianchuanAwemeOrderBudgetAddV10Request;
}

export class QianchuanAwemeOrderBudgetAddV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanAwemeOrderBudgetAddPost(request: OpenApiV10QianchuanAwemeOrderBudgetAddPostRequest): Promise<QianchuanAwemeOrderBudgetAddV10Response> {
    const response = await this.openApiV10QianchuanAwemeOrderBudgetAddPostWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanAwemeOrderBudgetAddPostWithHttpInfo(request: OpenApiV10QianchuanAwemeOrderBudgetAddPostRequest): Promise<ApiResponse<QianchuanAwemeOrderBudgetAddV10Response>> {

    return this.apiClient.requestWithHttpInfo<QianchuanAwemeOrderBudgetAddV10Response>({
      method: "POST",
      path: "/open_api/v1.0/qianchuan/aweme/order/budget/add/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.qianchuanAwemeOrderBudgetAddV10Request
    });
  }
}


