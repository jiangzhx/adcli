// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { ToolsMicroGameCreateV30AgeLimit, ToolsMicroGameCreateV30MaxPaymentTierRange, ToolsMicroGameCreateV30MidPaymentTierRange, ToolsMicroGameCreateV30MinPaymentTierRange, ToolsMicroGameCreateV30RequestGameLink, ToolsMicroGameCreateV30RevenueModel, ToolsMicroGameCreateV30ScheduleCards } from "../models";

export interface ToolsMicroGameCreateV30Request {
  advertiser_id: number;
  age_limit: ToolsMicroGameCreateV30AgeLimit;
  app_id: string;
  art_style: string;
  discount_rate?: number;
  feature_tags: string[];
  game_link: ToolsMicroGameCreateV30RequestGameLink;
  has_discount?: boolean;
  has_online_earning?: boolean;
  introduction: string;
  max_payment_tier_range?: ToolsMicroGameCreateV30MaxPaymentTierRange;
  mid_payment_tier_range?: ToolsMicroGameCreateV30MidPaymentTierRange;
  min_payment_tier_range?: ToolsMicroGameCreateV30MinPaymentTierRange;
  network_environment: string[];
  remark: string;
  revenue_model: ToolsMicroGameCreateV30RevenueModel;
  schedule_cards?: ToolsMicroGameCreateV30ScheduleCards[];
  tag_info: string;
  theme_tag: string;
}

