import type { AdgroupsUpdateResponseData, ApiErrorStruct } from "../model/index";
export interface AdgroupsUpdateResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: AdgroupsUpdateResponseData;
}
