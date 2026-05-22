// Generated from oceanengine/ad_open_sdk_go models/model_shared_wallet_main_wallet_get_v3_0_response_data_main_wallet_info.go
// Do not edit manually.

import type { SharedWalletMainWalletGetV30ResponseDataMainWalletInfoAllocatedBalance, SharedWalletMainWalletGetV30ResponseDataMainWalletInfoUnallocatedBalance } from "../models/index";

export interface SharedWalletMainWalletGetV30ResponseDataMainWalletInfo {
  allocated_balance?: SharedWalletMainWalletGetV30ResponseDataMainWalletInfoAllocatedBalance;
  main_wallet_id?: number | string;
  total_balance?: number;
  unallocated_balance?: SharedWalletMainWalletGetV30ResponseDataMainWalletInfoUnallocatedBalance;
  wallet_description?: string;
  wallet_label?: string[];
  wallet_name?: string;
}

