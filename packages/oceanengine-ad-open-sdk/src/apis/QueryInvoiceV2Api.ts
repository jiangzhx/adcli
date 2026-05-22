// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QueryInvoiceV2Filtering, QueryInvoiceV2Response } from "../models";


export interface OpenApi2QueryInvoiceGetRequest {
  agentId: number;
  filtering?: QueryInvoiceV2Filtering;
  pageSize?: number;
  page?: number;
}

export class QueryInvoiceV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2QueryInvoiceGet(request: OpenApi2QueryInvoiceGetRequest): Promise<QueryInvoiceV2Response> {
    const response = await this.openApi2QueryInvoiceGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2QueryInvoiceGetWithHttpInfo(request: OpenApi2QueryInvoiceGetRequest): Promise<ApiResponse<QueryInvoiceV2Response>> {
    if (request.agentId == null) {
      throw new ApiException("Missing the required parameter 'agentId' when calling openApi2QueryInvoiceGet");
    }
    return this.apiClient.requestWithHttpInfo<QueryInvoiceV2Response>({
      method: "GET",
      path: "/open_api/2/query/invoice/",
      queryParams: [
        { name: "agent_id", value: request.agentId },
        { name: "filtering", value: request.filtering },
        { name: "page_size", value: request.pageSize },
        { name: "page", value: request.page }
      ]
    });
  }
}


