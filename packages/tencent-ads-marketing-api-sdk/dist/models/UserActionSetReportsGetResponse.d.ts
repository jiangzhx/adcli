import type { ApiErrorStruct, UserActionSetReportsGetResponseData } from "../models";
export interface UserActionSetReportsGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: UserActionSetReportsGetResponseData;
}
