// Generated from oceanengine/ad_open_sdk_go api/api_budget_group_delete_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { BudgetGroupDeleteV30Request, BudgetGroupDeleteV30Response } from "../models/index";


export interface BudgetGroupDeleteV30ApiOpenApiV30BudgetGroupDeletePostRequest {
  budgetGroupDeleteV30Request?: BudgetGroupDeleteV30Request;
}

export class BudgetGroupDeleteV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30BudgetGroupDeletePost(request: BudgetGroupDeleteV30ApiOpenApiV30BudgetGroupDeletePostRequest): Promise<BudgetGroupDeleteV30Response> {
    const response = await this.openApiV30BudgetGroupDeletePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30BudgetGroupDeletePostWithHttpInfo(request: BudgetGroupDeleteV30ApiOpenApiV30BudgetGroupDeletePostRequest): Promise<ApiResponse<BudgetGroupDeleteV30Response>> {

    return this.apiClient.requestWithHttpInfo<BudgetGroupDeleteV30Response>({
      method: "POST",
      path: "/open_api/v3.0/budget_group/delete/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.budgetGroupDeleteV30Request
    });
  }
}


