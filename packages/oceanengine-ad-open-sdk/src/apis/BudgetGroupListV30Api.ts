// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { BudgetGroupListV30Filtering, BudgetGroupListV30Response } from "../models";


export interface OpenApiV30BudgetGroupListGetRequest {
  advertiserId: number;
  page: number;
  pageSize: number;
  filtering?: BudgetGroupListV30Filtering;
}

export class BudgetGroupListV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30BudgetGroupListGet(request: OpenApiV30BudgetGroupListGetRequest): Promise<BudgetGroupListV30Response> {
    const response = await this.openApiV30BudgetGroupListGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30BudgetGroupListGetWithHttpInfo(request: OpenApiV30BudgetGroupListGetRequest): Promise<ApiResponse<BudgetGroupListV30Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30BudgetGroupListGet");
    }

    if (request.page == null) {
      throw new ApiException("Missing the required parameter 'page' when calling openApiV30BudgetGroupListGet");
    }

    if (request.pageSize == null) {
      throw new ApiException("Missing the required parameter 'pageSize' when calling openApiV30BudgetGroupListGet");
    }
    return this.apiClient.requestWithHttpInfo<BudgetGroupListV30Response>({
      method: "GET",
      path: "/open_api/v3.0/budget_group/list/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "filtering", value: request.filtering },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


