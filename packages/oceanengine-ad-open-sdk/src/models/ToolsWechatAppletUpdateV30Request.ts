// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import type { ToolsWechatAppletUpdateV30MaxPaymentTierRange, ToolsWechatAppletUpdateV30MaxRechargeTier, ToolsWechatAppletUpdateV30MembershipType, ToolsWechatAppletUpdateV30MidPaymentTierRange, ToolsWechatAppletUpdateV30MinPaymentTierRange, ToolsWechatAppletUpdateV30MinRechargeTier, ToolsWechatAppletUpdateV30PaymentForm, ToolsWechatAppletUpdateV30RecommendedRechargeTier, ToolsWechatAppletUpdateV30RevenueModel } from "../models";

export interface ToolsWechatAppletUpdateV30Request {
  advertiser_id: number;
  discount_rate?: number;
  guide_text?: string;
  has_discount?: boolean;
  has_online_earning?: boolean;
  header_image_url?: string;
  icon_image_url?: string;
  images_horizontal_url?: string[];
  images_vertical_url?: string[];
  instance_id: number;
  introduction?: string;
  labels?: string[];
  max_payment_tier_range?: ToolsWechatAppletUpdateV30MaxPaymentTierRange;
  max_recharge_tier?: ToolsWechatAppletUpdateV30MaxRechargeTier;
  membership_type?: ToolsWechatAppletUpdateV30MembershipType;
  mid_payment_tier_range?: ToolsWechatAppletUpdateV30MidPaymentTierRange;
  min_payment_tier_range?: ToolsWechatAppletUpdateV30MinPaymentTierRange;
  min_recharge_tier?: ToolsWechatAppletUpdateV30MinRechargeTier;
  payment_form?: ToolsWechatAppletUpdateV30PaymentForm;
  prop_name?: string;
  recommended_recharge_tier?: ToolsWechatAppletUpdateV30RecommendedRechargeTier;
  remark_message?: string;
  revenue_model?: ToolsWechatAppletUpdateV30RevenueModel;
  tag_info: string;
}

