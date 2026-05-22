// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import type { CreateStatementInvoiceV2InvoiceType, CreateStatementInvoiceV2RequestInvoiceBillListInner, CreateStatementInvoiceV2RequestRebateItemListInner } from "../models";

export interface CreateStatementInvoiceV2Request {
  agent_ids: number[];
  customer_address?: string;
  customer_bank?: string;
  customer_bank_account?: string;
  customer_email: string;
  customer_id_list?: number[];
  customer_phone?: string;
  customer_sms_phone?: string;
  customer_subject_name: string;
  customer_tax_no: string;
  invoice_bill_list: CreateStatementInvoiceV2RequestInvoiceBillListInner[];
  invoice_type: CreateStatementInvoiceV2InvoiceType;
  rebate_item_list?: CreateStatementInvoiceV2RequestRebateItemListInner[];
  select_address_and_phone?: boolean;
  select_bank_and_account?: boolean;
  statement_serial: string;
  unprintable_remark?: string;
}

