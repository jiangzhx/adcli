import type { ApiErrorStruct, UserPropertySetsAddResponseData } from "../model/index";
export interface UserPropertySetsAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: UserPropertySetsAddResponseData;
}
