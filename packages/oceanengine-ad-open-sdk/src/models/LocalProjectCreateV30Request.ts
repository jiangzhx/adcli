// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { LocalProjectCreateV30AdType, LocalProjectCreateV30AigcDynamicCreativeSwitch, LocalProjectCreateV30AutoUpdatePois, LocalProjectCreateV30BidType, LocalProjectCreateV30BudgetMode, LocalProjectCreateV30DeliveryGoal, LocalProjectCreateV30DeliveryPackage, LocalProjectCreateV30DeliveryPoiMode, LocalProjectCreateV30ExternalAction, LocalProjectCreateV30IntelligentSelectionMode, LocalProjectCreateV30LocalAssetType, LocalProjectCreateV30LocalDeliveryScene, LocalProjectCreateV30MarketingGoal, LocalProjectCreateV30PeakHolidays, LocalProjectCreateV30PeakWeekDays, LocalProjectCreateV30RequestAudience, LocalProjectCreateV30ScheduleType } from "../models";

export interface LocalProjectCreateV30Request {
  ad_type: LocalProjectCreateV30AdType;
  aigc_dynamic_creative_switch?: LocalProjectCreateV30AigcDynamicCreativeSwitch;
  audience?: LocalProjectCreateV30RequestAudience;
  auto_update_pois?: LocalProjectCreateV30AutoUpdatePois;
  aweme_id?: string;
  bid?: number;
  bid_type?: LocalProjectCreateV30BidType;
  budget: number;
  budget_mode: LocalProjectCreateV30BudgetMode;
  consult_aweme_uid?: string;
  daily_delivery_seconds?: number;
  delivery_goal?: LocalProjectCreateV30DeliveryGoal;
  delivery_package?: LocalProjectCreateV30DeliveryPackage;
  delivery_poi_mode?: LocalProjectCreateV30DeliveryPoiMode;
  end_time?: string;
  external_action?: LocalProjectCreateV30ExternalAction;
  high_budget_rate?: number;
  intelligent_selection_mode?: LocalProjectCreateV30IntelligentSelectionMode;
  is_set_peak_budget?: boolean;
  local_account_id: number | string;
  local_asset_type?: LocalProjectCreateV30LocalAssetType;
  local_delivery_scene: LocalProjectCreateV30LocalDeliveryScene;
  market_page_ids?: number | string[];
  marketing_goal: LocalProjectCreateV30MarketingGoal;
  name: string;
  peak_holidays?: LocalProjectCreateV30PeakHolidays[];
  peak_week_days?: LocalProjectCreateV30PeakWeekDays[];
  product_id?: number | string;
  promotion_poi_ids?: number | string[];
  schedule_fixed_seconds?: number;
  schedule_time?: string;
  schedule_type: LocalProjectCreateV30ScheduleType;
  start_time?: string;
  tool_pack_id?: number | string;
}

