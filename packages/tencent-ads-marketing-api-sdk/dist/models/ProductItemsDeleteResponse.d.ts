import type { ApiErrorStruct } from "../models";
export interface ProductItemsDeleteResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
}
