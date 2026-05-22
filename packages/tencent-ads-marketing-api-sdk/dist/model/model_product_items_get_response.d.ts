import type { ApiErrorStruct, ProductItemsGetResponseData } from "../model/index";
export interface ProductItemsGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: ProductItemsGetResponseData;
}
