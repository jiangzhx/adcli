// Generated from oceanengine/ad_open_sdk_go api/api_local_market_page_get_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { LocalMarketPageGetV30Response } from "../models/index";


export interface LocalMarketPageGetV30ApiOpenApiV30LocalMarketPageGetGetRequest {
  localAccountId: number | string;
  marketPageIds: (number | string)[];
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
      throw new ApiException("localAccountId is required and must be specified");
    }

    if (request.localAccountId != null && Number(request.localAccountId) < 1) {
      throw new ApiException("localAccountId must be greater than 1");
    }

    if (request.marketPageIds == null) {
      throw new ApiException("marketPageIds is required and must be specified");
    }

    if (request.marketPageIds != null && request.marketPageIds.length < 1) {
      throw new ApiException("marketPageIds must have at least 1 elements");
    }

    if (request.marketPageIds != null && request.marketPageIds.length > 50) {
      throw new ApiException("marketPageIds must have less than 50 elements");
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


