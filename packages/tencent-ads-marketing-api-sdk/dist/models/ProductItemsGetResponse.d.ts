import type { ApiErrorStruct, ProductItemsGetResponseData } from "../models";
export interface ProductItemsGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: ProductItemsGetResponseData;
}
