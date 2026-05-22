// Generated from oceanengine/ad_open_sdk_go api/api_budget_group_create_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { BudgetGroupCreateV30Request, BudgetGroupCreateV30Response } from "../models/index";


export interface BudgetGroupCreateV30ApiOpenApiV30BudgetGroupCreatePostRequest {
  budgetGroupCreateV30Request?: BudgetGroupCreateV30Request;
}

export class BudgetGroupCreateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30BudgetGroupCreatePost(request: BudgetGroupCreateV30ApiOpenApiV30BudgetGroupCreatePostRequest): Promise<BudgetGroupCreateV30Response> {
    const response = await this.openApiV30BudgetGroupCreatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30BudgetGroupCreatePostWithHttpInfo(request: BudgetGroupCreateV30ApiOpenApiV30BudgetGroupCreatePostRequest): Promise<ApiResponse<BudgetGroupCreateV30Response>> {

    return this.apiClient.requestWithHttpInfo<BudgetGroupCreateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/budget_group/create/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.budgetGroupCreateV30Request
    });
  }
}


