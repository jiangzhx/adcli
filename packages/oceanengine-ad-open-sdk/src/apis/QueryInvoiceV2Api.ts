// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QueryInvoiceV2Filtering, QueryInvoiceV2Response } from "../models";


export class QueryInvoiceV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2QueryInvoiceGet(agentId: number, filtering: QueryInvoiceV2Filtering, pageSize: number, page: number): Promise<QueryInvoiceV2Response> {
    const response = await this.openApi2QueryInvoiceGetWithHttpInfo(agentId, filtering, pageSize, page);
    return response.data;
  }

  async openApi2QueryInvoiceGetWithHttpInfo(agentId: number, filtering: QueryInvoiceV2Filtering, pageSize: number, page: number): Promise<ApiResponse<QueryInvoiceV2Response>> {
    if (agentId == null) {
      throw new ApiException("Missing the required parameter 'agentId' when calling openApi2QueryInvoiceGet");
    }
    return this.apiClient.requestWithHttpInfo<QueryInvoiceV2Response>({
      method: "GET",
      path: "/open_api/2/query/invoice/",
      queryParams: [
        { name: "agent_id", value: agentId },
        { name: "filtering", value: filtering },
        { name: "page_size", value: pageSize },
        { name: "page", value: page }
      ]
    });
  }
}


