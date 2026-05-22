// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { QueryInvoiceDetailSelfV2ResponseDataBillProjectInfoListInner, QueryInvoiceDetailSelfV2ResponseDataCusQualificationInfo, QueryInvoiceDetailSelfV2ResponseDataElectronicReceiveInfo, QueryInvoiceDetailSelfV2ResponseDataPaperReceiveInfo, QueryInvoiceDetailSelfV2ResponseDataPaperSendInfo } from "../models";

export interface QueryInvoiceDetailSelfV2ResponseData {
  account_id?: number;
  apply_amount?: number;
  approval_status_name?: string;
  bill_project_info_list?: QueryInvoiceDetailSelfV2ResponseDataBillProjectInfoListInner[];
  contract_serial?: string;
  contract_subject_name?: string;
  cus_qualification_info?: QueryInvoiceDetailSelfV2ResponseDataCusQualificationInfo;
  customer_id?: number;
  customer_name?: string;
  electronic_receive_info?: QueryInvoiceDetailSelfV2ResponseDataElectronicReceiveInfo;
  fail_reason?: string;
  invoice_amount?: number;
  invoice_id?: number;
  invoice_object_name?: string;
  invoice_serial?: string;
  invoice_status_name?: string;
  invoice_type_name?: string;
  org_invoice_id?: number;
  paper_receive_info?: QueryInvoiceDetailSelfV2ResponseDataPaperReceiveInfo;
  paper_send_info?: QueryInvoiceDetailSelfV2ResponseDataPaperSendInfo;
  platform_name?: string;
  revert_amount?: number;
  revert_frozen_amount?: number;
  revert_status_name?: string;
  send_status_name?: string;
  unprintable_remark?: string;
}

