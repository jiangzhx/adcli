// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { StarDemandOmGetChallengeItemsDataV2ResponseDataDataListInnerItemInfoDailyListInner } from "../models";

export interface StarDemandOmGetChallengeItemsDataV2ResponseDataDataListInner {
  android_activate_cnt?: number;
  author_id?: number | string;
  author_nickname?: string;
  comment_cnt?: number;
  component_click_cnt?: number;
  est_ad_cost?: string;
  est_sales?: string;
  iaa_cost_hour?: number;
  iap_cost_hour?: number;
  ios_activate_cnt?: number;
  item_id?: number | string;
  item_info_daily_list?: StarDemandOmGetChallengeItemsDataV2ResponseDataDataListInnerItemInfoDailyListInner[];
  like_cnt?: number;
  link?: string;
  play?: string;
  play_vv?: number;
  promote_cnt?: number;
  provider_id?: number | string;
  release_time?: number;
  relevance_audit_result?: number;
  reward_amount?: number;
  reward_level?: number;
  settle_ad_share?: string;
  settle_cps?: string;
  share_cnt?: number;
  title?: string;
  uid?: number;
  valid_like_cnt?: number;
  valid_play_vv?: number;
}

