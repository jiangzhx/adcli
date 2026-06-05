// 由 oceanengine/ad_open_sdk_go models/model_shared_wallet_sub_wallet_create_v3_0_request.go 生成
// 不要手动编辑。

import type { SharedWalletSubWalletCreateV30AccountType, SharedWalletSubWalletCreateV30RequestSharedRange } from "../models/index";

export interface SharedWalletSubWalletCreateV30Request {
  account_id: number | string;
  account_type: SharedWalletSubWalletCreateV30AccountType;
  main_wallet_id: number | string;
  shared_range: SharedWalletSubWalletCreateV30RequestSharedRange;
  wallet_description?: string;
  wallet_id: number | string;
  wallet_label?: string[];
  wallet_name: string;
}

