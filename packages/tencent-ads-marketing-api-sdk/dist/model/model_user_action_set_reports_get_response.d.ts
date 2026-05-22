import type { ApiErrorStruct, UserActionSetReportsGetResponseData } from "../model/index";
export interface UserActionSetReportsGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: UserActionSetReportsGetResponseData;
}
