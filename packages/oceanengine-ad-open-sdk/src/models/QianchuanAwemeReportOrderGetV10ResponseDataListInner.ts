// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { QianchuanAwemeReportOrderGetV10DataListMarketingGoal } from "../models";

export interface QianchuanAwemeReportOrderGetV10ResponseDataListInner {
  ad_id?: number;
  advertiser_id?: number;
  average_live_watch_time?: number;
  click_cnt?: number;
  click_product?: number;
  convert_cnt?: number;
  convert_cost?: number;
  ctr?: number;
  dy_comment?: number;
  dy_follow?: number;
  dy_home_visited?: number;
  dy_like?: number;
  dy_share?: number;
  ecp_convert_cnt?: number;
  ecp_cpa_platform?: number;
  like_rate?: number;
  live_fans_club_join_cnt?: number;
  live_slidecart_click_cnt?: number;
  luban_live_click_product_cnt?: number;
  luban_live_comment_cnt?: number;
  luban_live_enter_cnt?: number;
  luban_live_follow_cnt?: number;
  luban_live_gift_amount?: number;
  luban_live_gift_cnt?: number;
  luban_live_share_cnt?: number;
  luban_live_slidecart_click_cnt?: number;
  marketing_goal?: QianchuanAwemeReportOrderGetV10DataListMarketingGoal;
  order_id?: number;
  pay_order_amount?: number;
  pay_order_count?: number;
  play_duration_5s_rate?: number;
  prepay_and_pay_order_roi?: number;
  prepay_order_amount?: number;
  prepay_order_count?: number;
  qianchuan_effective_view_convert_count?: number;
  show_cnt?: number;
  stat_cost?: number;
  total_play?: number;
}

