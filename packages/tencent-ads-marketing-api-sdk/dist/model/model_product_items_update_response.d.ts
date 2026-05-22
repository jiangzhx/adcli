import type { ApiErrorStruct } from "../model/index";
export interface ProductItemsUpdateResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
}
