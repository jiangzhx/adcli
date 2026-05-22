// Generated from oceanengine/ad_open_sdk_go models/model_query_invoice_tax_v2_response_data_invoice_list_inner_bill_list_inner.go
// Do not edit manually.

import type { QueryInvoiceTaxV2ResponseDataInvoiceListInnerBillListInnerBillDetailListInner } from "../models/index";

export interface QueryInvoiceTaxV2ResponseDataInvoiceListInnerBillListInner {
  bill_detail_list?: QueryInvoiceTaxV2ResponseDataInvoiceListInnerBillListInnerBillDetailListInner[];
  invoice_code?: string;
  invoice_date?: string;
  invoice_no?: string;
  total_price_tax?: number;
}

