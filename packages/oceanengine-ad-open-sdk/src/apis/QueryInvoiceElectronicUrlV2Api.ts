// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QueryInvoiceElectronicUrlV2Response } from "../models";


export interface OpenApi2QueryInvoiceElectronicUrlGetRequest {
  invoiceSerial: string;
  agentIds?: number[];
}

export class QueryInvoiceElectronicUrlV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2QueryInvoiceElectronicUrlGet(request: OpenApi2QueryInvoiceElectronicUrlGetRequest): Promise<QueryInvoiceElectronicUrlV2Response> {
    const response = await this.openApi2QueryInvoiceElectronicUrlGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2QueryInvoiceElectronicUrlGetWithHttpInfo(request: OpenApi2QueryInvoiceElectronicUrlGetRequest): Promise<ApiResponse<QueryInvoiceElectronicUrlV2Response>> {
    if (request.invoiceSerial == null) {
      throw new ApiException("Missing the required parameter 'invoiceSerial' when calling openApi2QueryInvoiceElectronicUrlGet");
    }
    return this.apiClient.requestWithHttpInfo<QueryInvoiceElectronicUrlV2Response>({
      method: "GET",
      path: "/open_api/2/query/invoice_electronic_url/",
      queryParams: [
        { name: "agent_ids", value: request.agentIds, collectionFormat: "csv" },
        { name: "invoice_serial", value: request.invoiceSerial }
      ]
    });
  }
}


