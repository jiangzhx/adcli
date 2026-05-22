// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { EventManagerOptimizedGoalGetV2V30DataGoalsAssetTypes, EventManagerOptimizedGoalGetV2V30DataGoalsExternalAction, EventManagerOptimizedGoalGetV2V30DataGoalsValueType, EventManagerOptimizedGoalGetV2V30ResponseDataGoalsInnerDeepGoalsInner } from "../models";

export interface EventManagerOptimizedGoalGetV2V30ResponseDataGoalsInner {
  asset_types?: EventManagerOptimizedGoalGetV2V30DataGoalsAssetTypes[];
  deep_goals?: EventManagerOptimizedGoalGetV2V30ResponseDataGoalsInnerDeepGoalsInner[];
  external_action?: EventManagerOptimizedGoalGetV2V30DataGoalsExternalAction;
  history_back: boolean;
  need_app_force?: boolean;
  optimization_name: string;
  twenty_four_hour_back: boolean;
  value_type?: EventManagerOptimizedGoalGetV2V30DataGoalsValueType;
}

