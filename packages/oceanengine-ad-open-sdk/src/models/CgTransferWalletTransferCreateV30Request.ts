// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { CgTransferWalletTransferCreateV30AccountType, CgTransferWalletTransferCreateV30RequestTargetWalletDetailListInner, CgTransferWalletTransferCreateV30TransferDirection } from "../models";

export interface CgTransferWalletTransferCreateV30Request {
  account_id: number | string;
  account_type: CgTransferWalletTransferCreateV30AccountType;
  biz_request_no: string;
  main_wallet_id: number | string;
  remark?: string;
  target_wallet_detail_list: CgTransferWalletTransferCreateV30RequestTargetWalletDetailListInner[];
  transfer_direction: CgTransferWalletTransferCreateV30TransferDirection;
}

