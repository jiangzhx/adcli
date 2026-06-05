// 由 oceanengine/ad_open_sdk_go models/model_event_manager_optimized_goal_get_v3_0_response_data_goals_inner.go 生成
// 不要手动编辑。

import type { EventManagerOptimizedGoalGetV30DataGoalsAssetTypes, EventManagerOptimizedGoalGetV30DataGoalsExternalAction, EventManagerOptimizedGoalGetV30DataGoalsValueType, EventManagerOptimizedGoalGetV30ResponseDataGoalsInnerDeepGoalsInner } from "../models/index";

export interface EventManagerOptimizedGoalGetV30ResponseDataGoalsInner {
  asset_types?: EventManagerOptimizedGoalGetV30DataGoalsAssetTypes[];
  deep_goals?: EventManagerOptimizedGoalGetV30ResponseDataGoalsInnerDeepGoalsInner[];
  external_action?: EventManagerOptimizedGoalGetV30DataGoalsExternalAction;
  history_back: boolean;
  need_app_force?: boolean;
  optimization_name: string;
  twenty_four_hour_back: boolean;
  value_type?: EventManagerOptimizedGoalGetV30DataGoalsValueType;
}

