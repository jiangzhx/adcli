// Generated from oceanengine/ad_open_sdk_go api/api_dpa_ebp_playlet_auth_get_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { DpaEbpPlayletAuthGetV30AccountType, DpaEbpPlayletAuthGetV30Response } from "../models/index";


export interface DpaEbpPlayletAuthGetV30ApiOpenApiV30DpaEbpPlayletAuthGetGetRequest {
  accountId: number | string;
  accountType: DpaEbpPlayletAuthGetV30AccountType;
  platformId: number | string;
  productId: number | string;
}

export class DpaEbpPlayletAuthGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30DpaEbpPlayletAuthGetGet(request: DpaEbpPlayletAuthGetV30ApiOpenApiV30DpaEbpPlayletAuthGetGetRequest): Promise<DpaEbpPlayletAuthGetV30Response> {
    const response = await this.openApiV30DpaEbpPlayletAuthGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30DpaEbpPlayletAuthGetGetWithHttpInfo(request: DpaEbpPlayletAuthGetV30ApiOpenApiV30DpaEbpPlayletAuthGetGetRequest): Promise<ApiResponse<DpaEbpPlayletAuthGetV30Response>> {
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


