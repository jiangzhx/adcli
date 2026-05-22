import type { ApiErrorStruct, UserActionSetsAddResponseData } from "../v3/index";
export interface UserActionSetsAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: UserActionSetsAddResponseData;
}
