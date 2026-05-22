import type { AdgroupsUpdateResponseData, ApiErrorStruct } from "../models";
export interface AdgroupsUpdateResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: AdgroupsUpdateResponseData;
}
