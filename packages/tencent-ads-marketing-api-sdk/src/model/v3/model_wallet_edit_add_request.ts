// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_wallet_edit_add_request.go
// Do not edit manually.

import type { ContactInfoStruct, ContactNotifyCondition } from "../v3/index";

export interface WalletEditAddRequest {
  account_id?: number | string;
  wallet_id?: number | string;
  wallet_name?: string;
  tag_list?: string[];
  contact_info_list?: ContactInfoStruct[];
  contact_notify_condition?: ContactNotifyCondition;
}

