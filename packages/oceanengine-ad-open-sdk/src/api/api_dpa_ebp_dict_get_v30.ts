// Generated from oceanengine/ad_open_sdk_go api/api_dpa_ebp_dict_get_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { DpaEbpDictGetV30AccountType, DpaEbpDictGetV30Response } from "../models/index";


export interface DpaEbpDictGetV30ApiOpenApiV30DpaEbpDictGetGetRequest {
  accountId: number | string;
  accountType: DpaEbpDictGetV30AccountType;
  platformId: number | string;
}

export class DpaEbpDictGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30DpaEbpDictGetGet(request: DpaEbpDictGetV30ApiOpenApiV30DpaEbpDictGetGetRequest): Promise<DpaEbpDictGetV30Response> {
    const response = await this.openApiV30DpaEbpDictGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30DpaEbpDictGetGetWithHttpInfo(request: DpaEbpDictGetV30ApiOpenApiV30DpaEbpDictGetGetRequest): Promise<ApiResponse<DpaEbpDictGetV30Response>> {
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


