import type { ApiErrorStruct, ComponentDependsGetResponseData } from "../v3/index";
export interface ComponentDependsGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: ComponentDependsGetResponseData;
}
