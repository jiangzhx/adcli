// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { CgTransferWalletTransferListV30DataRecordListPayeeCategory, CgTransferWalletTransferListV30DataRecordListRemitterCategory, CgTransferWalletTransferListV30DataRecordListTransferTargetStatus, CgTransferWalletTransferListV30ResponseDataRecordListInnerTransferCapitalRecordListInner } from "../models";

export interface CgTransferWalletTransferListV30ResponseDataRecordListInner {
  biz_request_no?: string;
  payee_category?: CgTransferWalletTransferListV30DataRecordListPayeeCategory;
  payee_id?: number;
  remark?: string;
  remitter_category?: CgTransferWalletTransferListV30DataRecordListRemitterCategory;
  remitter_id?: number;
  transfer_capital_record_list?: CgTransferWalletTransferListV30ResponseDataRecordListInnerTransferCapitalRecordListInner[];
  transfer_order_serial?: string;
  transfer_target_amount?: number;
  transfer_target_create_time?: string;
  transfer_target_finish_time?: string;
  transfer_target_serial?: string;
  transfer_target_status?: CgTransferWalletTransferListV30DataRecordListTransferTargetStatus;
}

