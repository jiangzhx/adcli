// Generated from oceanengine/ad_open_sdk_go models/model_tools_event_convert_optimized_goal_get_v3_0_response_data_goals_inner.go
// Do not edit manually.

import type { ToolsEventConvertOptimizedGoalGetV30DataGoalsAssetTypes, ToolsEventConvertOptimizedGoalGetV30DataGoalsExternalAction, ToolsEventConvertOptimizedGoalGetV30DataGoalsValueType, ToolsEventConvertOptimizedGoalGetV30ResponseDataGoalsInnerDeepGoalsInner } from "../models/index";

export interface ToolsEventConvertOptimizedGoalGetV30ResponseDataGoalsInner {
  asset_types?: ToolsEventConvertOptimizedGoalGetV30DataGoalsAssetTypes[];
  assets_id?: number | string;
  deepGoals?: ToolsEventConvertOptimizedGoalGetV30ResponseDataGoalsInnerDeepGoalsInner[];
  external_action?: ToolsEventConvertOptimizedGoalGetV30DataGoalsExternalAction;
  history_back?: boolean;
  optimization_name?: string;
  spare_assets_id?: number | string;
  twenty_four_hour_back?: boolean;
  value_type?: ToolsEventConvertOptimizedGoalGetV30DataGoalsValueType;
}

