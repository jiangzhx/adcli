// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import type { SubscribeAccountsAddV30AccountType, SubscribeAccountsAddV30SubscribePackageType } from "../models";

export interface SubscribeAccountsAddV30Request {
  account_type?: SubscribeAccountsAddV30AccountType;
  advertiser_ids: number[];
  app_id: number;
  core_user_id: number;
  subscribe_package_type?: SubscribeAccountsAddV30SubscribePackageType;
  subscribe_task_id?: number;
}

