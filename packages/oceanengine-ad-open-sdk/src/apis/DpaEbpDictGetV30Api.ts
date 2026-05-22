// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { DpaEbpDictGetV30AccountType, DpaEbpDictGetV30Response } from "../models";


export interface OpenApiV30DpaEbpDictGetGetRequest {
  accountId: number;
  accountType: DpaEbpDictGetV30AccountType;
  platformId: number;
}

export class DpaEbpDictGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30DpaEbpDictGetGet(request: OpenApiV30DpaEbpDictGetGetRequest): Promise<DpaEbpDictGetV30Response> {
    const response = await this.openApiV30DpaEbpDictGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30DpaEbpDictGetGetWithHttpInfo(request: OpenApiV30DpaEbpDictGetGetRequest): Promise<ApiResponse<DpaEbpDictGetV30Response>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling openApiV30DpaEbpDictGetGet");
    }

    if (request.accountType == null) {
      throw new ApiException("Missing the required parameter 'accountType' when calling openApiV30DpaEbpDictGetGet");
    }

    if (request.platformId == null) {
      throw new ApiException("Missing the required parameter 'platformId' when calling openApiV30DpaEbpDictGetGet");
    }
    return this.apiClient.requestWithHttpInfo<DpaEbpDictGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/dpa/ebp/dict/get/",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "account_type", value: request.accountType },
        { name: "platform_id", value: request.platformId }
      ]
    });
  }
}


