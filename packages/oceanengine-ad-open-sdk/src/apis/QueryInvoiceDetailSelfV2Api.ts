// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QueryInvoiceDetailSelfV2Response } from "../models";


export class QueryInvoiceDetailSelfV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2QueryInvoiceDetailSelfGet(localAccountId: number, invoiceSerial: string, invoiceId: number): Promise<QueryInvoiceDetailSelfV2Response> {
    const response = await this.openApi2QueryInvoiceDetailSelfGetWithHttpInfo(localAccountId, invoiceSerial, invoiceId);
    return response.data;
  }

  async openApi2QueryInvoiceDetailSelfGetWithHttpInfo(localAccountId: number, invoiceSerial: string, invoiceId: number): Promise<ApiResponse<QueryInvoiceDetailSelfV2Response>> {
    if (localAccountId == null) {
      throw new ApiException("Missing the required parameter 'localAccountId' when calling openApi2QueryInvoiceDetailSelfGet");
    }
    return this.apiClient.requestWithHttpInfo<QueryInvoiceDetailSelfV2Response>({
      method: "GET",
      path: "/open_api/2/query/invoice_detail/self/",
      queryParams: [
        { name: "local_account_id", value: localAccountId },
        { name: "invoice_serial", value: invoiceSerial },
        { name: "invoice_id", value: invoiceId }
      ]
    });
  }
}


