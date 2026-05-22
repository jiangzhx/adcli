// Generated from oceanengine/ad_open_sdk_go api/api_query_invoice_detail_self_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { QueryInvoiceDetailSelfV2Response } from "../models/index";


export interface QueryInvoiceDetailSelfV2ApiOpenApi2QueryInvoiceDetailSelfGetRequest {
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

  async openApi2QueryInvoiceDetailSelfGet(request: QueryInvoiceDetailSelfV2ApiOpenApi2QueryInvoiceDetailSelfGetRequest): Promise<QueryInvoiceDetailSelfV2Response> {
    const response = await this.openApi2QueryInvoiceDetailSelfGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2QueryInvoiceDetailSelfGetWithHttpInfo(request: QueryInvoiceDetailSelfV2ApiOpenApi2QueryInvoiceDetailSelfGetRequest): Promise<ApiResponse<QueryInvoiceDetailSelfV2Response>> {
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


