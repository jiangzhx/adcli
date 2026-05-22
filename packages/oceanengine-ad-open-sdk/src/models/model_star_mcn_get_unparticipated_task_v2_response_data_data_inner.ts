// Generated from oceanengine/ad_open_sdk_go models/model_star_mcn_get_unparticipated_task_v2_response_data_data_inner.go
// Do not edit manually.

import type { StarMcnGetUnparticipatedTaskV2ResponseDataDataInnerSmallAppInfo } from "../models/index";

export interface StarMcnGetUnparticipatedTaskV2ResponseDataDataInner {
  brand?: string;
  challenge_status?: number;
  commission_rate?: number;
  commission_rate_iaap?: string;
  create_time: string;
  demand_icon?: string;
  demand_id: number | string;
  demand_name: string;
  evaluate_type?: number;
  expiration_time?: string;
  expiration_time_end?: string;
  first_class_category?: number;
  high_profit_challenge?: number;
  item_component_type?: number;
  mcn_profit_rate?: number;
  pay_type?: number;
  playlet_category?: number;
  playlet_first_week?: number;
  playlet_gender?: number[];
  playlet_hot?: number;
  playlet_second_week?: number;
  playlet_theme?: number[];
  price?: number;
  product_category?: number;
  product_name?: string;
  profit_rate_channel?: Record<string, number>;
  real_cost?: number;
  second_class_category?: number;
  small_app_info?: StarMcnGetUnparticipatedTaskV2ResponseDataDataInnerSmallAppInfo;
  total_budget?: number;
  video_type: number;
}

