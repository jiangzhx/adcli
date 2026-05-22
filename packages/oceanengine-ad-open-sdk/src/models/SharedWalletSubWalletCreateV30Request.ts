// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import type { SharedWalletSubWalletCreateV30AccountType, SharedWalletSubWalletCreateV30RequestSharedRange } from "../models";

export interface SharedWalletSubWalletCreateV30Request {
  account_id: number;
  account_type: SharedWalletSubWalletCreateV30AccountType;
  main_wallet_id: number;
  shared_range: SharedWalletSubWalletCreateV30RequestSharedRange;
  wallet_description?: string;
  wallet_id: number;
  wallet_label?: string[];
  wallet_name: string;
}

