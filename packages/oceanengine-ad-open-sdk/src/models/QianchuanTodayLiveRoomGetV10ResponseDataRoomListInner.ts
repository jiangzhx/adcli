// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { QianchuanTodayLiveRoomGetV10DataRoomListRoomStatus } from "../models";

export interface QianchuanTodayLiveRoomGetV10ResponseDataRoomListInner {
  ad_all_order_gmv_settle_rate_14d?: number;
  ad_all_order_gmv_settle_rate_7d?: number;
  ad_live_create_order_rate?: number;
  ad_live_order_settle_cost_14d?: number;
  ad_live_order_settle_cost_7d?: number;
  ad_live_order_settle_roi_14d?: number;
  ad_live_order_settle_roi_7d?: number;
  ad_live_pay_order_gmv_avg?: number;
  ad_live_pay_order_rate?: number;
  ad_live_prepay_and_pay_order_gmv_roi?: number;
  aweme_avatar?: string[];
  aweme_id?: number;
  aweme_name?: string;
  click_cnt?: number;
  convert_cnt?: number;
  convert_rate?: number;
  cpa_platform?: number;
  cpc_platform?: number;
  cpm_platform?: number;
  ctr?: number;
  ecp_convert_cnt?: number;
  ecp_convert_rate?: number;
  ecp_cpa_platform?: number;
  end_time?: string;
  live_click_cart_count_alias?: number;
  live_click_product_count_alias?: number;
  live_create_order_count_alias?: number;
  live_create_order_rate?: number;
  live_order_pay_coupon_amount?: number;
  live_order_refund_amount_14d?: number;
  live_order_refund_amount_7d?: number;
  live_order_refund_count_14d?: number;
  live_order_refund_count_7d?: number;
  live_order_settle_amount_14d?: number;
  live_order_settle_amount_7d?: number;
  live_order_settle_count_14d?: number;
  live_order_settle_count_7d?: number;
  live_order_settle_count_rate_14d?: number;
  live_order_settle_count_rate_7d?: number;
  live_pay_order_count_alias?: number;
  live_pay_order_gmv_alias?: number;
  live_pay_order_gmv_avg?: number;
  live_pay_order_gmv_roi?: number;
  live_pay_order_rate?: number;
  live_prepay_order_count_alias?: number;
  live_prepay_order_gmv_alias?: number;
  live_watch_one_minute_count?: number;
  luban_live_order_count?: number;
  luban_live_pay_order_count?: number;
  luban_live_pay_order_gmv?: number;
  luban_live_pay_order_gpm?: number;
  luban_live_prepay_order_count?: number;
  luban_live_prepay_order_gmv?: number;
  qualification_stat_cost?: number;
  room_cover?: string[];
  room_delivery?: number;
  room_id?: number;
  room_status?: QianchuanTodayLiveRoomGetV10DataRoomListRoomStatus;
  room_title?: string;
  start_time?: string;
  stat_cost?: number;
  total_live_comment_cnt?: number;
  total_live_fans_club_join_cnt?: number;
  total_live_follow_cnt?: number;
  total_live_gift_amount?: number;
  total_live_gift_cnt?: number;
  total_live_pay_order_gpm?: number;
  total_live_share_cnt?: number;
  total_live_watch_cnt?: number;
}

