import type { ApiErrorStruct, UserPropertySetsGetResponseData } from "../models";
export interface UserPropertySetsGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: UserPropertySetsGetResponseData;
}
