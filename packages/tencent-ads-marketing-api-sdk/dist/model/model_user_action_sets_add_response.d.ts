import type { ApiErrorStruct, UserActionSetsAddResponseData } from "../model/index";
export interface UserActionSetsAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: UserActionSetsAddResponseData;
}
