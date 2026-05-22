// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QueryInvoiceElectronicUrlSelfV2Response } from "../models";


export class QueryInvoiceElectronicUrlSelfV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2QueryInvoiceElectronicUrlSelfGet(localAccountId: number, invoiceSerial: string): Promise<QueryInvoiceElectronicUrlSelfV2Response> {
    const response = await this.openApi2QueryInvoiceElectronicUrlSelfGetWithHttpInfo(localAccountId, invoiceSerial);
    return response.data;
  }

  async openApi2QueryInvoiceElectronicUrlSelfGetWithHttpInfo(localAccountId: number, invoiceSerial: string): Promise<ApiResponse<QueryInvoiceElectronicUrlSelfV2Response>> {
    if (localAccountId == null) {
      throw new ApiException("Missing the required parameter 'localAccountId' when calling openApi2QueryInvoiceElectronicUrlSelfGet");
    }

    if (invoiceSerial == null) {
      throw new ApiException("Missing the required parameter 'invoiceSerial' when calling openApi2QueryInvoiceElectronicUrlSelfGet");
    }
    return this.apiClient.requestWithHttpInfo<QueryInvoiceElectronicUrlSelfV2Response>({
      method: "GET",
      path: "/open_api/2/query/invoice_electronic_url/self/",
      queryParams: [
        { name: "local_account_id", value: localAccountId },
        { name: "invoice_serial", value: invoiceSerial }
      ]
    });
  }
}


