// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { StarMcnGetContractedChallengeListV2ResponseDataDataInnerSmallAppInfo } from "../models";

export interface StarMcnGetContractedChallengeListV2ResponseDataDataInner {
  account_divide_day?: number;
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
  iaa_income?: number;
  item_component_type?: number;
  mcn_profit_rate?: number;
  pay_type?: number;
  price?: number;
  product_category?: number;
  product_name?: string;
  profit_rate_channel?: Record<string, number>;
  real_cost?: number;
  second_class_category?: number;
  small_app_info?: StarMcnGetContractedChallengeListV2ResponseDataDataInnerSmallAppInfo;
  total_budget?: number;
  video_type: number;
}

