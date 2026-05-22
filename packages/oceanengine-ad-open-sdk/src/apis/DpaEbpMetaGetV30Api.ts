// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { DpaEbpMetaGetV30AccountType, DpaEbpMetaGetV30Response } from "../models";


export interface OpenApiV30DpaEbpMetaGetGetRequest {
  accountId: number;
  accountType: DpaEbpMetaGetV30AccountType;
  platformId: number;
  indexable?: number;
  extractable?: number;
  industry?: number;
  status?: number;
  mediaType?: number;
}

export class DpaEbpMetaGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30DpaEbpMetaGetGet(request: OpenApiV30DpaEbpMetaGetGetRequest): Promise<DpaEbpMetaGetV30Response> {
    const response = await this.openApiV30DpaEbpMetaGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30DpaEbpMetaGetGetWithHttpInfo(request: OpenApiV30DpaEbpMetaGetGetRequest): Promise<ApiResponse<DpaEbpMetaGetV30Response>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling openApiV30DpaEbpMetaGetGet");
    }

    if (request.accountType == null) {
      throw new ApiException("Missing the required parameter 'accountType' when calling openApiV30DpaEbpMetaGetGet");
    }

    if (request.platformId == null) {
      throw new ApiException("Missing the required parameter 'platformId' when calling openApiV30DpaEbpMetaGetGet");
    }
    return this.apiClient.requestWithHttpInfo<DpaEbpMetaGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/dpa/ebp/meta/get/",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "account_type", value: request.accountType },
        { name: "platform_id", value: request.platformId },
        { name: "indexable", value: request.indexable },
        { name: "extractable", value: request.extractable },
        { name: "industry", value: request.industry },
        { name: "status", value: request.status },
        { name: "media_type", value: request.mediaType }
      ]
    });
  }
}


