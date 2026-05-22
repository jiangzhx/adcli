// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_wallet_list_struct.go
// Do not edit manually.

import type { WalletListBalanceStruct } from "../v3/index";

export interface WalletListStruct {
  owner_id?: number | string;
  owner_name?: string;
  wallet_id?: number | string;
  wallet_name?: string;
  mdm_id?: number | string;
  mdm_name?: string;
  total_balance?: number;
  bind_advertiser_cnt?: number;
  tag_list?: string[];
  balance_info_list?: WalletListBalanceStruct[];
}

