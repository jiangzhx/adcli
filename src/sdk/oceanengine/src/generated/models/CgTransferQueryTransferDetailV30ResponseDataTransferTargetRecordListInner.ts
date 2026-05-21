// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import type { CgTransferQueryTransferDetailV30DataTransferTargetRecordListTransferStatus, CgTransferQueryTransferDetailV30ResponseDataTransferTargetRecordListInnerTransferCapitalRecordListInner } from "../models";

export interface CgTransferQueryTransferDetailV30ResponseDataTransferTargetRecordListInner {
  account_id?: number;
  target_account_id?: number;
  target_transfer_serial?: string;
  transfer_amount?: number;
  transfer_capital_record_list?: CgTransferQueryTransferDetailV30ResponseDataTransferTargetRecordListInnerTransferCapitalRecordListInner[];
  transfer_status?: CgTransferQueryTransferDetailV30DataTransferTargetRecordListTransferStatus;
}

