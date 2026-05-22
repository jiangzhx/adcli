// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { DpaBrandFuzzyGetV30AccountType, DpaBrandFuzzyGetV30Response } from "../models";


export interface OpenApiV30DpaBrandFuzzyGetGetRequest {
  accountId: number;
  accountType: DpaBrandFuzzyGetV30AccountType;
  brandName: string;
  page?: number;
  pageSize?: number;
}

export class DpaBrandFuzzyGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30DpaBrandFuzzyGetGet(request: OpenApiV30DpaBrandFuzzyGetGetRequest): Promise<DpaBrandFuzzyGetV30Response> {
    const response = await this.openApiV30DpaBrandFuzzyGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30DpaBrandFuzzyGetGetWithHttpInfo(request: OpenApiV30DpaBrandFuzzyGetGetRequest): Promise<ApiResponse<DpaBrandFuzzyGetV30Response>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling openApiV30DpaBrandFuzzyGetGet");
    }

    if (request.accountType == null) {
      throw new ApiException("Missing the required parameter 'accountType' when calling openApiV30DpaBrandFuzzyGetGet");
    }

    if (request.brandName == null) {
      throw new ApiException("Missing the required parameter 'brandName' when calling openApiV30DpaBrandFuzzyGetGet");
    }
    return this.apiClient.requestWithHttpInfo<DpaBrandFuzzyGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/dpa/brand/fuzzy/get/",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "account_type", value: request.accountType },
        { name: "brand_name", value: request.brandName },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


