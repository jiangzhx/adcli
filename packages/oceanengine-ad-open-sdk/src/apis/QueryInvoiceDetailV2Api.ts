// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QueryInvoiceDetailV2Response } from "../models";


export interface OpenApi2QueryInvoiceDetailGetRequest {
  agentIds: number[];
  invoiceSerial?: string;
  invoiceId?: number;
}

export class QueryInvoiceDetailV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2QueryInvoiceDetailGet(request: OpenApi2QueryInvoiceDetailGetRequest): Promise<QueryInvoiceDetailV2Response> {
    const response = await this.openApi2QueryInvoiceDetailGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2QueryInvoiceDetailGetWithHttpInfo(request: OpenApi2QueryInvoiceDetailGetRequest): Promise<ApiResponse<QueryInvoiceDetailV2Response>> {
    if (request.agentIds == null) {
      throw new ApiException("Missing the required parameter 'agentIds' when calling openApi2QueryInvoiceDetailGet");
    }
    return this.apiClient.requestWithHttpInfo<QueryInvoiceDetailV2Response>({
      method: "GET",
      path: "/open_api/2/query/invoice_detail/",
      queryParams: [
        { name: "agent_ids", value: request.agentIds, collectionFormat: "csv" },
        { name: "invoice_serial", value: request.invoiceSerial },
        { name: "invoice_id", value: request.invoiceId }
      ]
    });
  }
}


