// Generated from oceanengine/ad_open_sdk_go api/api_budget_group_list_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { BudgetGroupListV30Filtering, BudgetGroupListV30Response } from "../models/index";


export interface BudgetGroupListV30ApiOpenApiV30BudgetGroupListGetRequest {
  advertiserId: number | string;
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

  async openApiV30BudgetGroupListGet(request: BudgetGroupListV30ApiOpenApiV30BudgetGroupListGetRequest): Promise<BudgetGroupListV30Response> {
    const response = await this.openApiV30BudgetGroupListGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30BudgetGroupListGetWithHttpInfo(request: BudgetGroupListV30ApiOpenApiV30BudgetGroupListGetRequest): Promise<ApiResponse<BudgetGroupListV30Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("advertiserId is required and must be specified");
    }

    if (request.page == null) {
      throw new ApiException("page is required and must be specified");
    }

    if (request.page != null && Number(request.page) < 1) {
      throw new ApiException("page must be greater than 1");
    }

    if (request.page != null && Number(request.page) > 1000) {
      throw new ApiException("page must be less than 1000");
    }

    if (request.pageSize == null) {
      throw new ApiException("pageSize is required and must be specified");
    }

    if (request.pageSize != null && Number(request.pageSize) < 1) {
      throw new ApiException("pageSize must be greater than 1");
    }

    if (request.pageSize != null && Number(request.pageSize) > 1000) {
      throw new ApiException("pageSize must be less than 1000");
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


