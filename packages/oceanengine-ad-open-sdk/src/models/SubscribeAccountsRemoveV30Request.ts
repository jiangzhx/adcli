// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { SubscribeAccountsRemoveV30AccountType, SubscribeAccountsRemoveV30SubscribePackageType } from "../models";

export interface SubscribeAccountsRemoveV30Request {
  account_type?: SubscribeAccountsRemoveV30AccountType;
  advertiser_ids: number[];
  app_id: number;
  core_user_id: number;
  subscribe_package_type?: SubscribeAccountsRemoveV30SubscribePackageType;
  subscribe_task_id?: number;
}

