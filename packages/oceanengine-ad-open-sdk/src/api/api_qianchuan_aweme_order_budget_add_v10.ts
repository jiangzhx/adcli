// Generated from oceanengine/ad_open_sdk_go api/api_qianchuan_aweme_order_budget_add_v10.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { QianchuanAwemeOrderBudgetAddV10Request, QianchuanAwemeOrderBudgetAddV10Response } from "../models/index";


export interface QianchuanAwemeOrderBudgetAddV10ApiOpenApiV10QianchuanAwemeOrderBudgetAddPostRequest {
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

  async openApiV10QianchuanAwemeOrderBudgetAddPost(request: QianchuanAwemeOrderBudgetAddV10ApiOpenApiV10QianchuanAwemeOrderBudgetAddPostRequest): Promise<QianchuanAwemeOrderBudgetAddV10Response> {
    const response = await this.openApiV10QianchuanAwemeOrderBudgetAddPostWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanAwemeOrderBudgetAddPostWithHttpInfo(request: QianchuanAwemeOrderBudgetAddV10ApiOpenApiV10QianchuanAwemeOrderBudgetAddPostRequest): Promise<ApiResponse<QianchuanAwemeOrderBudgetAddV10Response>> {

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


