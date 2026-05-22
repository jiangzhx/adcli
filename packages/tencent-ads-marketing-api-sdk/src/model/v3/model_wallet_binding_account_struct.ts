// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_wallet_binding_account_struct.go
// Do not edit manually.

import type { WalletListBalanceStruct } from "../v3/index";

export interface WalletBindingAccountStruct {
  uid?: number;
  uname?: string;
  advertiser_status?: string;
  bind_status?: string;
  bind_time?: number;
  create_time?: number;
  yesterday_cost?: number;
  total_balance?: number;
  today_cost?: number;
  kframe?: string;
  balance_info_list?: WalletListBalanceStruct[];
  industry_id?: string;
  industry_name?: string;
  advertiser_daily_budget?: number;
  identity_check?: boolean;
  deposit_check?: boolean;
}

