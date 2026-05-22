import type { ApiErrorStruct, ProductItemsDetailGetResponseData } from "../model/index";
export interface ProductItemsDetailGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: ProductItemsDetailGetResponseData;
}
