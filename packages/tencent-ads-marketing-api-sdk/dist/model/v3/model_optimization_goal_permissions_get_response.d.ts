import type { ApiErrorStruct, OptimizationGoalPermissionsGetResponseData } from "../v3/index";
export interface OptimizationGoalPermissionsGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: OptimizationGoalPermissionsGetResponseData;
}
