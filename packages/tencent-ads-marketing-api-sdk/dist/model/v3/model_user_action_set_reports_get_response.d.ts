import type { ApiErrorStruct, UserActionSetReportsGetResponseData } from "../v3/index";
export interface UserActionSetReportsGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: UserActionSetReportsGetResponseData;
}
