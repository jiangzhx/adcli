// Generated from oceanengine/ad_open_sdk_go models/model_cg_transfer_wallet_transfer_detail_v3_0_response_data_transfer_wallet_record_list_inner.go
// Do not edit manually.

import type { CgTransferWalletTransferDetailV30DataTransferWalletRecordListTransferStatus, CgTransferWalletTransferDetailV30ResponseDataTransferWalletRecordListInnerTransferCapitalRecordListInner } from "../models/index";

export interface CgTransferWalletTransferDetailV30ResponseDataTransferWalletRecordListInner {
  main_wallet_id?: number | string;
  sub_wallet_id?: number | string;
  transfer_amount?: number;
  transfer_capital_record_list?: CgTransferWalletTransferDetailV30ResponseDataTransferWalletRecordListInnerTransferCapitalRecordListInner[];
  transfer_serial?: string;
  transfer_status?: CgTransferWalletTransferDetailV30DataTransferWalletRecordListTransferStatus;
}

