import type { ApiErrorStruct, ProductItemsAddResponseData } from "../v3/index";
export interface ProductItemsAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: ProductItemsAddResponseData;
}
