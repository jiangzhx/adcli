// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QueryRebateBalanceV2Filtering, QueryRebateBalanceV2Response } from "../models";


export interface OpenApi2QueryRebateBalanceGetRequest {
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

  async openApi2QueryRebateBalanceGet(request: OpenApi2QueryRebateBalanceGetRequest): Promise<QueryRebateBalanceV2Response> {
    const response = await this.openApi2QueryRebateBalanceGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2QueryRebateBalanceGetWithHttpInfo(request: OpenApi2QueryRebateBalanceGetRequest): Promise<ApiResponse<QueryRebateBalanceV2Response>> {
    if (request.agentId == null) {
      throw new ApiException("Missing the required parameter 'agentId' when calling openApi2QueryRebateBalanceGet");
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


