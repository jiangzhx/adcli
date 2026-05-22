// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { ToolsMicroGameUpdateV30AgeLimit, ToolsMicroGameUpdateV30MaxPaymentTierRange, ToolsMicroGameUpdateV30MidPaymentTierRange, ToolsMicroGameUpdateV30MinPaymentTierRange, ToolsMicroGameUpdateV30RequestGameLinkInner, ToolsMicroGameUpdateV30RevenueModel, ToolsMicroGameUpdateV30ScheduleCards } from "../models";

export interface ToolsMicroGameUpdateV30Request {
  advertiser_id: number;
  age_limit: ToolsMicroGameUpdateV30AgeLimit;
  art_style: string;
  discount_rate?: number;
  feature_tags: string[];
  game_link: ToolsMicroGameUpdateV30RequestGameLinkInner[];
  has_discount?: boolean;
  has_online_earning?: boolean;
  instance_id: number;
  introduction: string;
  max_payment_tier_range?: ToolsMicroGameUpdateV30MaxPaymentTierRange;
  mid_payment_tier_range?: ToolsMicroGameUpdateV30MidPaymentTierRange;
  min_payment_tier_range?: ToolsMicroGameUpdateV30MinPaymentTierRange;
  network_environment: string[];
  remark?: string;
  revenue_model: ToolsMicroGameUpdateV30RevenueModel;
  schedule_cards?: ToolsMicroGameUpdateV30ScheduleCards[];
  tag_info: string;
  theme_tag: string;
}

