import type { ApiErrorStruct } from "../model/index";
export interface ProductItemsBatchUpdateResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
}
