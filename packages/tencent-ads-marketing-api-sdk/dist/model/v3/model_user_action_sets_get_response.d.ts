import type { ApiErrorStruct, UserActionSetsGetResponseData } from "../v3/index";
export interface UserActionSetsGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: UserActionSetsGetResponseData;
}
