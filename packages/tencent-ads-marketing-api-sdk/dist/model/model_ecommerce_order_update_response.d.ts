import type { ApiErrorStruct } from "../model/index";
export interface EcommerceOrderUpdateResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
}
