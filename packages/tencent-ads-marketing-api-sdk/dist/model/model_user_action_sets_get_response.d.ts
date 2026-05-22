import type { ApiErrorStruct, UserActionSetsGetResponseData } from "../model/index";
export interface UserActionSetsGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: UserActionSetsGetResponseData;
}
