// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { QueryInvoiceV2FilteringDifferenceInvoice, QueryInvoiceV2FilteringInvoiceType, QueryInvoiceV2FilteringPlatform, QueryInvoiceV2FilteringRevertStatusList } from "../models";

export interface QueryInvoiceV2Filtering {
  contract_serial?: string;
  difference_invoice?: QueryInvoiceV2FilteringDifferenceInvoice;
  invoice_end_date?: string;
  invoice_serial_list?: string[];
  invoice_start_date?: string;
  invoice_statuses?: number[];
  invoice_type?: QueryInvoiceV2FilteringInvoiceType;
  platform?: QueryInvoiceV2FilteringPlatform;
  project_serials?: string[];
  revert_status_list?: QueryInvoiceV2FilteringRevertStatusList[];
  statement_serials?: string[];
  submit_end_time?: string;
  submit_start_time?: string;
}

