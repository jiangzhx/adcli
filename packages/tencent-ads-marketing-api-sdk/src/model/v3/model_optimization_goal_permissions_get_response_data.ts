// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_optimization_goal_permissions_get_response_data.go
// Do not edit manually.

import type { ConversionLinkOgItem, DeepBehaviorAdvancedGoalPermissionStruct, DeepBehaviorOptimizationGoalPermissionStruct, DeepWorthAdvancedGoalPermissionStruct, DeepWorthOptimizationGoalPermissionStruct, ForwardLinkAssistPermissionStruct } from "../v3/index";

export interface OptimizationGoalPermissionsGetResponseData {
  optimization_goal_permission_list?: string[];
  deep_behavior_optimization_goal_permission_list?: DeepBehaviorOptimizationGoalPermissionStruct[];
  deep_worth_optimization_goal_permission_list?: DeepWorthOptimizationGoalPermissionStruct[];
  deep_behavior_advanced_goal_permission_list?: DeepBehaviorAdvancedGoalPermissionStruct[];
  deep_worth_advanced_goal_permission_list?: DeepWorthAdvancedGoalPermissionStruct[];
  forward_link_assist_permission_list?: ForwardLinkAssistPermissionStruct[];
  conversion_link_og_info?: ConversionLinkOgItem[];
}

