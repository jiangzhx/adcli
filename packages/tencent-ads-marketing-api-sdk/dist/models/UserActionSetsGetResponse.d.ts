import type { ApiErrorStruct, UserActionSetsGetResponseData } from "../models";
export interface UserActionSetsGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: UserActionSetsGetResponseData;
}
