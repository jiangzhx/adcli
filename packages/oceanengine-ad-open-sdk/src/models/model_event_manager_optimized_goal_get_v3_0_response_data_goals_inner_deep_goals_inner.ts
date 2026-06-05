// 由 oceanengine/ad_open_sdk_go models/model_event_manager_optimized_goal_get_v3_0_response_data_goals_inner_deep_goals_inner.go 生成
// 不要手动编辑。

import type { EventManagerOptimizedGoalGetV30DataGoalsDeepGoalsAssetTypes, EventManagerOptimizedGoalGetV30DataGoalsDeepGoalsDeepExternalAction } from "../models/index";

export interface EventManagerOptimizedGoalGetV30ResponseDataGoalsInnerDeepGoalsInner {
  asset_types?: EventManagerOptimizedGoalGetV30DataGoalsDeepGoalsAssetTypes[];
  deep_external_action?: EventManagerOptimizedGoalGetV30DataGoalsDeepGoalsDeepExternalAction;
  history_back?: boolean;
  optimization_name?: string;
  twenty_four_hour_back?: boolean;
}

