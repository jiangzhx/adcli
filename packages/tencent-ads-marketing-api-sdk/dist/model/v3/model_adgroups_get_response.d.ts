import type { AdgroupsGetResponseData, ApiErrorStruct } from "../v3/index";
export interface AdgroupsGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: AdgroupsGetResponseData;
}
