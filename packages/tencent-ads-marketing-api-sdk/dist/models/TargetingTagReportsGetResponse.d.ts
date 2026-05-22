import type { ApiErrorStruct, TargetingTagReportsGetResponseData } from "../models";
export interface TargetingTagReportsGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: TargetingTagReportsGetResponseData;
}
