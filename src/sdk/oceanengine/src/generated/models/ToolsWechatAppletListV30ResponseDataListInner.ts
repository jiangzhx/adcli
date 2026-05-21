// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import type { ToolsWechatAppletListV30DataListAccountType, ToolsWechatAppletListV30DataListAuditStatus, ToolsWechatAppletListV30DataListMaxPaymentTierRange, ToolsWechatAppletListV30DataListMaxRechargeTier, ToolsWechatAppletListV30DataListMembershipType, ToolsWechatAppletListV30DataListMidPaymentTierRange, ToolsWechatAppletListV30DataListMinPaymentTierRange, ToolsWechatAppletListV30DataListMinRechargeTier, ToolsWechatAppletListV30DataListPaymentForm, ToolsWechatAppletListV30DataListRecommendedRechargeTier, ToolsWechatAppletListV30DataListRevenueModel } from "../models";

export interface ToolsWechatAppletListV30ResponseDataListInner {
  account_id?: number;
  account_type?: ToolsWechatAppletListV30DataListAccountType;
  advertiser_id?: number;
  audit_status?: ToolsWechatAppletListV30DataListAuditStatus;
  create_time?: string;
  discount_rate?: number;
  guide_text?: string;
  has_discount?: boolean;
  has_online_earning?: boolean;
  header_image_url?: string;
  icon_image_url?: string;
  images_horizontal_url?: string[];
  images_vertical_url?: string[];
  instance_id?: number;
  introduction?: string;
  is_ebp_asset?: boolean;
  labels?: string[];
  max_payment_tier_range?: ToolsWechatAppletListV30DataListMaxPaymentTierRange;
  max_recharge_tier?: ToolsWechatAppletListV30DataListMaxRechargeTier;
  membership_type?: ToolsWechatAppletListV30DataListMembershipType;
  mid_payment_tier_range?: ToolsWechatAppletListV30DataListMidPaymentTierRange;
  min_payment_tier_range?: ToolsWechatAppletListV30DataListMinPaymentTierRange;
  min_recharge_tier?: ToolsWechatAppletListV30DataListMinRechargeTier;
  modify_time?: string;
  name?: string;
  path?: string;
  payment_form?: ToolsWechatAppletListV30DataListPaymentForm;
  prop_name?: string;
  reason?: string;
  recommended_recharge_tier?: ToolsWechatAppletListV30DataListRecommendedRechargeTier;
  remark_message?: string;
  revenue_model?: ToolsWechatAppletListV30DataListRevenueModel;
  tag_info?: string;
  user_name?: string;
}

