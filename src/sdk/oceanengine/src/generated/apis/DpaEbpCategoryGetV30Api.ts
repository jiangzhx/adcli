// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { DpaEbpCategoryGetV30AccountType, DpaEbpCategoryGetV30Response } from "../models";


export class DpaEbpCategoryGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30DpaEbpCategoryGetGet(accountId: number, accountType: DpaEbpCategoryGetV30AccountType, platformId: number): Promise<DpaEbpCategoryGetV30Response> {
    const response = await this.openApiV30DpaEbpCategoryGetGetWithHttpInfo(accountId, accountType, platformId);
    return response.data;
  }

  async openApiV30DpaEbpCategoryGetGetWithHttpInfo(accountId: number, accountType: DpaEbpCategoryGetV30AccountType, platformId: number): Promise<ApiResponse<DpaEbpCategoryGetV30Response>> {
    if (accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling openApiV30DpaEbpCategoryGetGet");
    }

    if (accountType == null) {
      throw new ApiException("Missing the required parameter 'accountType' when calling openApiV30DpaEbpCategoryGetGet");
    }

    if (platformId == null) {
      throw new ApiException("Missing the required parameter 'platformId' when calling openApiV30DpaEbpCategoryGetGet");
    }
    return this.apiClient.requestWithHttpInfo<DpaEbpCategoryGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/dpa/ebp/category/get/",
      queryParams: [
        { name: "account_id", value: accountId },
        { name: "account_type", value: accountType },
        { name: "platform_id", value: platformId }
      ]
    });
  }
}


