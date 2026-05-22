// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { DpaEbpProductDetailGetV30AccountType, DpaEbpProductDetailGetV30Filtering, DpaEbpProductDetailGetV30Response } from "../models";


export interface OpenApiV30DpaEbpProductDetailGetGetRequest {
  accountId?: number | string;
  accountType?: DpaEbpProductDetailGetV30AccountType;
  platformId?: number | string;
  filtering?: DpaEbpProductDetailGetV30Filtering;
  page?: number;
  pageSize?: number;
}

export class DpaEbpProductDetailGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30DpaEbpProductDetailGetGet(request: OpenApiV30DpaEbpProductDetailGetGetRequest): Promise<DpaEbpProductDetailGetV30Response> {
    const response = await this.openApiV30DpaEbpProductDetailGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30DpaEbpProductDetailGetGetWithHttpInfo(request: OpenApiV30DpaEbpProductDetailGetGetRequest): Promise<ApiResponse<DpaEbpProductDetailGetV30Response>> {

    return this.apiClient.requestWithHttpInfo<DpaEbpProductDetailGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/dpa/ebp/product/detail/get/",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "account_type", value: request.accountType },
        { name: "platform_id", value: request.platformId },
        { name: "filtering", value: request.filtering },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


