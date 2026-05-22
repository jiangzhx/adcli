// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { CgTransferWalletTransferDetailV30DataTransferWalletRecordListTransferStatus, CgTransferWalletTransferDetailV30ResponseDataTransferWalletRecordListInnerTransferCapitalRecordListInner } from "../models";

export interface CgTransferWalletTransferDetailV30ResponseDataTransferWalletRecordListInner {
  main_wallet_id?: number | string;
  sub_wallet_id?: number | string;
  transfer_amount?: number;
  transfer_capital_record_list?: CgTransferWalletTransferDetailV30ResponseDataTransferWalletRecordListInnerTransferCapitalRecordListInner[];
  transfer_serial?: string;
  transfer_status?: CgTransferWalletTransferDetailV30DataTransferWalletRecordListTransferStatus;
}

