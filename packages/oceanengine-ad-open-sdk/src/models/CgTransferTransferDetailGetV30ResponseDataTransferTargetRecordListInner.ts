// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { CgTransferTransferDetailGetV30DataTransferTargetRecordListTransferStatus, CgTransferTransferDetailGetV30ResponseDataTransferTargetRecordListInnerTransferCapitalRecordListInner } from "../models";

export interface CgTransferTransferDetailGetV30ResponseDataTransferTargetRecordListInner {
  opponent_target_id?: number | string;
  target_id?: number | string;
  target_transfer_serial?: string;
  transfer_amount?: number;
  transfer_capital_record_list?: CgTransferTransferDetailGetV30ResponseDataTransferTargetRecordListInnerTransferCapitalRecordListInner[];
  transfer_status?: CgTransferTransferDetailGetV30DataTransferTargetRecordListTransferStatus;
}

