// Generated from oceanengine/ad_open_sdk_go api/api_dpa_ebp_category_get_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { DpaEbpCategoryGetV30AccountType, DpaEbpCategoryGetV30Response } from "../models/index";


export interface DpaEbpCategoryGetV30ApiOpenApiV30DpaEbpCategoryGetGetRequest {
  accountId: number | string;
  accountType: DpaEbpCategoryGetV30AccountType;
  platformId: number | string;
}

export class DpaEbpCategoryGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30DpaEbpCategoryGetGet(request: DpaEbpCategoryGetV30ApiOpenApiV30DpaEbpCategoryGetGetRequest): Promise<DpaEbpCategoryGetV30Response> {
    const response = await this.openApiV30DpaEbpCategoryGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30DpaEbpCategoryGetGetWithHttpInfo(request: DpaEbpCategoryGetV30ApiOpenApiV30DpaEbpCategoryGetGetRequest): Promise<ApiResponse<DpaEbpCategoryGetV30Response>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling openApiV30DpaEbpCategoryGetGet");
    }

    if (request.accountType == null) {
      throw new ApiException("Missing the required parameter 'accountType' when calling openApiV30DpaEbpCategoryGetGet");
    }

    if (request.platformId == null) {
      throw new ApiException("Missing the required parameter 'platformId' when calling openApiV30DpaEbpCategoryGetGet");
    }
    return this.apiClient.requestWithHttpInfo<DpaEbpCategoryGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/dpa/ebp/category/get/",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "account_type", value: request.accountType },
        { name: "platform_id", value: request.platformId }
      ]
    });
  }
}


