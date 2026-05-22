// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { LandingPageSellStrategyAddRequest, LandingPageSellStrategyAddResponseData, LandingPageSellStrategyGetResponseData } from "../models";

export interface LandingPageSellStrategyApiAddRequest {
  data: LandingPageSellStrategyAddRequest;
}

export interface LandingPageSellStrategyApiGetRequest {
  accountId: number | string;
  strategyId?: number | string;
  strategyStatus?: number;
  strategyName?: string;
  fullStrategyName?: string;
  page?: number;
  pageSize?: number;
  fields?: unknown;
}


export class LandingPageSellStrategyApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async add(request: LandingPageSellStrategyApiAddRequest): Promise<LandingPageSellStrategyAddResponseData> {
    const response = await this.addWithHttpInfo(request);
    return response.data;
  }

  async addWithHttpInfo(request: LandingPageSellStrategyApiAddRequest): Promise<ApiResponse<LandingPageSellStrategyAddResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling add");
    }
    return this.apiClient.requestWithHttpInfo<LandingPageSellStrategyAddResponseData>({
      method: "POST",
      path: "/landing_page_sell_strategy/add",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async get(request: LandingPageSellStrategyApiGetRequest): Promise<LandingPageSellStrategyGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: LandingPageSellStrategyApiGetRequest): Promise<ApiResponse<LandingPageSellStrategyGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<LandingPageSellStrategyGetResponseData>({
      method: "GET",
      path: "/landing_page_sell_strategy/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "strategy_id", value: request.strategyId },
        { name: "strategy_status", value: request.strategyStatus },
        { name: "strategy_name", value: request.strategyName },
        { name: "full_strategy_name", value: request.fullStrategyName },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

}


