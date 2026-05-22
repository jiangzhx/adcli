// Generated from oceanengine/ad_open_sdk_go api/api_query_invoice_self_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { QueryInvoiceSelfV2DifferenceInvoice, QueryInvoiceSelfV2InvoiceType, QueryInvoiceSelfV2Platform, QueryInvoiceSelfV2Response, QueryInvoiceSelfV2RevertStatusList } from "../models/index";


export interface QueryInvoiceSelfV2ApiOpenApi2QueryInvoiceSelfGetRequest {
  localAccountId: number | string;
  pageSize: number;
  page: number;
  statementSerials?: string[];
  projectSerials?: string[];
  invoiceStatuses?: number[];
  invoiceSerialList?: string[];
  contractSerial?: string;
  submitStartTime?: string;
  submitEndTime?: string;
  invoiceStartDate?: string;
  invoiceEndDate?: string;
  invoiceType?: QueryInvoiceSelfV2InvoiceType;
  differenceInvoice?: QueryInvoiceSelfV2DifferenceInvoice;
  revertStatusList?: QueryInvoiceSelfV2RevertStatusList[];
  platform?: QueryInvoiceSelfV2Platform;
}

export class QueryInvoiceSelfV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2QueryInvoiceSelfGet(request: QueryInvoiceSelfV2ApiOpenApi2QueryInvoiceSelfGetRequest): Promise<QueryInvoiceSelfV2Response> {
    const response = await this.openApi2QueryInvoiceSelfGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2QueryInvoiceSelfGetWithHttpInfo(request: QueryInvoiceSelfV2ApiOpenApi2QueryInvoiceSelfGetRequest): Promise<ApiResponse<QueryInvoiceSelfV2Response>> {
    if (request.localAccountId == null) {
      throw new ApiException("Missing the required parameter 'localAccountId' when calling openApi2QueryInvoiceSelfGet");
    }

    if (request.pageSize == null) {
      throw new ApiException("Missing the required parameter 'pageSize' when calling openApi2QueryInvoiceSelfGet");
    }

    if (request.page == null) {
      throw new ApiException("Missing the required parameter 'page' when calling openApi2QueryInvoiceSelfGet");
    }
    return this.apiClient.requestWithHttpInfo<QueryInvoiceSelfV2Response>({
      method: "GET",
      path: "/open_api/2/query/invoice/self/",
      queryParams: [
        { name: "local_account_id", value: request.localAccountId },
        { name: "statement_serials", value: request.statementSerials },
        { name: "project_serials", value: request.projectSerials },
        { name: "invoice_statuses", value: request.invoiceStatuses },
        { name: "invoice_serial_list", value: request.invoiceSerialList },
        { name: "contract_serial", value: request.contractSerial },
        { name: "submit_start_time", value: request.submitStartTime },
        { name: "submit_end_time", value: request.submitEndTime },
        { name: "invoice_start_date", value: request.invoiceStartDate },
        { name: "invoice_end_date", value: request.invoiceEndDate },
        { name: "invoice_type", value: request.invoiceType },
        { name: "difference_invoice", value: request.differenceInvoice },
        { name: "revert_status_list", value: request.revertStatusList },
        { name: "platform", value: request.platform },
        { name: "page_size", value: request.pageSize },
        { name: "page", value: request.page }
      ]
    });
  }
}


