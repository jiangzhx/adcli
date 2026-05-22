// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { BudgetGroupDeleteV30Request, BudgetGroupDeleteV30Response } from "../models";


export class BudgetGroupDeleteV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30BudgetGroupDeletePost(request: BudgetGroupDeleteV30Request): Promise<BudgetGroupDeleteV30Response> {
    const response = await this.openApiV30BudgetGroupDeletePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30BudgetGroupDeletePostWithHttpInfo(request: BudgetGroupDeleteV30Request): Promise<ApiResponse<BudgetGroupDeleteV30Response>> {
    return this.apiClient.requestWithHttpInfo<BudgetGroupDeleteV30Response>({
      method: "POST",
      path: "/open_api/v3.0/budget_group/delete/",
      queryParams: [

      ],
      body: request
    });
  }
}


