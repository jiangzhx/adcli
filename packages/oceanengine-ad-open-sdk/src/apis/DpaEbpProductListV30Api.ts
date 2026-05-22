// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { DpaEbpProductListV30AccountType, DpaEbpProductListV30Filtering, DpaEbpProductListV30Response } from "../models";


export class DpaEbpProductListV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30DpaEbpProductListGet(accountId: number, accountType: DpaEbpProductListV30AccountType, productPlatformId: number, filtering: DpaEbpProductListV30Filtering, page: number, pageSize: number): Promise<DpaEbpProductListV30Response> {
    const response = await this.openApiV30DpaEbpProductListGetWithHttpInfo(accountId, accountType, productPlatformId, filtering, page, pageSize);
    return response.data;
  }

  async openApiV30DpaEbpProductListGetWithHttpInfo(accountId: number, accountType: DpaEbpProductListV30AccountType, productPlatformId: number, filtering: DpaEbpProductListV30Filtering, page: number, pageSize: number): Promise<ApiResponse<DpaEbpProductListV30Response>> {
    if (accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling openApiV30DpaEbpProductListGet");
    }

    if (accountType == null) {
      throw new ApiException("Missing the required parameter 'accountType' when calling openApiV30DpaEbpProductListGet");
    }

    if (productPlatformId == null) {
      throw new ApiException("Missing the required parameter 'productPlatformId' when calling openApiV30DpaEbpProductListGet");
    }
    return this.apiClient.requestWithHttpInfo<DpaEbpProductListV30Response>({
      method: "GET",
      path: "/open_api/v3.0/dpa/ebp/product/list/",
      queryParams: [
        { name: "account_id", value: accountId },
        { name: "account_type", value: accountType },
        { name: "product_platform_id", value: productPlatformId },
        { name: "filtering", value: filtering },
        { name: "page", value: page },
        { name: "page_size", value: pageSize }
      ]
    });
  }
}


