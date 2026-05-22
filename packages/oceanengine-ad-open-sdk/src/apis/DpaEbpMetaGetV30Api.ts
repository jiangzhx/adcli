// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { DpaEbpMetaGetV30AccountType, DpaEbpMetaGetV30Response } from "../models";


export class DpaEbpMetaGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30DpaEbpMetaGetGet(accountId: number, accountType: DpaEbpMetaGetV30AccountType, platformId: number, indexable: number, extractable: number, industry: number, status: number, mediaType: number): Promise<DpaEbpMetaGetV30Response> {
    const response = await this.openApiV30DpaEbpMetaGetGetWithHttpInfo(accountId, accountType, platformId, indexable, extractable, industry, status, mediaType);
    return response.data;
  }

  async openApiV30DpaEbpMetaGetGetWithHttpInfo(accountId: number, accountType: DpaEbpMetaGetV30AccountType, platformId: number, indexable: number, extractable: number, industry: number, status: number, mediaType: number): Promise<ApiResponse<DpaEbpMetaGetV30Response>> {
    if (accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling openApiV30DpaEbpMetaGetGet");
    }

    if (accountType == null) {
      throw new ApiException("Missing the required parameter 'accountType' when calling openApiV30DpaEbpMetaGetGet");
    }

    if (platformId == null) {
      throw new ApiException("Missing the required parameter 'platformId' when calling openApiV30DpaEbpMetaGetGet");
    }
    return this.apiClient.requestWithHttpInfo<DpaEbpMetaGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/dpa/ebp/meta/get/",
      queryParams: [
        { name: "account_id", value: accountId },
        { name: "account_type", value: accountType },
        { name: "platform_id", value: platformId },
        { name: "indexable", value: indexable },
        { name: "extractable", value: extractable },
        { name: "industry", value: industry },
        { name: "status", value: status },
        { name: "media_type", value: mediaType }
      ]
    });
  }
}


