// Generated from oceanengine/ad_open_sdk_go models/model_cg_transfer_transfer_detail_get_v3_0_response_data_transfer_target_record_list_inner.go
// Do not edit manually.

import type { CgTransferTransferDetailGetV30DataTransferTargetRecordListTransferStatus, CgTransferTransferDetailGetV30ResponseDataTransferTargetRecordListInnerTransferCapitalRecordListInner } from "../models/index";

export interface CgTransferTransferDetailGetV30ResponseDataTransferTargetRecordListInner {
  opponent_target_id?: number | string;
  target_id?: number | string;
  target_transfer_serial?: string;
  transfer_amount?: number;
  transfer_capital_record_list?: CgTransferTransferDetailGetV30ResponseDataTransferTargetRecordListInnerTransferCapitalRecordListInner[];
  transfer_status?: CgTransferTransferDetailGetV30DataTransferTargetRecordListTransferStatus;
}

