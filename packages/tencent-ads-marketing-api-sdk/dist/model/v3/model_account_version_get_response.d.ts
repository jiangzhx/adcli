import type { AccountVersionGetResponseData, ApiErrorStruct } from "../v3/index";
export interface AccountVersionGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: AccountVersionGetResponseData;
}
