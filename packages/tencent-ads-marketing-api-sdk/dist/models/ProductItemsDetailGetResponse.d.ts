import type { ApiErrorStruct, ProductItemsDetailGetResponseData } from "../models";
export interface ProductItemsDetailGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: ProductItemsDetailGetResponseData;
}
