// Generated from oceanengine/ad_open_sdk_go api/api_query_invoice_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { QueryInvoiceV2Filtering, QueryInvoiceV2Response } from "../models/index";


export interface QueryInvoiceV2ApiOpenApi2QueryInvoiceGetRequest {
  agentId: number | string;
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

  async openApi2QueryInvoiceGet(request: QueryInvoiceV2ApiOpenApi2QueryInvoiceGetRequest): Promise<QueryInvoiceV2Response> {
    const response = await this.openApi2QueryInvoiceGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2QueryInvoiceGetWithHttpInfo(request: QueryInvoiceV2ApiOpenApi2QueryInvoiceGetRequest): Promise<ApiResponse<QueryInvoiceV2Response>> {
    if (request.agentId == null) {
      throw new ApiException("agentId is required and must be specified");
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


