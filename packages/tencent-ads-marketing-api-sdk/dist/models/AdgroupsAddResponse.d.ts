import type { AdgroupsAddResponseData, ApiErrorStruct } from "../models";
export interface AdgroupsAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: AdgroupsAddResponseData;
}
