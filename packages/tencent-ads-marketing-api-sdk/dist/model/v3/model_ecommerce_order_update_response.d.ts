import type { ApiErrorStruct } from "../v3/index";
export interface EcommerceOrderUpdateResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
}
