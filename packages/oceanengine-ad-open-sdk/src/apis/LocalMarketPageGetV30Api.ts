// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { LocalMarketPageGetV30Response } from "../models";


export class LocalMarketPageGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30LocalMarketPageGetGet(localAccountId: number, marketPageIds: number[]): Promise<LocalMarketPageGetV30Response> {
    const response = await this.openApiV30LocalMarketPageGetGetWithHttpInfo(localAccountId, marketPageIds);
    return response.data;
  }

  async openApiV30LocalMarketPageGetGetWithHttpInfo(localAccountId: number, marketPageIds: number[]): Promise<ApiResponse<LocalMarketPageGetV30Response>> {
    if (localAccountId == null) {
      throw new ApiException("Missing the required parameter 'localAccountId' when calling openApiV30LocalMarketPageGetGet");
    }

    if (marketPageIds == null) {
      throw new ApiException("Missing the required parameter 'marketPageIds' when calling openApiV30LocalMarketPageGetGet");
    }
    return this.apiClient.requestWithHttpInfo<LocalMarketPageGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/local/market_page/get/",
      queryParams: [
        { name: "local_account_id", value: localAccountId },
        { name: "market_page_ids", value: marketPageIds, collectionFormat: "csv" }
      ]
    });
  }
}


