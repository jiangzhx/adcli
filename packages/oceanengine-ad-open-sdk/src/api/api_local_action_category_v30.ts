// Generated from oceanengine/ad_open_sdk_go api/api_local_action_category_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { LocalActionCategoryV30Response } from "../models/index";


export interface LocalActionCategoryV30ApiOpenApiV30LocalActionCategoryGetRequest {
  localAccountId: number | string;
}

export class LocalActionCategoryV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30LocalActionCategoryGet(request: LocalActionCategoryV30ApiOpenApiV30LocalActionCategoryGetRequest): Promise<LocalActionCategoryV30Response> {
    const response = await this.openApiV30LocalActionCategoryGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30LocalActionCategoryGetWithHttpInfo(request: LocalActionCategoryV30ApiOpenApiV30LocalActionCategoryGetRequest): Promise<ApiResponse<LocalActionCategoryV30Response>> {
    if (request.localAccountId == null) {
      throw new ApiException("Missing the required parameter 'localAccountId' when calling openApiV30LocalActionCategoryGet");
    }
    return this.apiClient.requestWithHttpInfo<LocalActionCategoryV30Response>({
      method: "GET",
      path: "/open_api/v3.0/local/action/category/",
      queryParams: [
        { name: "local_account_id", value: request.localAccountId }
      ]
    });
  }
}


