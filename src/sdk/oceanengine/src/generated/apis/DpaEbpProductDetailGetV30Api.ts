// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { DpaEbpProductDetailGetV30AccountType, DpaEbpProductDetailGetV30Filtering, DpaEbpProductDetailGetV30Response } from "../models";


export class DpaEbpProductDetailGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30DpaEbpProductDetailGetGet(accountId: number, accountType: DpaEbpProductDetailGetV30AccountType, platformId: number, filtering: DpaEbpProductDetailGetV30Filtering, page: number, pageSize: number): Promise<DpaEbpProductDetailGetV30Response> {
    const response = await this.openApiV30DpaEbpProductDetailGetGetWithHttpInfo(accountId, accountType, platformId, filtering, page, pageSize);
    return response.data;
  }

  async openApiV30DpaEbpProductDetailGetGetWithHttpInfo(accountId: number, accountType: DpaEbpProductDetailGetV30AccountType, platformId: number, filtering: DpaEbpProductDetailGetV30Filtering, page: number, pageSize: number): Promise<ApiResponse<DpaEbpProductDetailGetV30Response>> {

    return this.apiClient.requestWithHttpInfo<DpaEbpProductDetailGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/dpa/ebp/product/detail/get/",
      queryParams: [
        { name: "account_id", value: accountId },
        { name: "account_type", value: accountType },
        { name: "platform_id", value: platformId },
        { name: "filtering", value: filtering },
        { name: "page", value: page },
        { name: "page_size", value: pageSize }
      ]
    });
  }
}


