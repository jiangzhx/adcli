import type { ApiErrorStruct } from "../models";
export interface EcommerceOrderUpdateResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
}
