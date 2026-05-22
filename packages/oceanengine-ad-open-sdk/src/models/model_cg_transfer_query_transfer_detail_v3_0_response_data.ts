// Generated from oceanengine/ad_open_sdk_go models/model_cg_transfer_query_transfer_detail_v3_0_response_data.go
// Do not edit manually.

import type { CgTransferQueryTransferDetailV30DataTransferDirection, CgTransferQueryTransferDetailV30DataTransferStatus, CgTransferQueryTransferDetailV30ResponseDataTransferTargetRecordListInner } from "../models/index";

export interface CgTransferQueryTransferDetailV30ResponseData {
  biz_request_no?: string;
  remark?: string;
  transfer_amount?: number;
  transfer_create_time?: string;
  transfer_direction?: CgTransferQueryTransferDetailV30DataTransferDirection;
  transfer_finish_time?: string;
  transfer_serial?: string;
  transfer_status?: CgTransferQueryTransferDetailV30DataTransferStatus;
  transfer_target_record_list?: CgTransferQueryTransferDetailV30ResponseDataTransferTargetRecordListInner[];
}

