import type { AdgroupsDeleteResponseData, ApiErrorStruct } from "../models";
export interface AdgroupsDeleteResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: AdgroupsDeleteResponseData;
}
