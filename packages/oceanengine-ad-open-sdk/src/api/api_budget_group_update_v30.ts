// Generated from oceanengine/ad_open_sdk_go api/api_budget_group_update_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { BudgetGroupUpdateV30Request, BudgetGroupUpdateV30Response } from "../models/index";


export interface BudgetGroupUpdateV30ApiOpenApiV30BudgetGroupUpdatePostRequest {
  budgetGroupUpdateV30Request?: BudgetGroupUpdateV30Request;
}

export class BudgetGroupUpdateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30BudgetGroupUpdatePost(request: BudgetGroupUpdateV30ApiOpenApiV30BudgetGroupUpdatePostRequest): Promise<BudgetGroupUpdateV30Response> {
    const response = await this.openApiV30BudgetGroupUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30BudgetGroupUpdatePostWithHttpInfo(request: BudgetGroupUpdateV30ApiOpenApiV30BudgetGroupUpdatePostRequest): Promise<ApiResponse<BudgetGroupUpdateV30Response>> {

    return this.apiClient.requestWithHttpInfo<BudgetGroupUpdateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/budget_group/update/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.budgetGroupUpdateV30Request
    });
  }
}


