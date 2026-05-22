// Generated from oceanengine/ad_open_sdk_go models/model_tools_wechat_game_create_v3_0_request.go
// Do not edit manually.

import type { ToolsWechatGameCreateV30AccountType, ToolsWechatGameCreateV30AgeLimit, ToolsWechatGameCreateV30MaxPaymentTierRange, ToolsWechatGameCreateV30MidPaymentTierRange, ToolsWechatGameCreateV30MinPaymentTierRange, ToolsWechatGameCreateV30RequestAnchorList, ToolsWechatGameCreateV30RevenueModel, ToolsWechatGameCreateV30ScheduleCards } from "../models/index";

export interface ToolsWechatGameCreateV30Request {
  account_id: number | string;
  account_type: ToolsWechatGameCreateV30AccountType;
  age_limit: ToolsWechatGameCreateV30AgeLimit;
  age_remind_url: string;
  anchor_list: ToolsWechatGameCreateV30RequestAnchorList;
  anti_addiction_url: string;
  art_style: string;
  company_id?: number | string;
  discount_rate?: number;
  feature_tags: string[];
  has_discount?: boolean;
  has_online_earning?: boolean;
  max_payment_tier_range?: ToolsWechatGameCreateV30MaxPaymentTierRange;
  mid_payment_tier_range?: ToolsWechatGameCreateV30MidPaymentTierRange;
  min_payment_tier_range?: ToolsWechatGameCreateV30MinPaymentTierRange;
  name: string;
  network_environment: string[];
  path: string;
  real_name_url: string;
  revenue_model: ToolsWechatGameCreateV30RevenueModel;
  schedule_cards?: ToolsWechatGameCreateV30ScheduleCards[];
  screen_record_url: string;
  tag_info: string;
  theme_tag: string;
  user_name: string;
}

