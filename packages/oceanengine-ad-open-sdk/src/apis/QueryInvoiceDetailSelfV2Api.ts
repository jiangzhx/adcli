// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QueryInvoiceDetailSelfV2Response } from "../models";


export interface OpenApi2QueryInvoiceDetailSelfGetRequest {
  localAccountId: number | string;
  invoiceSerial?: string;
  invoiceId?: number | string;
}

export class QueryInvoiceDetailSelfV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2QueryInvoiceDetailSelfGet(request: OpenApi2QueryInvoiceDetailSelfGetRequest): Promise<QueryInvoiceDetailSelfV2Response> {
    const response = await this.openApi2QueryInvoiceDetailSelfGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2QueryInvoiceDetailSelfGetWithHttpInfo(request: OpenApi2QueryInvoiceDetailSelfGetRequest): Promise<ApiResponse<QueryInvoiceDetailSelfV2Response>> {
    if (request.localAccountId == null) {
      throw new ApiException("Missing the required parameter 'localAccountId' when calling openApi2QueryInvoiceDetailSelfGet");
    }
    return this.apiClient.requestWithHttpInfo<QueryInvoiceDetailSelfV2Response>({
      method: "GET",
      path: "/open_api/2/query/invoice_detail/self/",
      queryParams: [
        { name: "local_account_id", value: request.localAccountId },
        { name: "invoice_serial", value: request.invoiceSerial },
        { name: "invoice_id", value: request.invoiceId }
      ]
    });
  }
}


