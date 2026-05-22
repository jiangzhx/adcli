import type { ApiErrorStruct, UserPropertySetsAddResponseData } from "../models";
export interface UserPropertySetsAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: UserPropertySetsAddResponseData;
}
