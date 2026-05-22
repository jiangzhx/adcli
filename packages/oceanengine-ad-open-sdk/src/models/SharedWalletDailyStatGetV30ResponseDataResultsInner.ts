// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { SharedWalletDailyStatGetV30DataResultsWalletType } from "../models";

export interface SharedWalletDailyStatGetV30ResponseDataResultsInner {
  balance?: number;
  cost?: number;
  credit_balance?: number;
  expenses?: number;
  incomes?: number;
  preloan_balance?: number;
  prepay_balance?: number;
  shared_wallet_id?: number | string;
  shared_wallet_name?: string;
  transaction_date?: string;
  wallet_type?: SharedWalletDailyStatGetV30DataResultsWalletType;
}

