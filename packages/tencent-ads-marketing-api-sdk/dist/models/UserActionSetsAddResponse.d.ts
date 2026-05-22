import type { ApiErrorStruct, UserActionSetsAddResponseData } from "../models";
export interface UserActionSetsAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: UserActionSetsAddResponseData;
}
