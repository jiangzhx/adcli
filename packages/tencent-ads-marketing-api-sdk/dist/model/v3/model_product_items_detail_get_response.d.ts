import type { ApiErrorStruct, ProductItemsDetailGetResponseData } from "../v3/index";
export interface ProductItemsDetailGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: ProductItemsDetailGetResponseData;
}
