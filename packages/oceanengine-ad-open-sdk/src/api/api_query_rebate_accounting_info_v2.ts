// Generated from oceanengine/ad_open_sdk_go api/api_query_rebate_accounting_info_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { QueryRebateAccountingInfoV2Filtering, QueryRebateAccountingInfoV2Response } from "../models/index";


export interface QueryRebateAccountingInfoV2ApiOpenApi2QueryRebateAccountingInfoGetRequest {
  agentId: number | string;
  filtering?: QueryRebateAccountingInfoV2Filtering;
  page?: number;
  pageSize?: number;
}

export class QueryRebateAccountingInfoV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2QueryRebateAccountingInfoGet(request: QueryRebateAccountingInfoV2ApiOpenApi2QueryRebateAccountingInfoGetRequest): Promise<QueryRebateAccountingInfoV2Response> {
    const response = await this.openApi2QueryRebateAccountingInfoGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2QueryRebateAccountingInfoGetWithHttpInfo(request: QueryRebateAccountingInfoV2ApiOpenApi2QueryRebateAccountingInfoGetRequest): Promise<ApiResponse<QueryRebateAccountingInfoV2Response>> {
    if (request.agentId == null) {
      throw new ApiException("Missing the required parameter 'agentId' when calling openApi2QueryRebateAccountingInfoGet");
    }
    return this.apiClient.requestWithHttpInfo<QueryRebateAccountingInfoV2Response>({
      method: "GET",
      path: "/open_api/2/query/rebate_accounting_info/",
      queryParams: [
        { name: "agent_id", value: request.agentId },
        { name: "filtering", value: request.filtering },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


