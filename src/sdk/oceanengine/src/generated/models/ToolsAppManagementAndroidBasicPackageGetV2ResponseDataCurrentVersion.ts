// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import type { ToolsAppManagementAndroidBasicPackageGetV2DataCurrentVersionGameIpType, ToolsAppManagementAndroidBasicPackageGetV2DataCurrentVersionMaxPaymentTierRange, ToolsAppManagementAndroidBasicPackageGetV2DataCurrentVersionMaxRechargeTier, ToolsAppManagementAndroidBasicPackageGetV2DataCurrentVersionMembershipType, ToolsAppManagementAndroidBasicPackageGetV2DataCurrentVersionMidPaymentTierRange, ToolsAppManagementAndroidBasicPackageGetV2DataCurrentVersionMinPaymentTierRange, ToolsAppManagementAndroidBasicPackageGetV2DataCurrentVersionMinRechargeTier, ToolsAppManagementAndroidBasicPackageGetV2DataCurrentVersionRecommendedRechargeTier, ToolsAppManagementAndroidBasicPackageGetV2DataCurrentVersionRevenueModel, ToolsAppManagementAndroidBasicPackageGetV2DataCurrentVersionScheduleCards, ToolsAppManagementAndroidBasicPackageGetV2DataCurrentVersionStatus } from "../models";

export interface ToolsAppManagementAndroidBasicPackageGetV2ResponseDataCurrentVersion {
  app_name?: string;
  art_style?: string;
  audit_id?: number;
  audit_message?: string;
  discount_rate?: number;
  feature_tags?: string[];
  game_box_name?: string;
  game_ip_tag?: string;
  game_ip_type?: ToolsAppManagementAndroidBasicPackageGetV2DataCurrentVersionGameIpType[];
  has_discount?: boolean;
  has_online_earning?: boolean;
  max_payment_tier_range?: ToolsAppManagementAndroidBasicPackageGetV2DataCurrentVersionMaxPaymentTierRange;
  max_recharge_tier?: ToolsAppManagementAndroidBasicPackageGetV2DataCurrentVersionMaxRechargeTier;
  membership_type?: ToolsAppManagementAndroidBasicPackageGetV2DataCurrentVersionMembershipType;
  mid_payment_tier_range?: ToolsAppManagementAndroidBasicPackageGetV2DataCurrentVersionMidPaymentTierRange;
  min_payment_tier_range?: ToolsAppManagementAndroidBasicPackageGetV2DataCurrentVersionMinPaymentTierRange;
  min_recharge_tier?: ToolsAppManagementAndroidBasicPackageGetV2DataCurrentVersionMinRechargeTier;
  network_environment?: string[];
  recommended_recharge_tier?: ToolsAppManagementAndroidBasicPackageGetV2DataCurrentVersionRecommendedRechargeTier;
  revenue_model?: ToolsAppManagementAndroidBasicPackageGetV2DataCurrentVersionRevenueModel;
  schedule_cards?: ToolsAppManagementAndroidBasicPackageGetV2DataCurrentVersionScheduleCards[];
  spokesperson?: string;
  status?: ToolsAppManagementAndroidBasicPackageGetV2DataCurrentVersionStatus;
  theme_tag?: string;
  version_code?: string;
  version_id?: string;
  version_name?: string;
}

