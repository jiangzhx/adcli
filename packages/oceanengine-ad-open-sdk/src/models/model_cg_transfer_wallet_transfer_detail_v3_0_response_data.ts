// Generated from oceanengine/ad_open_sdk_go models/model_cg_transfer_wallet_transfer_detail_v3_0_response_data.go
// Do not edit manually.

import type { CgTransferWalletTransferDetailV30DataTransferDirection, CgTransferWalletTransferDetailV30DataTransferStatus, CgTransferWalletTransferDetailV30ResponseDataTransferWalletRecordListInner } from "../models/index";

export interface CgTransferWalletTransferDetailV30ResponseData {
  biz_request_no?: string;
  remark?: string;
  transfer_amount?: number;
  transfer_create_time?: string;
  transfer_direction?: CgTransferWalletTransferDetailV30DataTransferDirection;
  transfer_finish_time?: string;
  transfer_serial?: string;
  transfer_status?: CgTransferWalletTransferDetailV30DataTransferStatus;
  transfer_wallet_record_list?: CgTransferWalletTransferDetailV30ResponseDataTransferWalletRecordListInner[];
}

