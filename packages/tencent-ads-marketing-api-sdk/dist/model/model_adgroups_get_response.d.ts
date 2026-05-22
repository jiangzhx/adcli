import type { AdgroupsGetResponseData, ApiErrorStruct } from "../model/index";
export interface AdgroupsGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: AdgroupsGetResponseData;
}
