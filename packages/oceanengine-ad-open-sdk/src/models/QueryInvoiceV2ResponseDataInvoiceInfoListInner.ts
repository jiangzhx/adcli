// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

export interface QueryInvoiceV2ResponseDataInvoiceInfoListInner {
  abandoned_amount?: number;
  actual_invoice_amount?: number;
  apply_amount?: number;
  contract_name?: string;
  contract_serial?: string;
  contract_subject_name?: string;
  customer_id?: number;
  customer_name?: string;
  customer_subject_name?: string;
  difference_invoice_name?: string;
  invoice_amount?: number;
  invoice_codes?: string[];
  invoice_id: number;
  invoice_nos?: string[];
  invoice_object_name?: string;
  invoice_project_list?: string[];
  invoice_serial: string;
  invoice_status?: number;
  invoice_status_name?: string;
  invoice_type?: number;
  invoice_type_name?: string;
  issue_time?: string;
  platform_name?: string;
  revert_amount?: number;
  revert_frozen_amount?: number;
  revert_status?: number;
  revert_status_name?: string;
  submit_time?: string;
  submitter_name?: string;
}

