// Generated from oceanengine/ad_open_sdk_go api/api_query_invoice_detail_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { QueryInvoiceDetailV2Response } from "../models/index";


export interface QueryInvoiceDetailV2ApiOpenApi2QueryInvoiceDetailGetRequest {
  agentIds: number | string[];
  invoiceSerial?: string;
  invoiceId?: number | string;
}

export class QueryInvoiceDetailV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2QueryInvoiceDetailGet(request: QueryInvoiceDetailV2ApiOpenApi2QueryInvoiceDetailGetRequest): Promise<QueryInvoiceDetailV2Response> {
    const response = await this.openApi2QueryInvoiceDetailGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2QueryInvoiceDetailGetWithHttpInfo(request: QueryInvoiceDetailV2ApiOpenApi2QueryInvoiceDetailGetRequest): Promise<ApiResponse<QueryInvoiceDetailV2Response>> {
    if (request.agentIds == null) {
      throw new ApiException("Missing the required parameter 'agentIds' when calling openApi2QueryInvoiceDetailGet");
    }
    return this.apiClient.requestWithHttpInfo<QueryInvoiceDetailV2Response>({
      method: "GET",
      path: "/open_api/2/query/invoice_detail/",
      queryParams: [
        { name: "agent_ids", value: request.agentIds },
        { name: "invoice_serial", value: request.invoiceSerial },
        { name: "invoice_id", value: request.invoiceId }
      ]
    });
  }
}


