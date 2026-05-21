// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { DpaEbpDictGetV30AccountType, DpaEbpDictGetV30Response } from "../models";


export class DpaEbpDictGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30DpaEbpDictGetGet(accountId: number, accountType: DpaEbpDictGetV30AccountType, platformId: number): Promise<DpaEbpDictGetV30Response> {
    const response = await this.openApiV30DpaEbpDictGetGetWithHttpInfo(accountId, accountType, platformId);
    return response.data;
  }

  async openApiV30DpaEbpDictGetGetWithHttpInfo(accountId: number, accountType: DpaEbpDictGetV30AccountType, platformId: number): Promise<ApiResponse<DpaEbpDictGetV30Response>> {
    if (accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling openApiV30DpaEbpDictGetGet");
    }

    if (accountType == null) {
      throw new ApiException("Missing the required parameter 'accountType' when calling openApiV30DpaEbpDictGetGet");
    }

    if (platformId == null) {
      throw new ApiException("Missing the required parameter 'platformId' when calling openApiV30DpaEbpDictGetGet");
    }
    return this.apiClient.requestWithHttpInfo<DpaEbpDictGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/dpa/ebp/dict/get/",
      queryParams: [
        { name: "account_id", value: accountId },
        { name: "account_type", value: accountType },
        { name: "platform_id", value: platformId }
      ]
    });
  }
}


