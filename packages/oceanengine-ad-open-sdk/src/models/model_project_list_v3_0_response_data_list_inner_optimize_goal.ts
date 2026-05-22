// Generated from oceanengine/ad_open_sdk_go models/model_project_list_v3_0_response_data_list_inner_optimize_goal.go
// Do not edit manually.

import type { ProjectListV30DataListOptimizeGoalDeepExternalAction, ProjectListV30DataListOptimizeGoalExternalAction } from "../models/index";

export interface ProjectListV30ResponseDataListInnerOptimizeGoal {
  asset_ids?: number | string[];
  convert_id?: number | string;
  deep_external_action?: ProjectListV30DataListOptimizeGoalDeepExternalAction;
  external_action?: ProjectListV30DataListOptimizeGoalExternalAction;
  game_addiction_id?: string;
  paid_switch?: number;
}

