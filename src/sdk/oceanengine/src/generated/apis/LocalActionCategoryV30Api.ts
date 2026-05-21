// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { LocalActionCategoryV30Response } from "../models";


export class LocalActionCategoryV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30LocalActionCategoryGet(localAccountId: number): Promise<LocalActionCategoryV30Response> {
    const response = await this.openApiV30LocalActionCategoryGetWithHttpInfo(localAccountId);
    return response.data;
  }

  async openApiV30LocalActionCategoryGetWithHttpInfo(localAccountId: number): Promise<ApiResponse<LocalActionCategoryV30Response>> {
    if (localAccountId == null) {
      throw new ApiException("Missing the required parameter 'localAccountId' when calling openApiV30LocalActionCategoryGet");
    }
    return this.apiClient.requestWithHttpInfo<LocalActionCategoryV30Response>({
      method: "GET",
      path: "/open_api/v3.0/local/action/category/",
      queryParams: [
        { name: "local_account_id", value: localAccountId }
      ]
    });
  }
}


