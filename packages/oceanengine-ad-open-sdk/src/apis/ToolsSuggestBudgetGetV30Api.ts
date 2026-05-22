// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsSuggestBudgetGetV30Response } from "../models";


export interface OpenApiV30ToolsSuggestBudgetGetGetRequest {
  advertiserId: number;
  promotionIds: number[];
}

export class ToolsSuggestBudgetGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsSuggestBudgetGetGet(request: OpenApiV30ToolsSuggestBudgetGetGetRequest): Promise<ToolsSuggestBudgetGetV30Response> {
    const response = await this.openApiV30ToolsSuggestBudgetGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ToolsSuggestBudgetGetGetWithHttpInfo(request: OpenApiV30ToolsSuggestBudgetGetGetRequest): Promise<ApiResponse<ToolsSuggestBudgetGetV30Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30ToolsSuggestBudgetGetGet");
    }

    if (request.promotionIds == null) {
      throw new ApiException("Missing the required parameter 'promotionIds' when calling openApiV30ToolsSuggestBudgetGetGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsSuggestBudgetGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/tools/suggest_budget/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "promotion_ids", value: request.promotionIds, collectionFormat: "csv" }
      ]
    });
  }
}


