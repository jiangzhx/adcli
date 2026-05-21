// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { BudgetGroupUpdateV30Request, BudgetGroupUpdateV30Response } from "../models";


export class BudgetGroupUpdateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30BudgetGroupUpdatePost(budgetGroupUpdateV30Request: BudgetGroupUpdateV30Request): Promise<BudgetGroupUpdateV30Response> {
    const response = await this.openApiV30BudgetGroupUpdatePostWithHttpInfo(budgetGroupUpdateV30Request);
    return response.data;
  }

  async openApiV30BudgetGroupUpdatePostWithHttpInfo(budgetGroupUpdateV30Request: BudgetGroupUpdateV30Request): Promise<ApiResponse<BudgetGroupUpdateV30Response>> {

    return this.apiClient.requestWithHttpInfo<BudgetGroupUpdateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/budget_group/update/",
      queryParams: [

      ],
      body: budgetGroupUpdateV30Request
    });
  }
}


