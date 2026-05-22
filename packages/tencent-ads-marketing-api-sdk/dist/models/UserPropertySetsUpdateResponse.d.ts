import type { ApiErrorStruct } from "../models";
export interface UserPropertySetsUpdateResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
}
