// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { LocalAdvertiserBudgetGetV30Response } from "../models";


export interface OpenApiV30LocalAdvertiserBudgetGetGetRequest {
  localAccountId: number | string[];
}

export class LocalAdvertiserBudgetGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30LocalAdvertiserBudgetGetGet(request: OpenApiV30LocalAdvertiserBudgetGetGetRequest): Promise<LocalAdvertiserBudgetGetV30Response> {
    const response = await this.openApiV30LocalAdvertiserBudgetGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30LocalAdvertiserBudgetGetGetWithHttpInfo(request: OpenApiV30LocalAdvertiserBudgetGetGetRequest): Promise<ApiResponse<LocalAdvertiserBudgetGetV30Response>> {
    if (request.localAccountId == null) {
      throw new ApiException("Missing the required parameter 'localAccountId' when calling openApiV30LocalAdvertiserBudgetGetGet");
    }
    return this.apiClient.requestWithHttpInfo<LocalAdvertiserBudgetGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/local/advertiser/budget/get/",
      queryParams: [
        { name: "local_account_id", value: request.localAccountId, collectionFormat: "csv" }
      ]
    });
  }
}


