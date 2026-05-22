// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { QueryInvoiceDetailV2ResponseDataBillProjectInfoListInner, QueryInvoiceDetailV2ResponseDataCusQualificationInfo, QueryInvoiceDetailV2ResponseDataElectronicReceiveInfo, QueryInvoiceDetailV2ResponseDataPaperReceiveInfo, QueryInvoiceDetailV2ResponseDataPaperSendInfo } from "../models";

export interface QueryInvoiceDetailV2ResponseData {
  account_id?: number;
  apply_amount?: number;
  approval_status_name?: string;
  bill_project_info_list?: QueryInvoiceDetailV2ResponseDataBillProjectInfoListInner[];
  contract_serial?: string;
  contract_subject_name?: string;
  cus_qualification_info?: QueryInvoiceDetailV2ResponseDataCusQualificationInfo;
  customer_id?: number;
  customer_name?: string;
  electronic_receive_info?: QueryInvoiceDetailV2ResponseDataElectronicReceiveInfo;
  fail_reason?: string;
  invoice_amount?: number;
  invoice_id?: number;
  invoice_object_name?: string;
  invoice_serial?: string;
  invoice_status_name?: string;
  invoice_type_name?: string;
  org_invoice_id?: number;
  paper_receive_info?: QueryInvoiceDetailV2ResponseDataPaperReceiveInfo;
  paper_send_info?: QueryInvoiceDetailV2ResponseDataPaperSendInfo;
  platform_name?: string;
  revert_amount?: number;
  revert_frozen_amount?: number;
  revert_status_name?: string;
  send_status_name?: string;
  unprintable_remark?: string;
}

