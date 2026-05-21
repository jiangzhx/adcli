// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { QueryRebateAccountingInfoV2Filtering, QueryRebateAccountingInfoV2Response } from "../models";


export class QueryRebateAccountingInfoV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2QueryRebateAccountingInfoGet(agentId: number, filtering: QueryRebateAccountingInfoV2Filtering, page: number, pageSize: number): Promise<QueryRebateAccountingInfoV2Response> {
    const response = await this.openApi2QueryRebateAccountingInfoGetWithHttpInfo(agentId, filtering, page, pageSize);
    return response.data;
  }

  async openApi2QueryRebateAccountingInfoGetWithHttpInfo(agentId: number, filtering: QueryRebateAccountingInfoV2Filtering, page: number, pageSize: number): Promise<ApiResponse<QueryRebateAccountingInfoV2Response>> {
    if (agentId == null) {
      throw new ApiException("Missing the required parameter 'agentId' when calling openApi2QueryRebateAccountingInfoGet");
    }
    return this.apiClient.requestWithHttpInfo<QueryRebateAccountingInfoV2Response>({
      method: "GET",
      path: "/open_api/2/query/rebate_accounting_info/",
      queryParams: [
        { name: "agent_id", value: agentId },
        { name: "filtering", value: filtering },
        { name: "page", value: page },
        { name: "page_size", value: pageSize }
      ]
    });
  }
}


