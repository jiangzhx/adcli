// Generated from oceanengine/ad_open_sdk_go models/model_tools_wechat_applet_create_v3_0_request.go
// Do not edit manually.

import type { ToolsWechatAppletCreateV30MaxPaymentTierRange, ToolsWechatAppletCreateV30MaxRechargeTier, ToolsWechatAppletCreateV30MembershipType, ToolsWechatAppletCreateV30MidPaymentTierRange, ToolsWechatAppletCreateV30MinPaymentTierRange, ToolsWechatAppletCreateV30MinRechargeTier, ToolsWechatAppletCreateV30PaymentForm, ToolsWechatAppletCreateV30RecommendedRechargeTier, ToolsWechatAppletCreateV30RevenueModel } from "../models/index";

export interface ToolsWechatAppletCreateV30Request {
  advertiser_id: number | string;
  discount_rate?: number;
  guide_text?: string;
  has_discount?: boolean;
  has_online_earning?: boolean;
  header_image_url?: string;
  icon_image_url?: string;
  images_horizontal_url?: string[];
  images_vertical_url?: string[];
  introduction?: string;
  labels?: string[];
  max_payment_tier_range?: ToolsWechatAppletCreateV30MaxPaymentTierRange;
  max_recharge_tier?: ToolsWechatAppletCreateV30MaxRechargeTier;
  membership_type?: ToolsWechatAppletCreateV30MembershipType;
  mid_payment_tier_range?: ToolsWechatAppletCreateV30MidPaymentTierRange;
  min_payment_tier_range?: ToolsWechatAppletCreateV30MinPaymentTierRange;
  min_recharge_tier?: ToolsWechatAppletCreateV30MinRechargeTier;
  name: string;
  path?: string;
  payment_form?: ToolsWechatAppletCreateV30PaymentForm;
  prop_name?: string;
  recommended_recharge_tier?: ToolsWechatAppletCreateV30RecommendedRechargeTier;
  remark_message?: string;
  revenue_model?: ToolsWechatAppletCreateV30RevenueModel;
  tag_info: string;
  user_name: string;
}

