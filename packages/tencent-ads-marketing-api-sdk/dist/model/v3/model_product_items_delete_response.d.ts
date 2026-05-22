import type { ApiErrorStruct } from "../v3/index";
export interface ProductItemsDeleteResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
}
