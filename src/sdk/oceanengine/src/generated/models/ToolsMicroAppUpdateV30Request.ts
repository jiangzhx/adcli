// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import type { ToolsMicroAppUpdateV30MaxPaymentTierRange, ToolsMicroAppUpdateV30MaxRechargeTier, ToolsMicroAppUpdateV30MembershipType, ToolsMicroAppUpdateV30MidPaymentTierRange, ToolsMicroAppUpdateV30MinPaymentTierRange, ToolsMicroAppUpdateV30MinRechargeTier, ToolsMicroAppUpdateV30PaymentForm, ToolsMicroAppUpdateV30RecommendedRechargeTier, ToolsMicroAppUpdateV30RequestAppPageInner, ToolsMicroAppUpdateV30RevenueModel } from "../models";

export interface ToolsMicroAppUpdateV30Request {
  advertiser_id: number;
  app_page: ToolsMicroAppUpdateV30RequestAppPageInner[];
  discount_rate?: number;
  has_discount?: boolean;
  has_online_earning?: boolean;
  instance_id: number;
  max_payment_tier_range?: ToolsMicroAppUpdateV30MaxPaymentTierRange;
  max_recharge_tier?: ToolsMicroAppUpdateV30MaxRechargeTier;
  membership_type?: ToolsMicroAppUpdateV30MembershipType;
  mid_payment_tier_range?: ToolsMicroAppUpdateV30MidPaymentTierRange;
  min_payment_tier_range?: ToolsMicroAppUpdateV30MinPaymentTierRange;
  min_recharge_tier?: ToolsMicroAppUpdateV30MinRechargeTier;
  payment_form?: ToolsMicroAppUpdateV30PaymentForm;
  prop_name?: string;
  recommended_recharge_tier?: ToolsMicroAppUpdateV30RecommendedRechargeTier;
  remark?: string;
  revenue_model?: ToolsMicroAppUpdateV30RevenueModel;
  tag_info: string;
}

