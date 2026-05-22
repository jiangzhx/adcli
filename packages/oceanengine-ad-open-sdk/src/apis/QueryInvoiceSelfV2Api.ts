// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QueryInvoiceSelfV2DifferenceInvoice, QueryInvoiceSelfV2InvoiceType, QueryInvoiceSelfV2Platform, QueryInvoiceSelfV2Response, QueryInvoiceSelfV2RevertStatusList } from "../models";


export class QueryInvoiceSelfV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2QueryInvoiceSelfGet(localAccountId: number, pageSize: number, page: number, statementSerials: string[], projectSerials: string[], invoiceStatuses: number[], invoiceSerialList: string[], contractSerial: string, submitStartTime: string, submitEndTime: string, invoiceStartDate: string, invoiceEndDate: string, invoiceType: QueryInvoiceSelfV2InvoiceType, differenceInvoice: QueryInvoiceSelfV2DifferenceInvoice, revertStatusList: QueryInvoiceSelfV2RevertStatusList[], platform: QueryInvoiceSelfV2Platform): Promise<QueryInvoiceSelfV2Response> {
    const response = await this.openApi2QueryInvoiceSelfGetWithHttpInfo(localAccountId, pageSize, page, statementSerials, projectSerials, invoiceStatuses, invoiceSerialList, contractSerial, submitStartTime, submitEndTime, invoiceStartDate, invoiceEndDate, invoiceType, differenceInvoice, revertStatusList, platform);
    return response.data;
  }

  async openApi2QueryInvoiceSelfGetWithHttpInfo(localAccountId: number, pageSize: number, page: number, statementSerials: string[], projectSerials: string[], invoiceStatuses: number[], invoiceSerialList: string[], contractSerial: string, submitStartTime: string, submitEndTime: string, invoiceStartDate: string, invoiceEndDate: string, invoiceType: QueryInvoiceSelfV2InvoiceType, differenceInvoice: QueryInvoiceSelfV2DifferenceInvoice, revertStatusList: QueryInvoiceSelfV2RevertStatusList[], platform: QueryInvoiceSelfV2Platform): Promise<ApiResponse<QueryInvoiceSelfV2Response>> {
    if (localAccountId == null) {
      throw new ApiException("Missing the required parameter 'localAccountId' when calling openApi2QueryInvoiceSelfGet");
    }

    if (pageSize == null) {
      throw new ApiException("Missing the required parameter 'pageSize' when calling openApi2QueryInvoiceSelfGet");
    }

    if (page == null) {
      throw new ApiException("Missing the required parameter 'page' when calling openApi2QueryInvoiceSelfGet");
    }
    return this.apiClient.requestWithHttpInfo<QueryInvoiceSelfV2Response>({
      method: "GET",
      path: "/open_api/2/query/invoice/self/",
      queryParams: [
        { name: "local_account_id", value: localAccountId },
        { name: "contract_serial", value: contractSerial },
        { name: "submit_start_time", value: submitStartTime },
        { name: "submit_end_time", value: submitEndTime },
        { name: "invoice_start_date", value: invoiceStartDate },
        { name: "invoice_end_date", value: invoiceEndDate },
        { name: "invoice_type", value: invoiceType },
        { name: "difference_invoice", value: differenceInvoice },
        { name: "platform", value: platform },
        { name: "page_size", value: pageSize },
        { name: "page", value: page },
        { name: "statement_serials", value: statementSerials, collectionFormat: "csv" },
        { name: "project_serials", value: projectSerials, collectionFormat: "csv" },
        { name: "invoice_statuses", value: invoiceStatuses, collectionFormat: "csv" },
        { name: "invoice_serial_list", value: invoiceSerialList, collectionFormat: "csv" },
        { name: "revert_status_list", value: revertStatusList, collectionFormat: "csv" }
      ]
    });
  }
}


