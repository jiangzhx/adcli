// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_wallet_edit_add_wallet_info.go
// Do not edit manually.

import type { ContactInfoStruct, ContactNotifyCondition } from "../v3/index";

export interface WalletEditAddWalletInfo {
  wallet_id?: number | string;
  wallet_name?: string;
  agency_id?: number | string;
  mdm_id?: number | string;
  tag_list?: string[];
  contact_info_list?: ContactInfoStruct[];
  contact_notify_condition?: ContactNotifyCondition;
}

