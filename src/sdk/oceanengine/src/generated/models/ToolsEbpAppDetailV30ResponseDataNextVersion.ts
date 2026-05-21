// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import type { ToolsEbpAppDetailV30DataNextVersionGameIpType, ToolsEbpAppDetailV30DataNextVersionMaxPaymentTierRange, ToolsEbpAppDetailV30DataNextVersionMaxRechargeTier, ToolsEbpAppDetailV30DataNextVersionMembershipType, ToolsEbpAppDetailV30DataNextVersionMidPaymentTierRange, ToolsEbpAppDetailV30DataNextVersionMinPaymentTierRange, ToolsEbpAppDetailV30DataNextVersionMinRechargeTier, ToolsEbpAppDetailV30DataNextVersionRecommendedRechargeTier, ToolsEbpAppDetailV30DataNextVersionRevenueModel, ToolsEbpAppDetailV30DataNextVersionScheduleCards } from "../models";

export interface ToolsEbpAppDetailV30ResponseDataNextVersion {
  app_name?: string;
  art_style?: string;
  audit_message?: string;
  discount_rate?: number;
  feature_tags?: string[];
  game_box_name?: string;
  game_ip_tag?: string;
  game_ip_type?: ToolsEbpAppDetailV30DataNextVersionGameIpType[];
  has_discount?: boolean;
  has_online_earning?: boolean;
  max_payment_tier_range?: ToolsEbpAppDetailV30DataNextVersionMaxPaymentTierRange;
  max_recharge_tier?: ToolsEbpAppDetailV30DataNextVersionMaxRechargeTier;
  membership_type?: ToolsEbpAppDetailV30DataNextVersionMembershipType;
  mid_payment_tier_range?: ToolsEbpAppDetailV30DataNextVersionMidPaymentTierRange;
  min_payment_tier_range?: ToolsEbpAppDetailV30DataNextVersionMinPaymentTierRange;
  min_recharge_tier?: ToolsEbpAppDetailV30DataNextVersionMinRechargeTier;
  network_environment?: string[];
  recommended_recharge_tier?: ToolsEbpAppDetailV30DataNextVersionRecommendedRechargeTier;
  revenue_model?: ToolsEbpAppDetailV30DataNextVersionRevenueModel;
  schedule_cards?: ToolsEbpAppDetailV30DataNextVersionScheduleCards[];
  spokesperson?: string;
  theme_tag?: string;
  version_code?: string;
  version_name?: string;
}

