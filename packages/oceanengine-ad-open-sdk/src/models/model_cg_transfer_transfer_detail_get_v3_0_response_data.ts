// Generated from oceanengine/ad_open_sdk_go models/model_cg_transfer_transfer_detail_get_v3_0_response_data.go
// Do not edit manually.

import type { CgTransferTransferDetailGetV30DataTransferDirection, CgTransferTransferDetailGetV30DataTransferStatus, CgTransferTransferDetailGetV30ResponseDataTransferTargetRecordListInner } from "../models/index";

export interface CgTransferTransferDetailGetV30ResponseData {
  biz_request_no?: string;
  remark?: string;
  transfer_amount?: number;
  transfer_create_time?: string;
  transfer_direction?: CgTransferTransferDetailGetV30DataTransferDirection;
  transfer_finish_time?: string;
  transfer_serial?: string;
  transfer_status?: CgTransferTransferDetailGetV30DataTransferStatus;
  transfer_target_record_list?: CgTransferTransferDetailGetV30ResponseDataTransferTargetRecordListInner[];
}

