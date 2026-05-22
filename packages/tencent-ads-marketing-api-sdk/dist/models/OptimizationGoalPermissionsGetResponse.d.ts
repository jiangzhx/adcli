import type { ApiErrorStruct, OptimizationGoalPermissionsGetResponseData } from "../models";
export interface OptimizationGoalPermissionsGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: OptimizationGoalPermissionsGetResponseData;
}
