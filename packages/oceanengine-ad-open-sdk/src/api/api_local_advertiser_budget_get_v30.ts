// Generated from oceanengine/ad_open_sdk_go api/api_local_advertiser_budget_get_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { LocalAdvertiserBudgetGetV30Response } from "../models/index";


export interface LocalAdvertiserBudgetGetV30ApiOpenApiV30LocalAdvertiserBudgetGetGetRequest {
  localAccountId: (number | string)[];
}

export class LocalAdvertiserBudgetGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30LocalAdvertiserBudgetGetGet(request: LocalAdvertiserBudgetGetV30ApiOpenApiV30LocalAdvertiserBudgetGetGetRequest): Promise<LocalAdvertiserBudgetGetV30Response> {
    const response = await this.openApiV30LocalAdvertiserBudgetGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30LocalAdvertiserBudgetGetGetWithHttpInfo(request: LocalAdvertiserBudgetGetV30ApiOpenApiV30LocalAdvertiserBudgetGetGetRequest): Promise<ApiResponse<LocalAdvertiserBudgetGetV30Response>> {
    if (request.localAccountId == null) {
      throw new ApiException("localAccountId is required and must be specified");
    }
    return this.apiClient.requestWithHttpInfo<LocalAdvertiserBudgetGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/local/advertiser/budget/get/",
      queryParams: [
        { name: "local_account_id", value: request.localAccountId }
      ]
    });
  }
}


