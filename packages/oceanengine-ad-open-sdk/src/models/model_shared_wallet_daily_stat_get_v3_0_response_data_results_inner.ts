// Generated from oceanengine/ad_open_sdk_go models/model_shared_wallet_daily_stat_get_v3_0_response_data_results_inner.go
// Do not edit manually.

import type { SharedWalletDailyStatGetV30DataResultsWalletType } from "../models/index";

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

