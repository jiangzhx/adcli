import type { AdgroupsGetResponseData, ApiErrorStruct } from "../models";
export interface AdgroupsGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: AdgroupsGetResponseData;
}
