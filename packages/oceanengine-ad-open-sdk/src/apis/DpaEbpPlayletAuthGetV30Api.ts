// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { DpaEbpPlayletAuthGetV30AccountType, DpaEbpPlayletAuthGetV30Response } from "../models";


export class DpaEbpPlayletAuthGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30DpaEbpPlayletAuthGetGet(accountId: number, accountType: DpaEbpPlayletAuthGetV30AccountType, platformId: number, productId: number): Promise<DpaEbpPlayletAuthGetV30Response> {
    const response = await this.openApiV30DpaEbpPlayletAuthGetGetWithHttpInfo(accountId, accountType, platformId, productId);
    return response.data;
  }

  async openApiV30DpaEbpPlayletAuthGetGetWithHttpInfo(accountId: number, accountType: DpaEbpPlayletAuthGetV30AccountType, platformId: number, productId: number): Promise<ApiResponse<DpaEbpPlayletAuthGetV30Response>> {
    if (accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling openApiV30DpaEbpPlayletAuthGetGet");
    }

    if (accountType == null) {
      throw new ApiException("Missing the required parameter 'accountType' when calling openApiV30DpaEbpPlayletAuthGetGet");
    }

    if (platformId == null) {
      throw new ApiException("Missing the required parameter 'platformId' when calling openApiV30DpaEbpPlayletAuthGetGet");
    }

    if (productId == null) {
      throw new ApiException("Missing the required parameter 'productId' when calling openApiV30DpaEbpPlayletAuthGetGet");
    }
    return this.apiClient.requestWithHttpInfo<DpaEbpPlayletAuthGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/dpa/ebp/playlet/auth/get/",
      queryParams: [
        { name: "account_id", value: accountId },
        { name: "account_type", value: accountType },
        { name: "platform_id", value: platformId },
        { name: "product_id", value: productId }
      ]
    });
  }
}


