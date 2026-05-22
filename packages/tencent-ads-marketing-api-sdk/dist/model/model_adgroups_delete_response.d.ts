import type { AdgroupsDeleteResponseData, ApiErrorStruct } from "../model/index";
export interface AdgroupsDeleteResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: AdgroupsDeleteResponseData;
}
