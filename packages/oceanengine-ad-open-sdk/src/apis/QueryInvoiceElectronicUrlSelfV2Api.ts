// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QueryInvoiceElectronicUrlSelfV2Response } from "../models";


export interface OpenApi2QueryInvoiceElectronicUrlSelfGetRequest {
  localAccountId: number;
  invoiceSerial: string;
}

export class QueryInvoiceElectronicUrlSelfV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2QueryInvoiceElectronicUrlSelfGet(request: OpenApi2QueryInvoiceElectronicUrlSelfGetRequest): Promise<QueryInvoiceElectronicUrlSelfV2Response> {
    const response = await this.openApi2QueryInvoiceElectronicUrlSelfGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2QueryInvoiceElectronicUrlSelfGetWithHttpInfo(request: OpenApi2QueryInvoiceElectronicUrlSelfGetRequest): Promise<ApiResponse<QueryInvoiceElectronicUrlSelfV2Response>> {
    if (request.localAccountId == null) {
      throw new ApiException("Missing the required parameter 'localAccountId' when calling openApi2QueryInvoiceElectronicUrlSelfGet");
    }

    if (request.invoiceSerial == null) {
      throw new ApiException("Missing the required parameter 'invoiceSerial' when calling openApi2QueryInvoiceElectronicUrlSelfGet");
    }
    return this.apiClient.requestWithHttpInfo<QueryInvoiceElectronicUrlSelfV2Response>({
      method: "GET",
      path: "/open_api/2/query/invoice_electronic_url/self/",
      queryParams: [
        { name: "local_account_id", value: request.localAccountId },
        { name: "invoice_serial", value: request.invoiceSerial }
      ]
    });
  }
}


