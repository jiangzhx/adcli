// Generated from oceanengine/ad_open_sdk_go models/model_subscribe_accounts_remove_v3_0_request.go
// Do not edit manually.

import type { SubscribeAccountsRemoveV30AccountType, SubscribeAccountsRemoveV30SubscribePackageType } from "../models/index";

export interface SubscribeAccountsRemoveV30Request {
  account_type?: SubscribeAccountsRemoveV30AccountType;
  advertiser_ids: number | string[];
  app_id: number | string;
  core_user_id: number | string;
  subscribe_package_type?: SubscribeAccountsRemoveV30SubscribePackageType;
  subscribe_task_id?: number | string;
}

