import type { AdgroupsUpdateConfiguredStatusResponseData, ApiErrorStruct } from "../v3/index";
export interface AdgroupsUpdateConfiguredStatusResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: AdgroupsUpdateConfiguredStatusResponseData;
}
