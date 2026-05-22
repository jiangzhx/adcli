import type { ApiErrorStruct, ProductsSystemStatusGetResponseData } from "../models";
export interface ProductsSystemStatusGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: ProductsSystemStatusGetResponseData;
}
