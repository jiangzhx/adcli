import type { ApiErrorStruct } from "../models";
export interface ProductItemsUpdateResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
}
