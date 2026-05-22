import type { AccountSubsidyGetResponseData, ApiErrorStruct } from "../models";
export interface AccountSubsidyGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: AccountSubsidyGetResponseData;
}
