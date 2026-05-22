import type { AccountSubsidyGetResponseData, ApiErrorStruct } from "../v3/index";
export interface AccountSubsidyGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: AccountSubsidyGetResponseData;
}
