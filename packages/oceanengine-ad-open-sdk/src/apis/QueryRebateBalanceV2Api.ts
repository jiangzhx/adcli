// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QueryRebateBalanceV2Filtering, QueryRebateBalanceV2Response } from "../models";


export class QueryRebateBalanceV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2QueryRebateBalanceGet(agentId: number, filtering: QueryRebateBalanceV2Filtering, page: number, pageSize: number): Promise<QueryRebateBalanceV2Response> {
    const response = await this.openApi2QueryRebateBalanceGetWithHttpInfo(agentId, filtering, page, pageSize);
    return response.data;
  }

  async openApi2QueryRebateBalanceGetWithHttpInfo(agentId: number, filtering: QueryRebateBalanceV2Filtering, page: number, pageSize: number): Promise<ApiResponse<QueryRebateBalanceV2Response>> {
    if (agentId == null) {
      throw new ApiException("Missing the required parameter 'agentId' when calling openApi2QueryRebateBalanceGet");
    }
    return this.apiClient.requestWithHttpInfo<QueryRebateBalanceV2Response>({
      method: "GET",
      path: "/open_api/2/query/rebate_balance/",
      queryParams: [
        { name: "agent_id", value: agentId },
        { name: "filtering", value: filtering },
        { name: "page", value: page },
        { name: "page_size", value: pageSize }
      ]
    });
  }
}


