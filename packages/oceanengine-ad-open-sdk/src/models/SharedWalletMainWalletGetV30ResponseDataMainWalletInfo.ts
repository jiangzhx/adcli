// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { SharedWalletMainWalletGetV30ResponseDataMainWalletInfoAllocatedBalance, SharedWalletMainWalletGetV30ResponseDataMainWalletInfoUnallocatedBalance } from "../models";

export interface SharedWalletMainWalletGetV30ResponseDataMainWalletInfo {
  allocated_balance?: SharedWalletMainWalletGetV30ResponseDataMainWalletInfoAllocatedBalance;
  main_wallet_id?: number;
  total_balance?: number;
  unallocated_balance?: SharedWalletMainWalletGetV30ResponseDataMainWalletInfoUnallocatedBalance;
  wallet_description?: string;
  wallet_label?: string[];
  wallet_name?: string;
}

