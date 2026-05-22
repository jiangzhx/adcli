// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { QianchuanReportSearchWordGetV10DataListKeywordMatchType } from "../models";

export interface QianchuanReportSearchWordGetV10ResponseDataListInner {
  ad_id?: number | string;
  ad_name?: string;
  campaign_id?: number | string;
  campaign_name?: string;
  click_cnt?: number;
  cpm_platform?: number;
  create_order_amount?: number;
  create_order_count?: number;
  create_order_roi?: number;
  ctr?: number;
  dy_comment?: number;
  dy_follow?: number;
  dy_like?: number;
  dy_share?: number;
  ecp_convert_cnt?: number;
  ecp_convert_rate?: number;
  ecp_cpa_platform?: number;
  end_date?: string;
  key_word?: string;
  keyword_match_type?: QianchuanReportSearchWordGetV10DataListKeywordMatchType;
  live_fans_club_join_cnt?: number;
  live_watch_one_minute_count?: number;
  luban_live_click_product_cnt?: number;
  luban_live_comment_cnt?: number;
  luban_live_enter_cnt?: number;
  luban_live_gift_amount?: number;
  luban_live_gift_cnt?: number;
  luban_live_share_cnt?: number;
  luban_live_slidecart_click_cnt?: number;
  pay_order_amount?: number;
  pay_order_cost_per_order?: number;
  pay_order_count?: number;
  play_25_feed_break?: number;
  play_50_feed_break?: number;
  play_75_feed_break?: number;
  play_duration_3s?: number;
  play_over?: number;
  play_over_rate?: number;
  prepay_and_pay_order_roi?: number;
  prepay_order_amount?: number;
  prepay_order_count?: number;
  search_word?: string;
  show_cnt?: number;
  start_date?: string;
  stat_cost?: number;
  total_play?: number;
}

