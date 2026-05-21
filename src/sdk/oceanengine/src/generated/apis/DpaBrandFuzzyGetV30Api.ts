// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { DpaBrandFuzzyGetV30AccountType, DpaBrandFuzzyGetV30Response } from "../models";


export class DpaBrandFuzzyGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30DpaBrandFuzzyGetGet(accountId: number, accountType: DpaBrandFuzzyGetV30AccountType, brandName: string, page: number, pageSize: number): Promise<DpaBrandFuzzyGetV30Response> {
    const response = await this.openApiV30DpaBrandFuzzyGetGetWithHttpInfo(accountId, accountType, brandName, page, pageSize);
    return response.data;
  }

  async openApiV30DpaBrandFuzzyGetGetWithHttpInfo(accountId: number, accountType: DpaBrandFuzzyGetV30AccountType, brandName: string, page: number, pageSize: number): Promise<ApiResponse<DpaBrandFuzzyGetV30Response>> {
    if (accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling openApiV30DpaBrandFuzzyGetGet");
    }

    if (accountType == null) {
      throw new ApiException("Missing the required parameter 'accountType' when calling openApiV30DpaBrandFuzzyGetGet");
    }

    if (brandName == null) {
      throw new ApiException("Missing the required parameter 'brandName' when calling openApiV30DpaBrandFuzzyGetGet");
    }
    return this.apiClient.requestWithHttpInfo<DpaBrandFuzzyGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/dpa/brand/fuzzy/get/",
      queryParams: [
        { name: "account_id", value: accountId },
        { name: "account_type", value: accountType },
        { name: "brand_name", value: brandName },
        { name: "page", value: page },
        { name: "page_size", value: pageSize }
      ]
    });
  }
}


