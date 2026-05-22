// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import type { ContactInfoStruct, ContactNotifyCondition } from "../models";

export interface WalletCreateAddWalletInfo {
  wallet_id?: number | string;
  wallet_name?: string;
  agency_id?: number | string;
  mdm_id?: number | string;
  tag_list?: string[];
  contact_info_list?: ContactInfoStruct[];
  contact_notify_condition?: ContactNotifyCondition;
}

