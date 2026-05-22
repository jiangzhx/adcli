// Generated from oceanengine/ad_open_sdk_go api/api_query_invoice_tax_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { QueryInvoiceTaxV2Filtering, QueryInvoiceTaxV2Response } from "../models/index";


export interface QueryInvoiceTaxV2ApiOpenApi2QueryInvoiceTaxGetRequest {
  agentId: number | string;
  filtering: QueryInvoiceTaxV2Filtering;
}

export class QueryInvoiceTaxV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2QueryInvoiceTaxGet(request: QueryInvoiceTaxV2ApiOpenApi2QueryInvoiceTaxGetRequest): Promise<QueryInvoiceTaxV2Response> {
    const response = await this.openApi2QueryInvoiceTaxGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2QueryInvoiceTaxGetWithHttpInfo(request: QueryInvoiceTaxV2ApiOpenApi2QueryInvoiceTaxGetRequest): Promise<ApiResponse<QueryInvoiceTaxV2Response>> {
    if (request.agentId == null) {
      throw new ApiException("Missing the required parameter 'agentId' when calling openApi2QueryInvoiceTaxGet");
    }

    if (request.filtering == null) {
      throw new ApiException("Missing the required parameter 'filtering' when calling openApi2QueryInvoiceTaxGet");
    }
    return this.apiClient.requestWithHttpInfo<QueryInvoiceTaxV2Response>({
      method: "GET",
      path: "/open_api/2/query/invoice_tax/",
      queryParams: [
        { name: "agent_id", value: request.agentId },
        { name: "filtering", value: request.filtering }
      ]
    });
  }
}


