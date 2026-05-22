// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { ToolsMicroAppCreateV30MaxPaymentTierRange, ToolsMicroAppCreateV30MaxRechargeTier, ToolsMicroAppCreateV30MembershipType, ToolsMicroAppCreateV30MidPaymentTierRange, ToolsMicroAppCreateV30MinPaymentTierRange, ToolsMicroAppCreateV30MinRechargeTier, ToolsMicroAppCreateV30PaymentForm, ToolsMicroAppCreateV30RecommendedRechargeTier, ToolsMicroAppCreateV30RequestAppPage, ToolsMicroAppCreateV30RevenueModel } from "../models";

export interface ToolsMicroAppCreateV30Request {
  advertiser_id: number;
  app_id: string;
  app_page: ToolsMicroAppCreateV30RequestAppPage;
  discount_rate?: number;
  has_discount?: boolean;
  has_online_earning?: boolean;
  max_payment_tier_range?: ToolsMicroAppCreateV30MaxPaymentTierRange;
  max_recharge_tier?: ToolsMicroAppCreateV30MaxRechargeTier;
  membership_type?: ToolsMicroAppCreateV30MembershipType;
  mid_payment_tier_range?: ToolsMicroAppCreateV30MidPaymentTierRange;
  min_payment_tier_range?: ToolsMicroAppCreateV30MinPaymentTierRange;
  min_recharge_tier?: ToolsMicroAppCreateV30MinRechargeTier;
  payment_form?: ToolsMicroAppCreateV30PaymentForm;
  prop_name?: string;
  recommended_recharge_tier?: ToolsMicroAppCreateV30RecommendedRechargeTier;
  remark: string;
  revenue_model?: ToolsMicroAppCreateV30RevenueModel;
  tag_info: string;
}

