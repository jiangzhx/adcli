// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { LocalMarketPageGetV30Response } from "../models";


export interface OpenApiV30LocalMarketPageGetGetRequest {
  localAccountId: number;
  marketPageIds: number[];
}

export class LocalMarketPageGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30LocalMarketPageGetGet(request: OpenApiV30LocalMarketPageGetGetRequest): Promise<LocalMarketPageGetV30Response> {
    const response = await this.openApiV30LocalMarketPageGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30LocalMarketPageGetGetWithHttpInfo(request: OpenApiV30LocalMarketPageGetGetRequest): Promise<ApiResponse<LocalMarketPageGetV30Response>> {
    if (request.localAccountId == null) {
      throw new ApiException("Missing the required parameter 'localAccountId' when calling openApiV30LocalMarketPageGetGet");
    }

    if (request.marketPageIds == null) {
      throw new ApiException("Missing the required parameter 'marketPageIds' when calling openApiV30LocalMarketPageGetGet");
    }
    return this.apiClient.requestWithHttpInfo<LocalMarketPageGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/local/market_page/get/",
      queryParams: [
        { name: "local_account_id", value: request.localAccountId },
        { name: "market_page_ids", value: request.marketPageIds, collectionFormat: "csv" }
      ]
    });
  }
}


