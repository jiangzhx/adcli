// Generated from oceanengine/ad_open_sdk_go api/api_dpa_ebp_product_list_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { DpaEbpProductListV30AccountType, DpaEbpProductListV30Filtering, DpaEbpProductListV30Response } from "../models/index";


export interface DpaEbpProductListV30ApiOpenApiV30DpaEbpProductListGetRequest {
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

  async openApiV30DpaEbpProductListGet(request: DpaEbpProductListV30ApiOpenApiV30DpaEbpProductListGetRequest): Promise<DpaEbpProductListV30Response> {
    const response = await this.openApiV30DpaEbpProductListGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30DpaEbpProductListGetWithHttpInfo(request: DpaEbpProductListV30ApiOpenApiV30DpaEbpProductListGetRequest): Promise<ApiResponse<DpaEbpProductListV30Response>> {
    if (request.accountId == null) {
      throw new ApiException("accountId is required and must be specified");
    }

    if (request.accountType == null) {
      throw new ApiException("accountType is required and must be specified");
    }

    if (request.productPlatformId == null) {
      throw new ApiException("productPlatformId is required and must be specified");
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


