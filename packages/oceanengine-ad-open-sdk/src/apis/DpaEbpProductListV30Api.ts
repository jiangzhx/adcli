// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { DpaEbpProductListV30AccountType, DpaEbpProductListV30Filtering, DpaEbpProductListV30Response } from "../models";


export interface OpenApiV30DpaEbpProductListGetRequest {
  accountId: number | string;
  accountType: DpaEbpProductListV30AccountType;
  productPlatformId: number | string;
  filtering?: DpaEbpProductListV30Filtering;
  page?: number;
  pageSize?: number;
}

export class DpaEbpProductListV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30DpaEbpProductListGet(request: OpenApiV30DpaEbpProductListGetRequest): Promise<DpaEbpProductListV30Response> {
    const response = await this.openApiV30DpaEbpProductListGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30DpaEbpProductListGetWithHttpInfo(request: OpenApiV30DpaEbpProductListGetRequest): Promise<ApiResponse<DpaEbpProductListV30Response>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling openApiV30DpaEbpProductListGet");
    }

    if (request.accountType == null) {
      throw new ApiException("Missing the required parameter 'accountType' when calling openApiV30DpaEbpProductListGet");
    }

    if (request.productPlatformId == null) {
      throw new ApiException("Missing the required parameter 'productPlatformId' when calling openApiV30DpaEbpProductListGet");
    }
    return this.apiClient.requestWithHttpInfo<DpaEbpProductListV30Response>({
      method: "GET",
      path: "/open_api/v3.0/dpa/ebp/product/list/",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "account_type", value: request.accountType },
        { name: "product_platform_id", value: request.productPlatformId },
        { name: "filtering", value: request.filtering },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


