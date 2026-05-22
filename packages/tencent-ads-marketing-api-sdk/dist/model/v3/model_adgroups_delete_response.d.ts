import type { AdgroupsDeleteResponseData, ApiErrorStruct } from "../v3/index";
export interface AdgroupsDeleteResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: AdgroupsDeleteResponseData;
}
