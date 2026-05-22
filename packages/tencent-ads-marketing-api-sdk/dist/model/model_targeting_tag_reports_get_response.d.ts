import type { ApiErrorStruct, TargetingTagReportsGetResponseData } from "../model/index";
export interface TargetingTagReportsGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: TargetingTagReportsGetResponseData;
}
