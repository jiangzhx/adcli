// Generated from oceanengine/ad_open_sdk_go api/api_local_interest_category_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { LocalInterestCategoryV30Response } from "../models/index";


export interface LocalInterestCategoryV30ApiOpenApiV30LocalInterestCategoryGetRequest {
  localAccountId: number | string;
}

export class LocalInterestCategoryV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30LocalInterestCategoryGet(request: LocalInterestCategoryV30ApiOpenApiV30LocalInterestCategoryGetRequest): Promise<LocalInterestCategoryV30Response> {
    const response = await this.openApiV30LocalInterestCategoryGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30LocalInterestCategoryGetWithHttpInfo(request: LocalInterestCategoryV30ApiOpenApiV30LocalInterestCategoryGetRequest): Promise<ApiResponse<LocalInterestCategoryV30Response>> {
    if (request.localAccountId == null) {
      throw new ApiException("Missing the required parameter 'localAccountId' when calling openApiV30LocalInterestCategoryGet");
    }
    return this.apiClient.requestWithHttpInfo<LocalInterestCategoryV30Response>({
      method: "GET",
      path: "/open_api/v3.0/local/interest/category/",
      queryParams: [
        { name: "local_account_id", value: request.localAccountId }
      ]
    });
  }
}


