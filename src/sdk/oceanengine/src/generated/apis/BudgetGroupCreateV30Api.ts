// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { BudgetGroupCreateV30Request, BudgetGroupCreateV30Response } from "../models";


export class BudgetGroupCreateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30BudgetGroupCreatePost(budgetGroupCreateV30Request: BudgetGroupCreateV30Request): Promise<BudgetGroupCreateV30Response> {
    const response = await this.openApiV30BudgetGroupCreatePostWithHttpInfo(budgetGroupCreateV30Request);
    return response.data;
  }

  async openApiV30BudgetGroupCreatePostWithHttpInfo(budgetGroupCreateV30Request: BudgetGroupCreateV30Request): Promise<ApiResponse<BudgetGroupCreateV30Response>> {

    return this.apiClient.requestWithHttpInfo<BudgetGroupCreateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/budget_group/create/",
      queryParams: [

      ],
      body: budgetGroupCreateV30Request
    });
  }
}


