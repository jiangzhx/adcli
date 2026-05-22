// Generated from oceanengine/ad_open_sdk_go models/model_create_project_invoice_v2_request.go
// Do not edit manually.

import type { CreateProjectInvoiceV2InvoiceType, CreateProjectInvoiceV2RequestInvoiceBillListInner } from "../models/index";

export interface CreateProjectInvoiceV2Request {
  customer_address?: string;
  customer_bank?: string;
  customer_bank_account?: string;
  customer_email: string;
  customer_phone?: string;
  customer_sms_phone?: string;
  customer_subject_name: string;
  customer_tax_no: string;
  invoice_bill_list: CreateProjectInvoiceV2RequestInvoiceBillListInner[];
  invoice_type: CreateProjectInvoiceV2InvoiceType;
  local_account_id: number | string;
  project_serial_list: string[];
  select_address_and_phone?: boolean;
  select_bank_and_account?: boolean;
  unprintable_remark?: string;
}

