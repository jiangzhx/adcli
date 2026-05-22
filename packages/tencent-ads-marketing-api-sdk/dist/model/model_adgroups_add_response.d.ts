import type { AdgroupsAddResponseData, ApiErrorStruct } from "../model/index";
export interface AdgroupsAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: AdgroupsAddResponseData;
}
