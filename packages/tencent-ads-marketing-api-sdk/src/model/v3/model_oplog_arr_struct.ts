// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_oplog_arr_struct.go
// Do not edit manually.

import type { OperationActionType, OperationInfoListStruct, OperatorPlatformType } from "../v3/index";

export interface OplogArrStruct {
  operation_action?: OperationActionType;
  fronted_operator?: string;
  operation_object_id?: number | string;
  operation_object_name?: string;
  operator_platform?: OperatorPlatformType;
  operation_log?: string[];
  created_time?: number;
  operation_info_list?: OperationInfoListStruct[];
}

