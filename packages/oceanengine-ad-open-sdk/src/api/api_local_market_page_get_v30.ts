// Generated from oceanengine/ad_open_sdk_go api/api_local_market_page_get_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { LocalMarketPageGetV30Response } from "../models/index";


export interface LocalMarketPageGetV30ApiOpenApiV30LocalMarketPageGetGetRequest {
  localAccountId: number | string;
  marketPageIds: number | string[];
}

export class LocalMarketPageGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30LocalMarketPageGetGet(request: LocalMarketPageGetV30ApiOpenApiV30LocalMarketPageGetGetRequest): Promise<LocalMarketPageGetV30Response> {
    const response = await this.openApiV30LocalMarketPageGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30LocalMarketPageGetGetWithHttpInfo(request: LocalMarketPageGetV30ApiOpenApiV30LocalMarketPageGetGetRequest): Promise<ApiResponse<LocalMarketPageGetV30Response>> {
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
        { name: "market_page_ids", value: request.marketPageIds }
      ]
    });
  }
}


