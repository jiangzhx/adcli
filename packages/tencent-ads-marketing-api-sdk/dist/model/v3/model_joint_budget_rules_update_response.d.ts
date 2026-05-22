import type { ApiErrorStruct, JointBudgetRulesUpdateResponseData } from "../v3/index";
export interface JointBudgetRulesUpdateResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: JointBudgetRulesUpdateResponseData;
}
