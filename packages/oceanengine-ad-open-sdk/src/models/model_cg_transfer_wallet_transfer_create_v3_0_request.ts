// 由 oceanengine/ad_open_sdk_go models/model_cg_transfer_wallet_transfer_create_v3_0_request.go 生成
// 不要手动编辑。

import type { CgTransferWalletTransferCreateV30AccountType, CgTransferWalletTransferCreateV30RequestTargetWalletDetailListInner, CgTransferWalletTransferCreateV30TransferDirection } from "../models/index";

export interface CgTransferWalletTransferCreateV30Request {
  account_id: number | string;
  account_type: CgTransferWalletTransferCreateV30AccountType;
  biz_request_no: string;
  main_wallet_id: number | string;
  remark?: string;
  target_wallet_detail_list: CgTransferWalletTransferCreateV30RequestTargetWalletDetailListInner[];
  transfer_direction: CgTransferWalletTransferCreateV30TransferDirection;
}

