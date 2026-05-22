import type { ApiErrorStruct } from "../models";
export interface ProductItemsBatchUpdateResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
}
