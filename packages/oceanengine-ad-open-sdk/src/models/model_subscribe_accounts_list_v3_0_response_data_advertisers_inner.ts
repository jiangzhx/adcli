// 由 oceanengine/ad_open_sdk_go models/model_subscribe_accounts_list_v3_0_response_data_advertisers_inner.go 生成
// 不要手动编辑。

import type { SubscribeAccountsListV30DataAdvertisersAccountType, SubscribeAccountsListV30DataAdvertisersSource, SubscribeAccountsListV30DataAdvertisersStatus } from "../models/index";

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

