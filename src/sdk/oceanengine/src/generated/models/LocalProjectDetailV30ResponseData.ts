// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import type { LocalProjectDetailV30DataAdType, LocalProjectDetailV30DataAiOptimizeLocalAssetSwitch, LocalProjectDetailV30DataAigcDynamicCreativeSwitch, LocalProjectDetailV30DataAutoUpdatePois, LocalProjectDetailV30DataBidType, LocalProjectDetailV30DataBudgetMode, LocalProjectDetailV30DataDeepExternalAction, LocalProjectDetailV30DataDeliveryPackage, LocalProjectDetailV30DataDeliveryPoiMode, LocalProjectDetailV30DataExternalAction, LocalProjectDetailV30DataIntelligentSelectionMode, LocalProjectDetailV30DataLocalAssetType, LocalProjectDetailV30DataLocalDeliveryScene, LocalProjectDetailV30DataMarketingGoal, LocalProjectDetailV30DataPeakHolidays, LocalProjectDetailV30DataPeakWeekDays, LocalProjectDetailV30DataScheduleType, LocalProjectDetailV30ResponseDataAudience } from "../models";

export interface LocalProjectDetailV30ResponseData {
  ad_type?: LocalProjectDetailV30DataAdType;
  ai_optimize_local_asset_switch?: LocalProjectDetailV30DataAiOptimizeLocalAssetSwitch;
  aigc_dynamic_creative_switch?: LocalProjectDetailV30DataAigcDynamicCreativeSwitch;
  audience?: LocalProjectDetailV30ResponseDataAudience;
  auto_update_pois?: LocalProjectDetailV30DataAutoUpdatePois;
  aweme_id?: string;
  bid?: number;
  bid_type?: LocalProjectDetailV30DataBidType;
  budget?: number;
  budget_mode?: LocalProjectDetailV30DataBudgetMode;
  consult_aweme_uid?: string;
  daily_delivery_seconds?: number;
  deep_external_action?: LocalProjectDetailV30DataDeepExternalAction;
  delivery_package?: LocalProjectDetailV30DataDeliveryPackage;
  delivery_poi_mode?: LocalProjectDetailV30DataDeliveryPoiMode;
  end_time?: string;
  external_action?: LocalProjectDetailV30DataExternalAction;
  high_budget_rate?: number;
  intelligent_selection_mode?: LocalProjectDetailV30DataIntelligentSelectionMode;
  is_set_peak_budget?: boolean;
  local_account_id?: number;
  local_asset_type?: LocalProjectDetailV30DataLocalAssetType;
  local_delivery_scene?: LocalProjectDetailV30DataLocalDeliveryScene;
  market_page_ids?: number[];
  marketing_goal?: LocalProjectDetailV30DataMarketingGoal;
  multi_poi_id?: number;
  name?: string;
  peak_holidays?: LocalProjectDetailV30DataPeakHolidays[];
  peak_week_days?: LocalProjectDetailV30DataPeakWeekDays[];
  poi_id?: number;
  product_id?: number;
  project_id?: number;
  schedule_fixed_seconds?: number;
  schedule_time?: string;
  schedule_type?: LocalProjectDetailV30DataScheduleType;
  start_time?: string;
  tool_pack_id?: number;
}

