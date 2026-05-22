import type { ApiErrorStruct } from "../model/index";
export interface UserPropertySetsUpdateResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
}
