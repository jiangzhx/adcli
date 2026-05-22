// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { ToolsAppManagementAndroidBasicPackageUpdateV2AccountType, ToolsAppManagementAndroidBasicPackageUpdateV2FileOption, ToolsAppManagementAndroidBasicPackageUpdateV2GameIpType, ToolsAppManagementAndroidBasicPackageUpdateV2MaxPaymentTierRange, ToolsAppManagementAndroidBasicPackageUpdateV2MaxRechargeTier, ToolsAppManagementAndroidBasicPackageUpdateV2MembershipType, ToolsAppManagementAndroidBasicPackageUpdateV2MidPaymentTierRange, ToolsAppManagementAndroidBasicPackageUpdateV2MinPaymentTierRange, ToolsAppManagementAndroidBasicPackageUpdateV2MinRechargeTier, ToolsAppManagementAndroidBasicPackageUpdateV2PaymentType, ToolsAppManagementAndroidBasicPackageUpdateV2RecommendedRechargeTier, ToolsAppManagementAndroidBasicPackageUpdateV2RequestFilesInner, ToolsAppManagementAndroidBasicPackageUpdateV2RevenueModel, ToolsAppManagementAndroidBasicPackageUpdateV2ScheduleCards } from "../models";

export interface ToolsAppManagementAndroidBasicPackageUpdateV2Request {
  account_id: number;
  account_type: ToolsAppManagementAndroidBasicPackageUpdateV2AccountType;
  app_description: string;
  app_developer_name: string;
  app_name: string;
  art_style?: string;
  auto_publish: boolean;
  category_id?: number;
  discount_rate?: number;
  feature_tags?: string[];
  file_option: ToolsAppManagementAndroidBasicPackageUpdateV2FileOption;
  files: ToolsAppManagementAndroidBasicPackageUpdateV2RequestFilesInner[];
  game_box_name?: string;
  game_ip_tag?: string;
  game_ip_type?: ToolsAppManagementAndroidBasicPackageUpdateV2GameIpType[];
  has_discount?: boolean;
  has_online_earning?: boolean;
  max_payment_tier_range?: ToolsAppManagementAndroidBasicPackageUpdateV2MaxPaymentTierRange;
  max_recharge_tier?: ToolsAppManagementAndroidBasicPackageUpdateV2MaxRechargeTier;
  membership_type?: ToolsAppManagementAndroidBasicPackageUpdateV2MembershipType;
  mid_payment_tier_range?: ToolsAppManagementAndroidBasicPackageUpdateV2MidPaymentTierRange;
  min_payment_tier_range?: ToolsAppManagementAndroidBasicPackageUpdateV2MinPaymentTierRange;
  min_recharge_tier?: ToolsAppManagementAndroidBasicPackageUpdateV2MinRechargeTier;
  network_environment?: string[];
  package_id: string;
  payment_type: ToolsAppManagementAndroidBasicPackageUpdateV2PaymentType;
  permissions_description: string;
  recommend: string;
  recommended_recharge_tier?: ToolsAppManagementAndroidBasicPackageUpdateV2RecommendedRechargeTier;
  revenue_model?: ToolsAppManagementAndroidBasicPackageUpdateV2RevenueModel;
  schedule_cards?: ToolsAppManagementAndroidBasicPackageUpdateV2ScheduleCards[];
  spokesperson?: string;
  theme_tag_id?: string;
  update_description: string;
}

