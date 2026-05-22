// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { DpaEbpPlayletAuthGetV30AccountType, DpaEbpPlayletAuthGetV30Response } from "../models";


export interface OpenApiV30DpaEbpPlayletAuthGetGetRequest {
  accountId: number;
  accountType: DpaEbpPlayletAuthGetV30AccountType;
  platformId: number;
  productId: number;
}

export class DpaEbpPlayletAuthGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30DpaEbpPlayletAuthGetGet(request: OpenApiV30DpaEbpPlayletAuthGetGetRequest): Promise<DpaEbpPlayletAuthGetV30Response> {
    const response = await this.openApiV30DpaEbpPlayletAuthGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30DpaEbpPlayletAuthGetGetWithHttpInfo(request: OpenApiV30DpaEbpPlayletAuthGetGetRequest): Promise<ApiResponse<DpaEbpPlayletAuthGetV30Response>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling openApiV30DpaEbpPlayletAuthGetGet");
    }

    if (request.accountType == null) {
      throw new ApiException("Missing the required parameter 'accountType' when calling openApiV30DpaEbpPlayletAuthGetGet");
    }

    if (request.platformId == null) {
      throw new ApiException("Missing the required parameter 'platformId' when calling openApiV30DpaEbpPlayletAuthGetGet");
    }

    if (request.productId == null) {
      throw new ApiException("Missing the required parameter 'productId' when calling openApiV30DpaEbpPlayletAuthGetGet");
    }
    return this.apiClient.requestWithHttpInfo<DpaEbpPlayletAuthGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/dpa/ebp/playlet/auth/get/",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "account_type", value: request.accountType },
        { name: "platform_id", value: request.platformId },
        { name: "product_id", value: request.productId }
      ]
    });
  }
}


