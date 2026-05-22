// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { ToolsEbpAppUpdateV30AccountType, ToolsEbpAppUpdateV30FileOption, ToolsEbpAppUpdateV30GameIpType, ToolsEbpAppUpdateV30MaxPaymentTierRange, ToolsEbpAppUpdateV30MaxRechargeTier, ToolsEbpAppUpdateV30MembershipType, ToolsEbpAppUpdateV30MidPaymentTierRange, ToolsEbpAppUpdateV30MinPaymentTierRange, ToolsEbpAppUpdateV30MinRechargeTier, ToolsEbpAppUpdateV30PaymentType, ToolsEbpAppUpdateV30RecommendedRechargeTier, ToolsEbpAppUpdateV30RequestFilesInner, ToolsEbpAppUpdateV30RevenueModel, ToolsEbpAppUpdateV30ScheduleCards } from "../models";

export interface ToolsEbpAppUpdateV30Request {
  account_id: number | string;
  account_type: ToolsEbpAppUpdateV30AccountType;
  app_description?: string;
  app_name?: string;
  art_style?: string;
  auto_publish?: boolean;
  basic_package_id?: string;
  category_id?: number | string;
  developer_name?: string;
  discount_rate?: number;
  feature_tags?: string[];
  file_option?: ToolsEbpAppUpdateV30FileOption;
  files?: ToolsEbpAppUpdateV30RequestFilesInner[];
  game_box_name?: string;
  game_ip_tag?: string;
  game_ip_type?: ToolsEbpAppUpdateV30GameIpType[];
  has_discount?: boolean;
  has_online_earning?: boolean;
  max_payment_tier_range?: ToolsEbpAppUpdateV30MaxPaymentTierRange;
  max_recharge_tier?: ToolsEbpAppUpdateV30MaxRechargeTier;
  membership_type?: ToolsEbpAppUpdateV30MembershipType;
  mid_payment_tier_range?: ToolsEbpAppUpdateV30MidPaymentTierRange;
  min_payment_tier_range?: ToolsEbpAppUpdateV30MinPaymentTierRange;
  min_recharge_tier?: ToolsEbpAppUpdateV30MinRechargeTier;
  network_environment?: string[];
  payment_type?: ToolsEbpAppUpdateV30PaymentType;
  permissions_description?: string;
  recommend?: string;
  recommended_recharge_tier?: ToolsEbpAppUpdateV30RecommendedRechargeTier;
  revenue_model?: ToolsEbpAppUpdateV30RevenueModel;
  schedule_cards?: ToolsEbpAppUpdateV30ScheduleCards[];
  spokesperson?: string;
  theme_tag_id?: string;
  update_description?: string;
}

