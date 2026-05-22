// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_wallet_basic_info_get_wallet_info.go
// Do not edit manually.

import type { ContactInfoStruct, ContactNotifyCondition, WalletListBalanceStruct } from "../v3/index";

export interface WalletBasicInfoGetWalletInfo {
  agency_id?: number | string;
  agency_name?: string;
  wallet_id?: number | string;
  wallet_name?: string;
  mdm_id?: number | string;
  mdm_name?: string;
  balance?: number;
  bind_advertiser_cnt?: number;
  binding_account_list?: number[];
  tag_list?: string[];
  balance_info_list?: WalletListBalanceStruct[];
  contact_info_list?: ContactInfoStruct[];
  contact_notify_condition?: ContactNotifyCondition;
}

