// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QueryInvoiceDetailV2Response } from "../models";


export class QueryInvoiceDetailV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2QueryInvoiceDetailGet(agentIds: number[], invoiceSerial: string, invoiceId: number): Promise<QueryInvoiceDetailV2Response> {
    const response = await this.openApi2QueryInvoiceDetailGetWithHttpInfo(agentIds, invoiceSerial, invoiceId);
    return response.data;
  }

  async openApi2QueryInvoiceDetailGetWithHttpInfo(agentIds: number[], invoiceSerial: string, invoiceId: number): Promise<ApiResponse<QueryInvoiceDetailV2Response>> {
    if (agentIds == null) {
      throw new ApiException("Missing the required parameter 'agentIds' when calling openApi2QueryInvoiceDetailGet");
    }
    return this.apiClient.requestWithHttpInfo<QueryInvoiceDetailV2Response>({
      method: "GET",
      path: "/open_api/2/query/invoice_detail/",
      queryParams: [
        { name: "invoice_serial", value: invoiceSerial },
        { name: "invoice_id", value: invoiceId },
        { name: "agent_ids", value: agentIds, collectionFormat: "csv" }
      ]
    });
  }
}


