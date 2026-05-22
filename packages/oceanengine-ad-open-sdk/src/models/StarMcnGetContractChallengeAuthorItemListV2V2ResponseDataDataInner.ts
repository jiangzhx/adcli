// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { StarMcnGetContractChallengeAuthorItemListV2V2ResponseDataDataInnerItemInfoDailyListInner, StarMcnGetContractChallengeAuthorItemListV2V2ResponseDataDataInnerLiveEffectData, StarMcnGetContractChallengeAuthorItemListV2V2ResponseDataDataInnerSmallGameSettle } from "../models";

export interface StarMcnGetContractChallengeAuthorItemListV2V2ResponseDataDataInner {
  android_convert_count?: number;
  author_amount?: number;
  author_id?: number | string;
  author_name?: string;
  bill_detail?: string;
  channel_id?: string;
  clue_cnt?: number;
  cover_url?: string;
  create_time?: number;
  demand_id: number | string;
  demand_name: string;
  douyin_id?: string;
  est_ad_share_amount?: number;
  est_cps_amount?: number;
  est_reward_amount?: number;
  iaa_commercial_income_hour?: number;
  iaa_income?: number;
  iap_order_income_hour?: number;
  install_finish_cnt?: number;
  ios_convert_count?: number;
  is_own: boolean;
  is_violated?: number;
  item_click_rate?: number;
  item_click_rate_double?: number;
  item_comment?: number;
  item_feel_good?: number;
  item_forward?: number;
  item_id?: number | string;
  item_info_daily_list?: StarMcnGetContractChallengeAuthorItemListV2V2ResponseDataDataInnerItemInfoDailyListInner[];
  item_interact_rate?: number;
  item_url?: string;
  item_view?: number;
  live_effect_data?: StarMcnGetContractChallengeAuthorItemListV2V2ResponseDataDataInnerLiveEffectData;
  mcn_amount?: number;
  open_state?: number;
  overall_audit_status?: number;
  play?: number;
  provider_share_price?: number;
  publish_time?: number;
  reject_reasons?: string[];
  service_provider_amount?: number;
  settle_time?: number;
  settled_ad_share_amount?: number;
  settled_cps_amount?: number;
  settled_mcn_ad_share_amount?: number;
  settled_mcn_cps_amount?: number;
  share_price?: number;
  share_price_hour?: number;
  share_price_total?: number;
  share_price_total_hour?: number;
  share_vv?: number;
  small_game_settle?: StarMcnGetContractChallengeAuthorItemListV2V2ResponseDataDataInnerSmallGameSettle;
  uncorrelated?: number;
  video_duration_ms?: number;
  video_participate_provider_channel?: string;
}

