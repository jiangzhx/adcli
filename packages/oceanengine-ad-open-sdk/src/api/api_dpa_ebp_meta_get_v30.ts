// Generated from oceanengine/ad_open_sdk_go api/api_dpa_ebp_meta_get_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { DpaEbpMetaGetV30AccountType, DpaEbpMetaGetV30Response } from "../models/index";


export interface DpaEbpMetaGetV30ApiOpenApiV30DpaEbpMetaGetGetRequest {
  accountId: number | string;
  accountType: DpaEbpMetaGetV30AccountType;
  platformId: number | string;
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

  async openApiV30DpaEbpMetaGetGet(request: DpaEbpMetaGetV30ApiOpenApiV30DpaEbpMetaGetGetRequest): Promise<DpaEbpMetaGetV30Response> {
    const response = await this.openApiV30DpaEbpMetaGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30DpaEbpMetaGetGetWithHttpInfo(request: DpaEbpMetaGetV30ApiOpenApiV30DpaEbpMetaGetGetRequest): Promise<ApiResponse<DpaEbpMetaGetV30Response>> {
    if (request.accountId == null) {
      throw new ApiException("accountId is required and must be specified");
    }

    if (request.accountType == null) {
      throw new ApiException("accountType is required and must be specified");
    }

    if (request.platformId == null) {
      throw new ApiException("platformId is required and must be specified");
    }

    if (request.platformId != null && Number(request.platformId) < 1) {
      throw new ApiException("platformId must be greater than 1");
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


