import type { OperationActionType, OperatorPlatformType } from "../v3/index";
export interface OperationInfoListStruct {
    operation_action?: OperationActionType;
    fronted_operator?: string;
    operation_object_id?: number | string;
    operation_object_name?: string;
    operator_platform?: OperatorPlatformType;
    operation_log?: string[];
    created_time?: number;
}
