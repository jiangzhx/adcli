import type { ApiErrorStruct, UserPropertySetsGetResponseData } from "../model/index";
export interface UserPropertySetsGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: UserPropertySetsGetResponseData;
}
