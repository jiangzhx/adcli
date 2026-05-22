import type { ApiErrorStruct, JointBudgetRulesAddResponseData } from "../v3/index";
export interface JointBudgetRulesAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: JointBudgetRulesAddResponseData;
}
