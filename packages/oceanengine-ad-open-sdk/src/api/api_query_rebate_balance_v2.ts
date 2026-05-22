// Generated from oceanengine/ad_open_sdk_go api/api_query_rebate_balance_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { QueryRebateBalanceV2Filtering, QueryRebateBalanceV2Response } from "../models/index";


export interface QueryRebateBalanceV2ApiOpenApi2QueryRebateBalanceGetRequest {
  agentId: number | string;
  filtering?: QueryRebateBalanceV2Filtering;
  page?: number;
  pageSize?: number;
}

export class QueryRebateBalanceV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2QueryRebateBalanceGet(request: QueryRebateBalanceV2ApiOpenApi2QueryRebateBalanceGetRequest): Promise<QueryRebateBalanceV2Response> {
    const response = await this.openApi2QueryRebateBalanceGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2QueryRebateBalanceGetWithHttpInfo(request: QueryRebateBalanceV2ApiOpenApi2QueryRebateBalanceGetRequest): Promise<ApiResponse<QueryRebateBalanceV2Response>> {
    if (request.agentId == null) {
      throw new ApiException("agentId is required and must be specified");
    }
    return this.apiClient.requestWithHttpInfo<QueryRebateBalanceV2Response>({
      method: "GET",
      path: "/open_api/2/query/rebate_balance/",
      queryParams: [
        { name: "agent_id", value: request.agentId },
        { name: "filtering", value: request.filtering },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


