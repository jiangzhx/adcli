import type { AdgroupsAddResponseData, ApiErrorStruct } from "../v3/index";
export interface AdgroupsAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: AdgroupsAddResponseData;
}
