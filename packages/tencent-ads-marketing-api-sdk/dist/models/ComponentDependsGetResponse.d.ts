import type { ApiErrorStruct, ComponentDependsGetResponseData } from "../models";
export interface ComponentDependsGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: ComponentDependsGetResponseData;
}
