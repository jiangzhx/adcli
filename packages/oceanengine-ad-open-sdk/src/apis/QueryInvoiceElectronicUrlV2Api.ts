// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QueryInvoiceElectronicUrlV2Response } from "../models";


export class QueryInvoiceElectronicUrlV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2QueryInvoiceElectronicUrlGet(invoiceSerial: string, agentIds: number[]): Promise<QueryInvoiceElectronicUrlV2Response> {
    const response = await this.openApi2QueryInvoiceElectronicUrlGetWithHttpInfo(invoiceSerial, agentIds);
    return response.data;
  }

  async openApi2QueryInvoiceElectronicUrlGetWithHttpInfo(invoiceSerial: string, agentIds: number[]): Promise<ApiResponse<QueryInvoiceElectronicUrlV2Response>> {
    if (invoiceSerial == null) {
      throw new ApiException("Missing the required parameter 'invoiceSerial' when calling openApi2QueryInvoiceElectronicUrlGet");
    }
    return this.apiClient.requestWithHttpInfo<QueryInvoiceElectronicUrlV2Response>({
      method: "GET",
      path: "/open_api/2/query/invoice_electronic_url/",
      queryParams: [
        { name: "invoice_serial", value: invoiceSerial },
        { name: "agent_ids", value: agentIds, collectionFormat: "csv" }
      ]
    });
  }
}


