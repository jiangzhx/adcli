// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { SubscribeAccountsListV30DataAdvertisersAccountType, SubscribeAccountsListV30DataAdvertisersSource, SubscribeAccountsListV30DataAdvertisersStatus } from "../models";

export interface SubscribeAccountsListV30ResponseDataAdvertisersInner {
  account_type?: SubscribeAccountsListV30DataAdvertisersAccountType;
  advertiser_id: number | string;
  core_user_id: number | string;
  created_time?: string;
  event?: string;
  reason?: string;
  source?: SubscribeAccountsListV30DataAdvertisersSource;
  status?: SubscribeAccountsListV30DataAdvertisersStatus;
  updated_time?: string;
}

