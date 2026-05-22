// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { StarStarAdUniteTaskItemListV2DataStatInfoItemStatus } from "../models";

export interface StarStarAdUniteTaskItemListV2ResponseDataStatInfoInner {
  active_cnt?: number;
  active_pay_cnt?: number;
  active_pay_rate?: number;
  ad_click_rate?: number;
  ad_cost?: number;
  author_id: number;
  author_nick_name: string;
  avtive_rate?: number;
  click?: number;
  click_rate?: number;
  comment?: number;
  convert: number;
  cost: number;
  cost_per_active?: number;
  cost_per_active_pay?: number;
  cost_per_next_day_open?: number;
  cost_per_pay?: number;
  cost_per_register?: number;
  demand_id: number;
  install_finish_cnt?: number;
  interact?: number;
  interact_rate?: number;
  item_id: number;
  item_status: StarStarAdUniteTaskItemListV2DataStatInfoItemStatus;
  item_title: string;
  item_url: string;
  like?: number;
  natural_click_rate?: number;
  natural_cost?: number;
  next_day_open_cnt?: number;
  next_day_open_rate?: number;
  pay_1day_roi?: number;
  pay_7days_roi?: number;
  pay_amount?: number;
  pay_amount_1day?: number;
  pay_amount_7days?: number;
  pay_cnt?: number;
  pay_rate?: number;
  pay_roi?: number;
  play_3s_rate?: number;
  play_5s_rate?: number;
  play_cnt: number;
  play_finish_rate?: number;
  register_cnt?: number;
  register_rate?: number;
  release_time: number;
  settled_cost: number;
  share?: number;
  show?: number;
  star_id: number;
  stat_date: string;
}

