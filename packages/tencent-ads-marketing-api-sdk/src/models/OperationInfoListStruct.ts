// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import type { OperationActionType, OperatorPlatformType } from "../models";

export interface OperationInfoListStruct {
  operation_action?: OperationActionType;
  fronted_operator?: string;
  operation_object_id?: number | string;
  operation_object_name?: string;
  operator_platform?: OperatorPlatformType;
  operation_log?: string[];
  created_time?: number;
}

