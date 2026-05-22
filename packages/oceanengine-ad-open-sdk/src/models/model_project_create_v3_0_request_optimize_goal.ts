// Generated from oceanengine/ad_open_sdk_go models/model_project_create_v3_0_request_optimize_goal.go
// Do not edit manually.

import type { ProjectCreateV30OptimizeGoalDeepExternalAction, ProjectCreateV30OptimizeGoalExternalAction } from "../models/index";

export interface ProjectCreateV30RequestOptimizeGoal {
  asset_ids?: (number | string)[];
  convert_id?: number | string;
  deep_external_action?: ProjectCreateV30OptimizeGoalDeepExternalAction;
  external_action?: ProjectCreateV30OptimizeGoalExternalAction;
  game_addiction_id?: string;
}

