// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { ToolsEbpAppDetailV30DataCurrentVersionGameIpType, ToolsEbpAppDetailV30DataCurrentVersionMaxPaymentTierRange, ToolsEbpAppDetailV30DataCurrentVersionMaxRechargeTier, ToolsEbpAppDetailV30DataCurrentVersionMembershipType, ToolsEbpAppDetailV30DataCurrentVersionMidPaymentTierRange, ToolsEbpAppDetailV30DataCurrentVersionMinPaymentTierRange, ToolsEbpAppDetailV30DataCurrentVersionMinRechargeTier, ToolsEbpAppDetailV30DataCurrentVersionRecommendedRechargeTier, ToolsEbpAppDetailV30DataCurrentVersionRevenueModel, ToolsEbpAppDetailV30DataCurrentVersionScheduleCards } from "../models";

export interface ToolsEbpAppDetailV30ResponseDataCurrentVersion {
  app_name?: string;
  art_style?: string;
  audit_message?: string;
  discount_rate?: number;
  feature_tags?: string[];
  game_box_name?: string;
  game_ip_tag?: string;
  game_ip_type?: ToolsEbpAppDetailV30DataCurrentVersionGameIpType[];
  has_discount?: boolean;
  has_online_earning?: boolean;
  max_payment_tier_range?: ToolsEbpAppDetailV30DataCurrentVersionMaxPaymentTierRange;
  max_recharge_tier?: ToolsEbpAppDetailV30DataCurrentVersionMaxRechargeTier;
  membership_type?: ToolsEbpAppDetailV30DataCurrentVersionMembershipType;
  mid_payment_tier_range?: ToolsEbpAppDetailV30DataCurrentVersionMidPaymentTierRange;
  min_payment_tier_range?: ToolsEbpAppDetailV30DataCurrentVersionMinPaymentTierRange;
  min_recharge_tier?: ToolsEbpAppDetailV30DataCurrentVersionMinRechargeTier;
  network_environment?: string[];
  recommended_recharge_tier?: ToolsEbpAppDetailV30DataCurrentVersionRecommendedRechargeTier;
  revenue_model?: ToolsEbpAppDetailV30DataCurrentVersionRevenueModel;
  schedule_cards?: ToolsEbpAppDetailV30DataCurrentVersionScheduleCards[];
  spokesperson?: string;
  theme_tag?: string;
  version_code?: string;
  version_name?: string;
}

