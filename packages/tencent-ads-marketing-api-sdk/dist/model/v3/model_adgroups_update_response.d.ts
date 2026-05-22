import type { AdgroupsUpdateResponseData, ApiErrorStruct } from "../v3/index";
export interface AdgroupsUpdateResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: AdgroupsUpdateResponseData;
}
