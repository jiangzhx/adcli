// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { ToolsAppManagementAndroidBasicPackageGetV2DataNextVersionGameIpType, ToolsAppManagementAndroidBasicPackageGetV2DataNextVersionMaxPaymentTierRange, ToolsAppManagementAndroidBasicPackageGetV2DataNextVersionMaxRechargeTier, ToolsAppManagementAndroidBasicPackageGetV2DataNextVersionMembershipType, ToolsAppManagementAndroidBasicPackageGetV2DataNextVersionMidPaymentTierRange, ToolsAppManagementAndroidBasicPackageGetV2DataNextVersionMinPaymentTierRange, ToolsAppManagementAndroidBasicPackageGetV2DataNextVersionMinRechargeTier, ToolsAppManagementAndroidBasicPackageGetV2DataNextVersionRecommendedRechargeTier, ToolsAppManagementAndroidBasicPackageGetV2DataNextVersionRevenueModel, ToolsAppManagementAndroidBasicPackageGetV2DataNextVersionScheduleCards, ToolsAppManagementAndroidBasicPackageGetV2DataNextVersionStatus } from "../models";

export interface ToolsAppManagementAndroidBasicPackageGetV2ResponseDataNextVersion {
  app_name?: string;
  art_style?: string;
  audit_id?: number;
  audit_message?: string;
  discount_rate?: number;
  feature_tags?: string[];
  game_box_name?: string;
  game_ip_tag?: string;
  game_ip_type?: ToolsAppManagementAndroidBasicPackageGetV2DataNextVersionGameIpType[];
  has_discount?: boolean;
  has_online_earning?: boolean;
  max_payment_tier_range?: ToolsAppManagementAndroidBasicPackageGetV2DataNextVersionMaxPaymentTierRange;
  max_recharge_tier?: ToolsAppManagementAndroidBasicPackageGetV2DataNextVersionMaxRechargeTier;
  membership_type?: ToolsAppManagementAndroidBasicPackageGetV2DataNextVersionMembershipType;
  mid_payment_tier_range?: ToolsAppManagementAndroidBasicPackageGetV2DataNextVersionMidPaymentTierRange;
  min_payment_tier_range?: ToolsAppManagementAndroidBasicPackageGetV2DataNextVersionMinPaymentTierRange;
  min_recharge_tier?: ToolsAppManagementAndroidBasicPackageGetV2DataNextVersionMinRechargeTier;
  network_environment?: string[];
  recommended_recharge_tier?: ToolsAppManagementAndroidBasicPackageGetV2DataNextVersionRecommendedRechargeTier;
  revenue_model?: ToolsAppManagementAndroidBasicPackageGetV2DataNextVersionRevenueModel;
  schedule_cards?: ToolsAppManagementAndroidBasicPackageGetV2DataNextVersionScheduleCards[];
  spokesperson?: string;
  status?: ToolsAppManagementAndroidBasicPackageGetV2DataNextVersionStatus;
  theme_tag?: string;
  version_code?: string;
  version_id?: string;
  version_name?: string;
}

