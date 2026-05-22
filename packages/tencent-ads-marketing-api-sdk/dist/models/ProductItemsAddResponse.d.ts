import type { ApiErrorStruct, ProductItemsAddResponseData } from "../models";
export interface ProductItemsAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: ProductItemsAddResponseData;
}
