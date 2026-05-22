import type { AccountVersionGetResponseData, ApiErrorStruct } from "../models";
export interface AccountVersionGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: AccountVersionGetResponseData;
}
