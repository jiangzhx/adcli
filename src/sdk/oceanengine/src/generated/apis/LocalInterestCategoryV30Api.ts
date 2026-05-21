// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { LocalInterestCategoryV30Response } from "../models";


export class LocalInterestCategoryV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30LocalInterestCategoryGet(localAccountId: number): Promise<LocalInterestCategoryV30Response> {
    const response = await this.openApiV30LocalInterestCategoryGetWithHttpInfo(localAccountId);
    return response.data;
  }

  async openApiV30LocalInterestCategoryGetWithHttpInfo(localAccountId: number): Promise<ApiResponse<LocalInterestCategoryV30Response>> {
    if (localAccountId == null) {
      throw new ApiException("Missing the required parameter 'localAccountId' when calling openApiV30LocalInterestCategoryGet");
    }
    return this.apiClient.requestWithHttpInfo<LocalInterestCategoryV30Response>({
      method: "GET",
      path: "/open_api/v3.0/local/interest/category/",
      queryParams: [
        { name: "local_account_id", value: localAccountId }
      ]
    });
  }
}


