// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { BudgetGroupListV30Filtering, BudgetGroupListV30Response } from "../models";


export class BudgetGroupListV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30BudgetGroupListGet(advertiserId: number, page: number, pageSize: number, filtering: BudgetGroupListV30Filtering): Promise<BudgetGroupListV30Response> {
    const response = await this.openApiV30BudgetGroupListGetWithHttpInfo(advertiserId, page, pageSize, filtering);
    return response.data;
  }

  async openApiV30BudgetGroupListGetWithHttpInfo(advertiserId: number, page: number, pageSize: number, filtering: BudgetGroupListV30Filtering): Promise<ApiResponse<BudgetGroupListV30Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30BudgetGroupListGet");
    }

    if (page == null) {
      throw new ApiException("Missing the required parameter 'page' when calling openApiV30BudgetGroupListGet");
    }

    if (pageSize == null) {
      throw new ApiException("Missing the required parameter 'pageSize' when calling openApiV30BudgetGroupListGet");
    }
    return this.apiClient.requestWithHttpInfo<BudgetGroupListV30Response>({
      method: "GET",
      path: "/open_api/v3.0/budget_group/list/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "filtering", value: filtering },
        { name: "page", value: page },
        { name: "page_size", value: pageSize }
      ]
    });
  }
}


