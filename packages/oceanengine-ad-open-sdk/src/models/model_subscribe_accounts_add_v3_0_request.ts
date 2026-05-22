// Generated from oceanengine/ad_open_sdk_go models/model_subscribe_accounts_add_v3_0_request.go
// Do not edit manually.

import type { SubscribeAccountsAddV30AccountType, SubscribeAccountsAddV30SubscribePackageType } from "../models/index";

export interface SubscribeAccountsAddV30Request {
  account_type?: SubscribeAccountsAddV30AccountType;
  advertiser_ids: (number | string)[];
  app_id: number | string;
  core_user_id: number | string;
  subscribe_package_type?: SubscribeAccountsAddV30SubscribePackageType;
  subscribe_task_id?: number | string;
}

